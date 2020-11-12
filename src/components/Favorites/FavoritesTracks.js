import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import playbutton from '../../../assets/img/play.svg';
import FavoritesStyles from '../Style/Favorites/FavoritesStyles';
import { usePlayer } from '../../contexts/PlayerContext';

function FavoritesTracks() {
  const { favorites } = useAuth();
  console.log(favorites);
  const { setPlayingSong } = usePlayer();

  const onPlay = (song) => {
    setPlayingSong(song);
  };
  return (
    <section className='feature__tracks'>
      <div className='feature_tracks_title'>
        <h1>Featured Tracks</h1>
      </div>
      <div className='card__list'>
        {favorites.musictracks.map((item) => (
          <div className='card__song' key={item.id}>
            <div className='card__song--image'>
              <img src={item.image_uri} alt={item.title} />
              <span
                className='card__overlay'
                onClick={() => {
                  onPlay(item);
                }}
              >
                <img src={playbutton}></img>
              </span>
            </div>
            <p className='title__song'>{item.title}</p>
            <p className='artist_name'>{item.artist}</p>
          </div>
        ))}
      </div>
      <style jsx FavoritesStyles>
        {FavoritesStyles}
      </style>
    </section>
  );
}
export default FavoritesTracks;
