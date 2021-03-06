import React from "react";
import { useAuth } from "../../contexts/AuthContext";

import RoundPlayButton from "../Play/molecules/RoundPlayButton";

import logoAlbum from "../../../assets/img/album.png";
import bannerFavorite from "../../../assets/img/imagen-favoritos1.jpg";
import FavoritesTracks from "./FavoritesTracks";
import FavoritesStyles from "../Style/Favorites/FavoritesStyles";

const Favorites = () => {
  const { favorites } = useAuth();

  if (!favorites.musictracks) {
    return null;
  }

  return (
    <div className="containerContent">
      <div id="trending">
        <img src={bannerFavorite} alt="favorites-list-image" />
      </div>
      <FavoritesTracks />
      <section className="about__album">
        <div className="banner__song">
          <img src={logoAlbum} alt="list-image" />
        </div>
        <div className="info__album_container">
          <a href="">// My Favorites</a>
          <h1 className="title__album">{favorites.title}</h1>
          <h2 className="authors__album">Enjoy your Favorite's selection!</h2>

          <div className="content__music">
            {favorites.musictracks.map((item) => (
              <div className="tab__music" key={item.id}>
                <div className="tab__music__icons">
                  <div className="icon">
                    <RoundPlayButton song={item} />
                  </div>
                </div>
                <p className="tab__music__title">{item.title.substr(0, 20)}</p>
                <p className="tab__music__plays">{item.artist}</p>
                <p className="tab__music__time">{item.fuente}</p>
                <p className="tab__music__time">{parseInt(item.duration)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx FavoritesStyles>
        {FavoritesStyles}
      </style>
    </div>
  );
};

export default Favorites;
