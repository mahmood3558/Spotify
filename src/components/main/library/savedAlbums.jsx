import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";

import Context from "../../../context/context";
import { savedAlbums, removeAlbum } from "../../../services/service";

const SavedAlbums = () => {
  const [getSavedAlbums, setSavedAlbums] = React.useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);
  const context = useContext(Context);

  const { t } = useTranslation();

  const token = async () => {
    try {
      const get = await savedAlbums();
      // console.log("savedAlbums");
      // console.log(get);
      // console.log("savedAlbums");
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
      <h3 className="text-header">{t("savedAlbums")}</h3>
      <div className="container">
        <div className="row">
          {getSavedAlbums.map((savedAlbum) => {
            return (
              <div className="col-lg-2">
                <div id="services" className="cards">
                  <div className="card">
                    <NavLink
                      to="/album"
                      className="link"
                      onClick={() => context.handleAlbumId(savedAlbum.album.id)}
                    >
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
                      </div>
                    </NavLink>
                    <NavLink
                      to="/artist"
                      className="link"
                      onClick={() =>
                        context.handleArtistId(savedAlbum.album.artists[0].id)
                      }
                    >
                      <p className="link">{savedAlbum.album.artists[0].name}</p>
                    </NavLink>
                    <div>
                      <i
                        className="fa fa-trash delete-albums"
                        aria-hidden="true"
                        onClick={() => {
                          removeAlbum(savedAlbum.album.id);
                          toast.warn(
                            t("album") +
                              " '" +
                              savedAlbum.album.name +
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

export default SavedAlbums;
