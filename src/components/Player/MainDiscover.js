import React from "react";
import ListTrack from "./molecules/ListTrackDiscover";
import SectionPopular from "./molecules/SectionPopularDiscover.js";
import FeatureTracks from "../Albums/FeatureTracksDiscover";

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
