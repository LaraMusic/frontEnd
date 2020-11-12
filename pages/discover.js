import React from "react";
import HeaderHome from "../src/components/Player/Header";
import NavHomeScreen from "../src/components/Player/Nav";
import MainDiscover from "../src/components/Player/MainDiscover.js";
import FavoritesStyles from "../src/components/Style/Favorites/FavoritesStyles";
const homeScreen = (props) => {
  const { authenticated } = props;
  return (
    <div className="lara">
      <HeaderHome authenticated={authenticated} />
      <NavHomeScreen />
      <div className="containerContent">
        <MainDiscover />
      </div>
      <style jsx FavoritesStyles>
        {FavoritesStyles}
      </style>
    </div>
  );
};

export default homeScreen;
