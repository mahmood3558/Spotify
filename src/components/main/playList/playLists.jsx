import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";

import Context from "../../../context/context";
import { playlists, unfollowplaylist } from "../../../services/service";

const Playlists = () => {
  const [getplaylists, setplaylists] = useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);
  const context = useContext(Context);

  const { t } = useTranslation();

  const token = async () => {
    try {
      const get = await playlists();
      // console.log("playlists");
      // console.log(get);
      // console.log("playlists");
      setplaylists(get.data.items);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <h3 className="text-header"> {t("yourPlaylists")}</h3>

      <div className="container">
        <div className="row">
          {getplaylists.map((playlist) => {
            return (
              <div className="col-lg-2">
                <div id="services" className="cards">
                  <div className="card">
                    <NavLink
                      to="/playListTracks"
                      className="link"
                      onClick={() => context.handlePlaylistId(playlist.id)}
                    >
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
                    </NavLink>
                    <div>
                      <i
                        className="fa fa-trash delete-albums"
                        aria-hidden="true"
                        onClick={() => {
                          unfollowplaylist(playlist.id);
                          toast.warn(
                            t("playlists") +
                              " '" +
                              playlist.name +
                              "' " +
                              t("removeAlbum"),
                            {
                              position: "bottom-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                            }
                          );
                        }}
                      ></i>
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

export default Playlists;
