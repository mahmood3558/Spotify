// import React, { useEffect } from "react";

// import { user } from "../services/userService";
import SetToken from "../services/setToken/setToken";

import UserPreview from "../components/navbar/userPreview.jsx";

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
    <div className="App">
      <header className="App-header">
        <p>Spotify</p>
        <br></br>
        <SetToken></SetToken>
        <UserPreview></UserPreview>
      </header>
    </div>
  );
}

export default App;
