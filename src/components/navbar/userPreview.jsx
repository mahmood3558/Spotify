import React from "react";
import { user } from "../../services/userService";

const UserPreview = () => {
  const [getUser, setUser] = React.useState([]);
  const [getimg, setimg] = React.useState([]);

  const token = async () => {
    try {
      const get = await user();
      console.log(get.data.images);

      setUser(get.data);
      setimg(get.data.images);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    token();
  }, []);

  return (
    <div className="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
      {getimg.map((users, index) => {
        return (
          <div>
            <img
              className="rounded-pill img-fluid"
              width="65"
              src={users.url}
              alt=""
            />
          </div>
        );
      })}

      <div className="ms-2">
        <h5 className="fs-6 mb-0">
          <a className="text-decoration-none" href="/">
            {getUser.display_name}
          </a>
        </h5>
      </div>
    </div>
  );
};

export default UserPreview;
