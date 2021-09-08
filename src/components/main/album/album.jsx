import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";

import Context from "../../../context/context";
import {
  album,
  albumTracks,
  checkLike,
  like,
  saveAlbum,
} from "../../../services/service";

const Album = () => {
  const [getAlbumTracks, setAlbumTracks] = useState([]);
  const [getAlbum, setAlbum] = useState([]);
  const [getArtist, setArtist] = useState([]);
  const [getimg, setimg] = useState([]);

  const context = useContext(Context);

  const { t } = useTranslation();

  const albumToken = async () => {
    try {
      const get = await album(context.albumId);
      // console.log("Albumsssssssssssssssssssssssssssssssss");
      // console.log(get);
      // console.log("Albumsssssssssssssssssssssssssssssssss");
      setAlbum(get.data);
      setimg(get.data.images[0]);
      setArtist(get.data.artists[0]);
    } catch (e) {
      console.error(e);
    }
  };

  const albumTracksToken = async () => {
    try {
      const get = await albumTracks(context.albumId);
      // console.log("AlbumTrack$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
      // console.log(get);
      // console.log("AlbumTrack$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
      setAlbumTracks(get.data.items);
    } catch (e) {
      console.error(e);
    }
  };

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);

    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    albumToken();
    albumTracksToken();
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center px-4 py-5 profile">
        <div>
          <img
            className="album-img img-fluid"
            width="110"
            src={getimg.url}
            alt=""
          />
        </div>
        <div className="ms-2">
          <h3 className="fs-6 mb-0">{getAlbum.name}</h3>
          <p className="fs-6 mb-0">{getArtist.name}</p>
          <div className="follow-icon">
            <i
              className="fa fa-bookmark"
              onClick={() => {
                saveAlbum(getAlbum.id);
                toast.success(
                  t("album") + " '" + getAlbum.name + "' " + t("saved"),
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
            >
              {"   " + t("save") + "   "}
            </i>
          </div>
        </div>
      </div>

      <div>
        <div className="row  listSonge">
          <div className="col-1">
            <div className=" icon2">
              <i
                className="fa fa-play-circle "
                onClick={() => context.handlePlayerId(getAlbum.uri)}
              ></i>
            </div>
          </div>
          <div className="col-1">
            <h3 className="text-header">{t("tracks")}</h3>
          </div>
        </div>

        <div className="container ">
          {getAlbumTracks.map((albumTrack) => {
            return (
              <div className="row  song-list">
                <div
                  className="col-1"
                  onClick={() => context.handlePlayerId(albumTrack.uri)}
                >
                  <div className="img-player">
                    <img
                      className="song-img "
                      src={getimg.url}
                      alt="alternative"
                    />
                    <div className="overlay icon">
                      <i className="fa fa-play-circle "></i>
                    </div>
                  </div>
                </div>
                <div className="col-3 ">
                  <h3 className="song-h3">{albumTrack.name}</h3>
                  <NavLink
                    to="/artist"
                    className="link song-p"
                    onClick={() =>
                      context.handleArtistId(albumTrack.artists[0].id)
                    }
                  >
                    {albumTrack.artists[0].name}
                  </NavLink>
                </div>
                <div className="col-5 song-p1">
                  <p>{getArtist.name}</p>
                </div>
                <div className="col-1 ">
                  <div className="like-icon">
                    <div className=" icon4">
                      <i
                        className="fa fa-heart-o"
                        onClick={() => {
                          like(albumTrack.id);
                          toast.success(
                            t("music") +
                              " '" +
                              albumTrack.name +
                              "' " +
                              t("toastAdd"),
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
                      {/* {checkLike(albumTrack.id) ? (
                        <i className="fa fa-heart-o "></i>
                      ) : (
                        <i className="fa fa-heart "></i>
                      )} */}
                      {/* <i className="fa fa-heart "></i> */}
                      {/* <i className="fa fa-heart-o "></i> */}
                    </div>
                  </div>
                </div>
                <div className="col-1 song-p1">
                  <h6>{millisToMinutesAndSeconds(albumTrack.duration_ms)}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Album;
