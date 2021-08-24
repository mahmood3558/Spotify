/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect } from "react";
import { user } from "../../services/userService";

const userPreview = () => {
  useEffect(() => {
    token();
  });

  const token = async () => {
    try {
      console.log("try");
      console.log(user());
      console.log("try");
      const aaaa = await user();
      console.log("aaaa");
      console.log(aaaa.data.display_name);
      console.log("aaaa");
    } catch (e) {
      console.error(e);
    }
  };

  return <div>userPreview</div>;
};

export default userPreview;
