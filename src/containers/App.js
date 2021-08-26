// import React, { useEffect } from "react";

import Home from "../components/main/home/home.jsx";
import Navbar from "../components/navbar/navbar";

// import Player from "../components/player/player";

// import { user } from "../services/userService";

// import SetToken from "../services/setToken/setToken";
// import UserPreview from "../components/navbar/userPreview.jsx";

// import Player from "../components";

function App() {
  // useEffect(() => {
  //   token();
  // });

  // const token = async () => {
  //   try {
  //     console.log("try");
  //     console.log(user());
  //     console.log("try");
  //     const aaaa = await user();
  //     console.log("aaaa");
  //     console.log(aaaa.data);
  //     console.log("aaaa");
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  ////////////////////////////////////
  // const token = () => {
  //   console.log("axios");
  //   axios
  //     .get(`${config.spotify}/v1/me`, {
  //       headers: {
  //         Authorization: `Bearer ${hash.access_token}`,
  //       },
  //     })
  //     .then(({ data, status }) => {
  //       console.log("then");
  //       console.log(data);
  //       if (status === 201) {
  //         toast.success("کاربر با موفقیت ساخته شد.", {
  //           position: "top-right",
  //           closeOnClick: true,
  //         });
  //         console.log("data");
  //         console.log(data);
  //         console.log("data");
  //       }
  //     })
  //     .catch((ex) => {
  //       console.log("catch");
  //       toast.error("مشکلی پیش آمده.", {
  //         position: "top-right",
  //         closeOnClick: true,
  //       });
  //       console.log(ex);
  //     });
  // };
  /////////////////////////////////////
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <Navbar className="col-lg-4 col-md-3 col-sm-6 col-xs-12 pull-right"></Navbar>
        </div>
        <div className="col-9">
          <Home className="ol-lg-8 col-md-9 col-sm-6 col-xs-12 pull-left"></Home>
        </div>
      </div>
      {/* <Player></Player> */}
      {/* <SetToken></SetToken>
      <UserPreview></UserPreview> */}
    </div>
  );
}

export default App;
