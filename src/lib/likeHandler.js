import axios from 'axios';

export const likeHandler = async (song, user) => {
  const songId = await createSong(song);
  const userFavouriteListId = await getFavouriteList(user);
  const favoriteSong = {
    musiclist: userFavouriteListId,
    musictrack: songId,
  };
  setLikedSong(favoriteSong);
  let newList = await updateFavoritesLists(userFavouriteListId);
  return newList;
};

export const createSong = async (song) => {
  const API_HOST = 'https://laramusicapi.herokuapp.com/api/v1/musictracks/';
  return axios.post(API_HOST, song).then((res) => {
    return res.data.id;
  });
};
export const setLikedSong = async (liked) => {
  const API_HOST = 'https://laramusicapi.herokuapp.com/api/v1/trackinlists/';
  return axios.post(API_HOST, liked).then((res) => {
    return res.data;
  });
};
export const updateFavoritesLists = async (id) => {
  const API_HOST = 'https://laramusicapi.herokuapp.com/api/v1/musiclists/';
  return axios.get(`${API_HOST}${id}`).then((res) => {
    return res.data;
  });
};

export const getFavouriteList = async (username) => {
  const API_HOST = 'https://laramusicapi.herokuapp.com/api/v1/users/';
  let favoriteListId = 1;
  try {
    let user = await axios.get(`${API_HOST}${username}`).then((res) => {
      return res.data;
    });
    user.profile.musiclists.map((list) => {
      if (list.type_list === 'favourites') {
        favoriteListId = list.id;
      }
    });
  } catch (e) {
    console.error(e);
  }
  return favoriteListId;
};

export const getFavoriteSongs = async (user) => {
  const favoriteListid = await getFavouriteList(user.username);
  const newList = await updateFavoritesLists(favoriteListid);
  return newList;
};
