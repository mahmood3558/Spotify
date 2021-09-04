import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../../context/context";

import { recentlyPlayedTracks } from "../../../services/service";

const RecentlyPlayedTracks = () => {
  const [getRecentlyPlayedTracks, setRecentlyPlayedTracks] = React.useState([]);
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

  React.useEffect(() => {
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
                        <div className="overlay">
                          <div className=" icon">
                            <i className="fa fa-play-circle "></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="">
                        {recentlyPlayedTracks.track.album.name}
                      </h3>
                      <NavLink
                        to="/artist"
                        className="link"
                        onClick={() =>
                          context.handleArtistId(
                            recentlyPlayedTracks.track.album.artists[0].id
                          )
                        }
                      >
                        {recentlyPlayedTracks.track.album.artists[0].name}
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
