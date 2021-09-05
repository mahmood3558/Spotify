import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../../context/context";
import { artistAlbums } from "../../../services/service";

const Albums = () => {
  const [getArtistAlbums, setArtistAlbums] = useState([]);

  const context = useContext(Context);

  const token = async () => {
    try {
      const get = await artistAlbums(context.artistId);
      // console.log("Albumsssssssssssssssssssssssssssssssss");
      // console.log(get);
      // console.log("Albumsssssssssssssssssssssssssssssssss");
      setArtistAlbums(get.data.items);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
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
                <NavLink
                  to="/album"
                  className="link"
                  onClick={() => context.handleAlbumId(artistAlbum.id)}
                >
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
                        {/* <NavLink
                        to="/artist"
                        className="link"
                        onClick={() =>
                          context.handleArtistId(artistAlbum.artists[0].id)
                        }
                      >
                        {artistAlbum.artists[0].name}
                      </NavLink> */}
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

export default Albums;
