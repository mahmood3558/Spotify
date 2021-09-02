import React from "react";
import { NavLink } from "react-router-dom";

import { artistAlbums } from "../../../services/service";

const Albums = () => {
  const [getArtistAlbums, setArtistAlbums] = React.useState([]);

  const token = async () => {
    try {
      const get = await artistAlbums();
      console.log("Albumsssssssssssssssssssssssssssssssss");
      console.log(get);
      console.log("Albumsssssssssssssssssssssssssssssssss");
      setArtistAlbums(get.data.items);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <h3 className="text-header">Albums</h3>

      <div className="container">
        <div className="row">
          {getArtistAlbums.map((artistAlbum) => {
            return (
              <div className="col-lg-2">
                <div id="services" className="cards">
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="img-fluid"
                        src={artistAlbum.images[0].url}
                        alt="alternative"
                      />
                    </div>
                    <div>
                      <h3 className="">{artistAlbum.name}</h3>
                      <p className="">{artistAlbum.artists[0].name}</p>
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

export default Albums;
