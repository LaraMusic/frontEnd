import React from "react";
import ListTrack from "./molecules/Mol__ListTrack";
import SectionPopular from "./molecules/SectionPopular.js";
import FeatureTracks from "../Albums/FeatureTracks";

import ListTrackStyle from "../Style/Player/molecules/ListTrackStyle";
const MainPlayer = () => {
  return (
    <main className="containerContent">
      <SectionPopular />
      <article className="container__home">
        <FeatureTracks />
        <ListTrack />
      </article>
      <style jsx ListTrackStyle>
        {ListTrackStyle}
      </style>
    </main>
  );
};

export default MainPlayer;
