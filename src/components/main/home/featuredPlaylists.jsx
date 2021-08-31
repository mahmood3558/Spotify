import React from "react";

import { featuredPlaylists } from "../../../services/service";

const FeaturedPlaylists = () => {
  const [getFeaturedPlaylists, setFeaturedPlaylists] = React.useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);

  const token = async () => {
    try {
      const get = await featuredPlaylists();
      console.log("FeaturedPlaylists");
      console.log(get.data.playlists);
      console.log("FeaturedPlaylists");
      setFeaturedPlaylists(get.data.playlists.items);
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
          {getFeaturedPlaylists.map((featuredPlaylists) => {
            return (
              <div className="col-lg-2">
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
                      <p className="">{featuredPlaylists.owner.display_name}</p>
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

export default FeaturedPlaylists;
