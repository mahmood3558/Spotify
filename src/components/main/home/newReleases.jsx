import React from "react";
import { NavLink } from "react-router-dom";

import { newReleases } from "../../../services/service";

const NewReleases = () => {
  const [getNewReleases, setNewReleases] = React.useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);

  const token = async () => {
    try {
      const get = await newReleases();
      console.log("TopTracks");
      console.log(get);
      console.log("TopTracks");
      setNewReleases(get.data.albums.items);
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
          {getNewReleases.map((newRelease) => {
            return (
              <div className="col-lg-2">
                <div id="services" className="cards">
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="img-fluid"
                        src={newRelease.images[0].url}
                        alt="alternative"
                      />
                    </div>
                    <div>
                      <h3 className="">{newRelease.name}</h3>
                      <NavLink to="/artist" className="link">
                        {newRelease.artists[0].name}
                      </NavLink>
                      {/* <p className="">{newRelease.artists[0].name}</p> */}
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

export default NewReleases;
