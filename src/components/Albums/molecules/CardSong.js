import React, { useState, useEffect } from "react";
import { usePlayer } from "../../../contexts/PlayerContext";
import { getPlaylistCleaned } from "../../../lib/spotifyRequest";
import playbutton from "../../../../assets/img/play.svg";
import CardSongStyles from "../../Style/Albums/molecules/CardSongStyles";

function CardSong() {
  const { setPlayingSong } = usePlayer();
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const playlist = await getPlaylistCleaned("37i9dQZF1DX5BAPG29mHS8", 12);
    const musica = playlist;
    setMusic(musica);
  };

  const onPlay = (song) => {
    setPlayingSong(song);
  };

  return (
    <>
      {music.map((item) => (
        <div className="card__song" key={item.song_id}>
          <div className="card__song--image">
            <img src={item.image_uri} alt="" />
            <span
              className="card__overlay"
              onClick={() => {
                onPlay(item);
              }}
            >
              <img src={playbutton}></img>
            </span>
          </div>
          <p className="title__song">{item.title}</p>
          <p className="artist_name">{item.artist}</p>
        </div>
      ))}
      <style jsx CardSongStyles>
        {CardSongStyles}
      </style>
    </>
  );
}
export default CardSong;
