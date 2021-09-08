import React from "react";

import i18n from "../i18n/i18n";
import Boody from "./main/router";
import Navbar from "./navbar/navbar";
import Player from "./player/player";

const Spotify = () => {
  // console.log("context.languageeeeeeeeeeeeeeeeeeeeee");
  // console.log(document.cookie);
  // console.log("context.languageeeeeeeeeeeeeeeee");
  i18n.changeLanguage(document.cookie);
  return (
    <div className="container-fluid">
      <div className="row form-margin">
        <div className="col-lg-2">
          <Navbar className="pull-right"></Navbar>
        </div>
        <div className="col-lg-10 ">
          <Boody className="pull-left"></Boody>
        </div>
      </div>
      <div className="col-12 player">
        <Player className=" "></Player>
      </div>
    </div>
  );
};

export default Spotify;
