import React from "react";
<<<<<<< HEAD
import AlbumStyles from "./AlbumStyles";
import FeatureTracks from "./FeatureTracks";
import AboutAlbum from "./AboutAlbum";
=======

import FeatureTracks from "./FeatureTracks";
import AboutAlbum from "./AboutAlbum";

import AlbumStyles from "../Style/Albums/AlbumStyles";

>>>>>>> unite
function ContentAlbum() {
  return (
    <div className="containerContent">
      <FeatureTracks></FeatureTracks>
      <AboutAlbum></AboutAlbum>
      <style jsx AlbumStyles>
        {AlbumStyles}
      </style>
    </div>
  );
}
export default ContentAlbum;
