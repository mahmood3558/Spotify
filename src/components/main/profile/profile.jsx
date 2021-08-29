import React from "react";

import { profile } from "../../../services/service";

const ProfilePreview = () => {
  const [getProfile, setProfile] = React.useState([]);
  const [getimg, setimg] = React.useState([]);

  const token = async () => {
    try {
      const get = await profile();
      console.log(get.data.images);

      setProfile(get.data);
      setimg(get.data.images);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    token();
  }, []);

  return (
    <div className="d-flex align-items-center px-4 py-5">
      {getimg.map((profile, index) => {
        return (
          <div>
            <img
              className="rounded-pill img-fluid"
              width="100"
              src={profile.url}
              alt=""
            />
          </div>
        );
      })}

      <div className="ms-2">
        <h5 className="fs-6 mb-0">{getProfile.display_name}</h5>
      </div>
    </div>
  );
};

export default ProfilePreview;
