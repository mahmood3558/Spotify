import React from "react";
import { NavLink } from "react-router-dom";

import { topArtists } from "../../../services/service";

const TopArtists = () => {
  const [getTopArtists, setTopArtists] = React.useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);

  const token = async () => {
    try {
      const get = await topArtists();
      console.log("TopArtists");
      console.log(get.data.items);
      console.log("TopArtists");
      setTopArtists(get.data.items);
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
          {getTopArtists.map((topArtists) => {
            return (
              <div className="col-lg-2">
                <div id="services" className="cards2">
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="img-fluid round-img"
                        src={topArtists.images[0].url}
                        alt="alternative"
                      />
                    </div>
                    <div>
                      <h3 className="">
                        <NavLink to="/artist" className="link">
                          {topArtists.name}
                        </NavLink>
                      </h3>
                      {/* <p className="">{topTrack.artists[0].name}</p> */}
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

export default TopArtists;
