import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";

import Context from "../../../context/context";
import { artist, followArtist } from "../../../services/service";
import Albums from "./albums";
import TopTracks from "./topTracks";

const ShowArtist = () => {
  const [getArtist, setArtist] = React.useState([]);
  const [getImg, setImg] = React.useState([]);
  const [getFollowers, setFollowers] = React.useState([]);
  const context = useContext(Context);
  // console.log("context.geArtistIdddddddddddddddddddddddddddddddd");
  // console.log(context.artistId);
  // console.log("context.geArtistIdddddddddddddddddddddddddddddddd");
  // const [getAlbum, setAlbum] = React.useState([]);

  const { t } = useTranslation();

  const token = async () => {
    try {
      const get = await artist(context.artistId);
      // console.log("ShowArtistttttttttttttttttttttttttttttttttt");
      // console.log(get.data);
      // console.log("ShowArtistttttttttttttttttttttttttttttttttt");
      setArtist(get.data);
      setImg(get.data.images[0]);
      setFollowers(get.data.followers);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center px-4 py-5 profile sidebar-header ">
        <div>
          <img
            className="rounded-pill img-fluid"
            width="110"
            src={getImg.url}
            alt=""
          />
        </div>
        <div className="ms-2">
          <h3 className="fs-6 mb-0">{getArtist.name}</h3>
          <p className="fs-6 mb-0">
            {getFollowers.total} {t("follower")}
          </p>
          <div className="follow-icon">
            <i
              className="fa fa-user-plus"
              onClick={() => {
                followArtist(getArtist.id);
                toast.success(" '" + getArtist.name + "' " + t("followed"), {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              {"   " + t("follow") + "   "}
            </i>
          </div>
        </div>
      </div>
      <div>
        <div className="row listSonge">
          <div className="col-1">
            <div className=" icon2">
              <i
                className="fa fa-play-circle "
                onClick={() => context.handlePlayerId(getArtist.uri)}
              ></i>
            </div>
          </div>
          <div className="col-2">
            <h3 className="text-header">{t("artistTopTracks")}</h3>
          </div>
        </div>
        <TopTracks></TopTracks>
        <h3 className="text-header">{t("albums")}</h3>
        <Albums></Albums>
      </div>
    </div>
  );
};

export default ShowArtist;
