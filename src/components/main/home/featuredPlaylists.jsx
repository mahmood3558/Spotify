import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../../context/context";
import { featuredPlaylists } from "../../../services/service";

const FeaturedPlaylists = () => {
  const [getFeaturedPlaylists, setFeaturedPlaylists] = useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);
  const context = useContext(Context);

  const token = async () => {
    try {
      const get = await featuredPlaylists();
      // console.log("FeaturedPlaylists");
      // console.log(get.data.playlists);
      // console.log("FeaturedPlaylists");
      setFeaturedPlaylists(get.data.playlists.items);
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
          {getFeaturedPlaylists.map((featuredPlaylists) => {
            return (
              <div className="col-lg-2">
                <NavLink
                  to="/playListTracks"
                  className="link"
                  onClick={() => context.handlePlaylistId(featuredPlaylists.id)}
                >
                  <div id="services" className="cards">
                    <div className="card">
                      <div className="card-image">
                        <img
                          className="img-fluid"
                          src={featuredPlaylists.images[0].url}
                          alt="alternative"
                        />
                      </div>
                      <div>
                        <h3 className="">{featuredPlaylists.name}</h3>
                        <p className="">
                          {featuredPlaylists.owner.display_name}
                        </p>
                        {/* <i className="fa fa-play-circle play-icon"></i> */}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPlaylists;
