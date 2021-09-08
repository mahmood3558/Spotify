import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import Context from "../../../context/context";
import { categoryplaylists } from "../../../services/service";

const Categorie = () => {
  const [getPlaylists, setPlaylists] = useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);
  const context = useContext(Context);

  const { t } = useTranslation();

  const token = async () => {
    try {
      const get = await categoryplaylists(context.categorieId);
      // console.log("categoryplaylistsssssssss");
      // console.log(get);
      // console.log("categoryplaylistssssssssss");
      setPlaylists(get.data.playlists.items);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <h3 className="text-header">{t("categoryPlaylists")}</h3>

      <div className="container">
        <div className="row">
          {getPlaylists.map((playlist) => {
            return (
              <div className="col-lg-2">
                <NavLink
                  to="/playListTracks"
                  className="link"
                  onClick={() => context.handlePlaylistId(playlist.id)}
                >
                  <div id="services" className="cards">
                    <div className="card">
                      <div className="card-image">
                        <img
                          className="img-fluid"
                          src={
                            playlist.images[0] != null
                              ? playlist.images[0].url
                              : "https://icon-library.com/images/music-playlist-icon/music-playlist-icon-25.jpg"
                          }
                          alt="alternative"
                        />
                      </div>
                      <div>
                        <h3 className="">{playlist.name}</h3>
                        <p className="">by {playlist.owner.display_name}</p>
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

export default Categorie;
