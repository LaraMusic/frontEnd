import React, { useState, useEffect } from "react";
import { getPlaylistCleaned } from "../../../lib/spotifyRequest";
import { useAuth } from "../../../contexts/AuthContext";
import LikeButton from "./Like";
import RoundPlayButton from "../../Play/molecules/RoundPlayButton";
import ListTrackStyle from "../../Style/Player/molecules/ListTrackStyle";
import { getPlaylist } from "../../../lib/hearThisAtRequest";
const ListTrack = () => {
  const { user } = useAuth();
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const playlist = await getPlaylist("/feed/popular", 15);
    const musica = playlist;
    // console.log(musica);
    setMusic(musica);
  };

  return (
    <section>
      <div className="top__tracks__title">
        <h2>Top Tracks</h2>
      </div>
      <div className="tab__top">
        <p className="tab__top__number">#</p>
        <p className="tab__top__title">Title</p>
        <p className="tab__top__plays">Daily plays</p>
        <p className="tab__top__time">Duration</p>
      </div>
      <div className="track">
        {music.map((item) => {
          return (
            <div className="tab__music" key={item.song_id}>
              <p>1</p>
              <div className="tab__music__icons">
                <div className="icon">
                  <RoundPlayButton song={item} />
                </div>
                <div className="icon">
                  <LikeButton user={user.username} song={item}></LikeButton>
                </div>
              </div>
              <span className="tab__music__title">{item.title}</span>
              <span className="tab__music__plays">{item.views}</span>
              <span className="tab__music__time">
                {parseInt(item.duration)}
              </span>
            </div>
          );
        })}
      </div>

      <style jsx ListTrackStyle>
        {ListTrackStyle}
      </style>
    </section>
  );
};

export default ListTrack;
