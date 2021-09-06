import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { checkLike, likedSonge, deleteLike } from "../../../services/service";
import Context from "../../../context/context";

const LikedSonge = () => {
  const [getLikedSonges, setLikedSonges] = useState([]);
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
      const get = await likedSonge();
      // console.log("LikedSongeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      // console.log(get);
      // console.log("LikedSongeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      setLikedSonges(get.data.items);
    } catch (e) {
      console.error(e);
    }
  };

  const check = async (songeId) => {
    // console.log("checkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    // console.log(songeId);
    // console.log("checkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    // try {
    //   const get = await checkLike(songeId);
    //   console.log("checkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    //   console.log(get);
    //   console.log("checkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    //   setLikedSonges(get.data.items);
    // } catch (e) {
    //   console.error(e);
    // }
  };

  useEffect(() => {
    token();
    // check();
  }, []);

  return (
    <div>
      <h3 className="text-header">Your Liked Songe</h3>

      {getLikedSonges.map((likedSonge) => {
        // console.log("likedSonge.track.id");
        // console.log(likedSonge.track.id);
        // console.log("likedSonge.track.id");
        return (
          <div className="container ">
            <div className="row  song-list">
              <div
                className="col-1"
                onClick={() => context.handlePlayerId(likedSonge.track.uri)}
              >
                <div className="img-player">
                  <img
                    className="song-img "
                    src={likedSonge.track.album.images[0].url}
                    alt="alternative"
                  />
                  <div className="overlay icon">
                    <i className="fa fa-play-circle "></i>
                  </div>
                </div>
                {/* <img
                  className="song-img"
                  src={likedSonge.track.album.images[0].url}
                  alt="alternative"
                /> */}
              </div>
              <div className="col-3 ">
                <h3 className="song-h3">{likedSonge.track.name}</h3>
                {/* <p1>{likedSonge.track.artists[0].name}</p1> */}
                <NavLink
                  to="/artist"
                  className="link song-p"
                  onClick={() =>
                    context.handleArtistId(likedSonge.track.artists[0].id)
                  }
                >
                  {likedSonge.track.artists[0].name}
                </NavLink>
              </div>

              <div className="col-5 song-p1">
                <NavLink
                  to="/album"
                  className="link song-p"
                  onClick={() =>
                    context.handleAlbumId(likedSonge.track.album.id)
                  }
                >
                  {likedSonge.track.album.name}
                </NavLink>
              </div>
              <div className="col-1 ">
                <div className="like-icon">
                  <div className=" icon4">
                    {/* {checkLike(likedSonge.track.id) ? (
                      <i className="fa fa-heart "></i>
                    ) : (
                      <i className="fa fa-heart-o "></i>
                    )} */}
                    <i
                      className="fa fa-heart"
                      onClick={() => deleteLike(likedSonge.track.id)}
                    ></i>
                    {/* <i className="fa fa-heart-o "></i> */}
                  </div>
                </div>
              </div>
              <div className="col-1 song-p1">
                <h6>
                  {millisToMinutesAndSeconds(likedSonge.track.duration_ms)}
                </h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LikedSonge;
