import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../../context/context";
import { savedAlbums } from "../../../services/service";

const SavedAlbums = () => {
  const [getSavedAlbums, setSavedAlbums] = React.useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);
  const context = useContext(Context);

  const token = async () => {
    try {
      const get = await savedAlbums();
      console.log("savedAlbums");
      console.log(get);
      console.log("savedAlbums");
      setSavedAlbums(get.data.items);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <h3 className="text-header">Your Saved Albums</h3>
      <div className="container">
        <div className="row">
          {getSavedAlbums.map((savedAlbum) => {
            return (
              <div className="col-lg-2">
                <div id="services" className="cards">
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="img-fluid "
                        src={savedAlbum.album.images[0].url}
                        alt="alternative"
                      />
                    </div>
                    <div>
                      <h3 className="">{savedAlbum.album.name}</h3>
                      {/* <p className="">{savedAlbum.album.artists[0].name}</p> */}
                      <NavLink
                        to="/artist"
                        className="link"
                        onClick={() =>
                          context.handleArtistId(savedAlbum.album.artists[0].id)
                        }
                      >
                        {savedAlbum.album.artists[0].name}
                      </NavLink>
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

export default SavedAlbums;
