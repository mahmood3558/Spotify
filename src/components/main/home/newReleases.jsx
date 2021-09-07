import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../../context/context";
import { newReleases } from "../../../services/service";

const NewReleases = () => {
  const [getNewReleases, setNewReleases] = React.useState([]);

  const context = useContext(Context);

  const token = async () => {
    try {
      const get = await newReleases();
      // console.log("newReleasessssssssssssss");
      // console.log(get.data.albums.items);
      // console.log("newReleasessssssssssssssss");
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
                <NavLink
                  to="/album"
                  className="link"
                  onClick={() => context.handleAlbumId(newRelease.id)}
                >
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
                        <NavLink
                          to="/artist"
                          className="link2"
                          onClick={() =>
                            context.handleArtistId(newRelease.artists[0].id)
                          }
                        >
                          <p className="link2">{newRelease.artists[0].name}</p>
                        </NavLink>
                        {/* <p className="">{newRelease.artists[0].name}</p> */}
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

export default NewReleases;
