import React from 'react';
import { usePlayer } from '../../../contexts/PlayerContext';

const roundPlayButton = (song) => {
  const { setPlayingSong } = usePlayer();

  const onPlay = (song) => {
    setPlayingSong(song);
  };

  return (
    <div className='card__song' key={song.id}>
      <div className='card__song--image'>
        <img src={song.image_uri} alt={song.title} />
        <span
          className='card__overlay'
          onClick={() => {
            onPlay(song);
          }}
        >
          <img src={playbutton}></img>
        </span>
      </div>
      <p className='title__song'>{song.title}</p>
      <p className='artist_name'>{song.artist}</p>
    </div>
  );
};

export default roundPlayButton;
