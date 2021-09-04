import React from "react";

import { profile } from "../../../services/service";
import LikedSonge from "../playList/likedSonge";
import Playlist from "../playList/playList";
import TopArtists from "./topArtists";

const ProfilePreview = () => {
  const [getProfile, setProfile] = React.useState([]);
  const [getimg, setimg] = React.useState([]);

  const token = async () => {
    try {
      const get = await profile();
      console.log("get.data.imagesssssssssssssssssssss");
      console.log(get.data.images);
      console.log("get.data.imagesssssssssssssssssssssss");
      setProfile(get.data);
      setimg(get.data.images[0]);
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
            src={getimg.url}
            alt=""
          />
        </div>
        <div className="ms-2">
          <h3 className="fs-6 mb-0">{getProfile.display_name}</h3>
        </div>
      </div>
      <LikedSonge></LikedSonge>
      <Playlist></Playlist>
      <TopArtists></TopArtists>
    </div>
  );
};

export default ProfilePreview;
