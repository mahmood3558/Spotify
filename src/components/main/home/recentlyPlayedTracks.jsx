import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../../context/context";

import { recentlyPlayedTracks } from "../../../services/service";

const RecentlyPlayedTracks = () => {
  const [getRecentlyPlayedTracks, setRecentlyPlayedTracks] = useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);
  const context = useContext(Context);

  const token = async () => {
    try {
      const get = await recentlyPlayedTracks();
      console.log("RecentlyPlayedTracksSSSSSSSSSSSSSSSSSS");
      console.log(get.data.items);
      console.log("RecentlyPlayedTracksSSSSSSSSSSSSSSSSSS");
      setRecentlyPlayedTracks(get.data.items);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {getRecentlyPlayedTracks.map((recentlyPlayedTracks) => {
            return (
              <div
                className="col-lg-2"
                onClick={() =>
                  context.handlePlayerId(recentlyPlayedTracks.track.uri)
                }
              >
                <div id="services" className="cards">
                  <div className="card">
                    <div className="card-image">
                      <div className="img-player2">
                        <img
                          className="img-fluid"
                          src={recentlyPlayedTracks.track.album.images[0].url}
                          alt="alternative"
                        />
                        <div className="overlay icon3">
                          <i className="fa fa-play-circle "></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="">{recentlyPlayedTracks.track.name}</h3>
                      <NavLink
                        to="/album"
                        className="link2 "
                        onClick={() =>
                          context.handleAlbumId(
                            recentlyPlayedTracks.track.album.id
                          )
                        }
                      >
                        <p className="link2">
                          {recentlyPlayedTracks.track.album.name}
                        </p>
                      </NavLink>
                      {/* <i className="fa fa-play-circle play-icon"></i> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentlyPlayedTracks;
