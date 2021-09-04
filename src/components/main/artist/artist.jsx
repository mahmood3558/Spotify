import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../../context/context";
import { artist } from "../../../services/service";
import Albums from "./albums";
import TopTracks from "./topTracks";

const ShowArtist = () => {
  const [getArtist, setArtist] = React.useState([]);
  const [getImg, setImg] = React.useState([]);
  const [getFollowers, setFollowers] = React.useState([]);
  const context = useContext(Context);
  console.log("context.geArtistIdddddddddddddddddddddddddddddddd");
  console.log(context.artistId);
  console.log("context.geArtistIdddddddddddddddddddddddddddddddd");
  // const [getAlbum, setAlbum] = React.useState([]);

  const token = async () => {
    try {
      const get = await artist(context.artistId);
      console.log("ShowArtistttttttttttttttttttttttttttttttttt");
      console.log(get.data);
      console.log("ShowArtisttttttttttttttttttttttttttttttttttt");
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
      <div className="d-flex align-items-center px-4 py-5 profile">
        <div>
          <img
            className="rounded-pill img-fluid"
            width="100"
            src={getImg.url}
            alt=""
          />
        </div>
        <div className="ms-2">
          <h3 className="fs-6 mb-0">{getArtist.name}</h3>
          <p className="fs-6 mb-0">{getFollowers.total} Follower</p>
        </div>
      </div>
      <div>
        <TopTracks></TopTracks>
        <Albums></Albums>
      </div>
    </div>
  );
};

export default ShowArtist;
