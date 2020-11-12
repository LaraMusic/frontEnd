import React, { useState, useEffect } from "react";
import SquarePlayButton from "../../Play/molecules/SquarePlayButton";
import { CgShare } from "react-icons/cg";
import sectionPopular from "../../Style/Player/molecules/sectionPopular";
import { FiPlay } from "react-icons/fi";
import { getPlaylistCleaned } from "../../../lib/spotifyRequest";
const SectionPopular = () => {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const playlist = await getPlaylistCleaned("37i9dQZF1DX5BAPG29mHS8", 1);
    const musica = playlist;
    setMusic(musica);
  };

  return (
    <>
      {music.map((item) => {
        return (
          <section id="trending" key={item.song_id}>
            <img src={item.image_uri} />
            <h3>// TRENDING</h3>
            <h1>{item.title}</h1>
            <h2>{item.artist}</h2>
            <div className="buttons">
              <SquarePlayButton song={item} />
            </div>
            <style jsx sectionPopular>
              {sectionPopular}
            </style>
          </section>
        );
      })}
    </>
  );
};

export default SectionPopular;
