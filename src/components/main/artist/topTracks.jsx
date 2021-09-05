import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../../context/context";
import { artistTopTracks } from "../../../services/service";

const TopTracks = () => {
  const [getArtistTopTracks, setArtistTopTracks] = useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);
  const context = useContext(Context);

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);

    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const token = async () => {
    try {
      const get = await artistTopTracks(context.artistId);
      // console.log("artistTopTrackssssssssssssssssssssssssssss");
      // console.log(get);
      // console.log("artistTopTracksssssssssssssssssssssssssssss");
      setArtistTopTracks(get.data.tracks);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <h3 className="text-header">Top Tracks</h3>

      {getArtistTopTracks.map((artistTopTrack) => {
        return (
          <div className="container ">
            <div className="row  song-list">
              <div
                className="col-1"
                onClick={() => context.handlePlayerId(artistTopTrack.uri)}
              >
                <div className="img-player">
                  <img
                    className="song-img"
                    src={artistTopTrack.album.images[0].url}
                    alt="alternative"
                  />
                  <div className="overlay icon">
                    <i className="fa fa-play-circle "></i>
                  </div>
                </div>
              </div>
              <div className="col-3 ">
                <h3 className="song-h3">{artistTopTrack.name}</h3>
                <p1 className="song-p">{artistTopTrack.artists[0].name}</p1>
                {/* <NavLink
                  to="/artist"
                  className="link song-p"
                  onClick={() =>
                    context.handleArtistId(artistTopTrack.artists[0].id)
                  }
                >
                  {artistTopTrack.artists[0].name}
                </NavLink> */}
              </div>
              <div className="col-6 song-p">
                <p>{artistTopTrack.album.name}</p>
              </div>
              <div className="col-1 song-p">
                <h6>{millisToMinutesAndSeconds(artistTopTrack.duration_ms)}</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopTracks;
