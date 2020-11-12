import React from "react";
import { usePlayer } from "../../../contexts/PlayerContext";
import playbutton from "../../../../assets/img/play.svg";
import CardSongStyles from "../../Style/Albums/molecules/CardSongStyles";
const roundPlayButton = (song) => {
  const { setPlayingSong } = usePlayer();

  const onPlay = (song) => {
    // console.log(song);
    setPlayingSong(song);
  };

  return (
    <>
      <div className="card__song" key={song.song_id}>
        <div className="card__song--image">
          <img src={song.image_uri} alt={song.title} />
          <span
            className="card__overlay"
            onClick={() => {
              onPlay(song);
            }}
          >
            <img src={playbutton}></img>
          </span>
        </div>
        <p className="title__song">{song.title}</p>
        <p className="artist_name">{song.artist}</p>
      </div>
      <style jsx CardSongStyles>
        {CardSongStyles}
      </style>
    </>
  );
};

export default roundPlayButton;
