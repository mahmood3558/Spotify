import React from "react";

import { likedSonge } from "../../../services/service";

const LikedSonge = () => {
  const [getLikedSonges, setLikedSonges] = React.useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);

    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const token = async () => {
    try {
      const get = await likedSonge();
      console.log("LikedSongeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      console.log(get);
      console.log("LikedSongeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      setLikedSonges(get.data.items);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <h3 className="text-header">Your Liked Songe</h3>

      {getLikedSonges.map((likedSonge) => {
        return (
          <div className="container ">
            <div className="row  song-list">
              <div className="col-1">
                <div className="img-player">
                  <img
                    className="song-img"
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
              <div className="col-3 song-p">
                <h6>{likedSonge.track.name}</h6>
                <p1>{likedSonge.track.artists[0].name}</p1>
              </div>
              <div className="col-6 song-p">
                <p>{likedSonge.track.album.name}</p>
              </div>
              <div className="col-1 song-p">
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
