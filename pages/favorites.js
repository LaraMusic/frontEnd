import React from "react";
import HeaderHome from "../src/components/Player/Header";
import NavHomeScreen from "../src/components/Player/Nav.js";
import Favorites from "../src/components/Favorites";
import Play from "../src/components/Play/Play";
import { useAuth } from "../src/contexts/AuthContext";
import { getFavoriteSongs } from "../src/lib/likeHandler";

function Favorite() {
  const { setFavorites } = useAuth();
  const { user } = useAuth();
  async function init() {
    const newList = await getFavoriteSongs(user);
    setFavorites(newList);
  }
  init();
  return (
    <div className="lara">
      <HeaderHome></HeaderHome>
      <NavHomeScreen></NavHomeScreen>
      <Favorites />
      <Play></Play>
    </div>
  );
}
export default Favorite;
