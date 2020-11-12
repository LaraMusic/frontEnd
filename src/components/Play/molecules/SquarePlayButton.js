import React from "react";
import { usePlayer } from "../../../contexts/PlayerContext";
import sectionPopular from "../../Style/Player/molecules/sectionPopular";
const roundPlayButton = (song) => {
  const { setPlayingSong } = usePlayer();

  const onPlay = (song) => {
    setPlayingSong(song);
  };

  return (
    <>
      <button
        onClick={() => {
          onPlay(song.song);
        }}
        className="buttons__one"
      >
        Play ►
      </button>
      <style jsx sectionPopular>
        {sectionPopular}
      </style>
    </>
  );
};

export default roundPlayButton;
