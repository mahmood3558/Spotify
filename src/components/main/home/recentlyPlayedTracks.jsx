import React from "react";
import { NavLink } from "react-router-dom";

import { recentlyPlayedTracks } from "../../../services/service";

const RecentlyPlayedTracks = () => {
  const [getRecentlyPlayedTracks, setRecentlyPlayedTracks] = React.useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);

  const token = async () => {
    try {
      const get = await recentlyPlayedTracks();
      console.log("RecentlyPlayedTracks");
      console.log(get.data.items);
      console.log("RecentlyPlayedTracks");
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
              <div className="col-lg-2">
                <div id="services" className="cards">
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="img-fluid"
                        src={recentlyPlayedTracks.track.album.images[0].url}
                        alt="alternative"
                      />
                    </div>
                    <div>
                      <h3 className="">
                        {recentlyPlayedTracks.track.album.name}
                      </h3>
                      <NavLink to="/artist" className="link">
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
