import React from "react";
import { NavLink } from "react-router-dom";

import { profile } from "../../../services/service";

const ProfilePreview = () => {
  const [getProfile, setProfile] = React.useState([]);
  const [getimg, setimg] = React.useState([]);

  const token = async () => {
    try {
      const get = await profile();
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
    <div className="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
      <NavLink to="/profile">
        <div>
          <img
            className="rounded-pill img-fluid"
            width="65"
            src={getimg.url}
            alt=""
          />
        </div>
      </NavLink>
      <div className="ms-2">
        <h5 className="fs-6 mb-0">
          <NavLink className="text-decoration-none" to="/profile">
            {getProfile.display_name}
          </NavLink>
        </h5>
      </div>
    </div>
  );
};

export default ProfilePreview;
