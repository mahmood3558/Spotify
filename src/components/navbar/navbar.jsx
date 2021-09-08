import React from "react";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import ProfilePreview from "../main/profile/profilePreview";

const Index = () => {
  const { t } = useTranslation();
  return (
    <div>
      <aside className="sidebar position-fixed   " id="show-side-navigation1">
        <i
          className="uil-bars close-aside d-md-none d-lg-none"
          data-close="show-side-navigation1"
        ></i>

        <ProfilePreview></ProfilePreview>

        <ul className="categories list-unstyled sidebar-header">
          <li className="li ">
            <i className="fa fa-home"></i>
            <NavLink
              to="/home"
              className="navbar-hover"
              activeClassName="active-navLink"
            >
              {t("home")}
            </NavLink>
          </li>
          <li className="li">
            <i className="fa fa-search"></i>
            <NavLink
              to="/search"
              className="navbar-hover"
              activeClassName="active-navLink"
            >
              {t("search")}
            </NavLink>
          </li>
          <li className="li">
            <i className="fa fa-align-justify"></i>
            <NavLink
              to="/library"
              className="navbar-hover"
              activeClassName="active-navLink"
            >
              {t("library")}
            </NavLink>
          </li>
        </ul>

        <ul className="categories list-unstyled">
          <li className="li">
            <i className="fa fa-music  "></i>
            <NavLink
              to="/playList"
              className="navbar-hover"
              activeClassName="active-navLink"
            >
              {t("playlists")}
            </NavLink>
          </li>
          <li className="li">
            <i className="fa fa-heart"></i>
            <NavLink
              to="/likedSonge"
              className="navbar-hover"
              activeClassName="active-navLink"
            >
              {t("likedSongs")}
            </NavLink>
          </li>
          {/* <li className="li">
            <i className="fa fa-plus "></i>
            <NavLink
              to="/createPlaylist"
              className="navbar-hover"
              activeClassName="active-navLink"
            >
              Create Playlist
            </NavLink>
          </li> */}
        </ul>
      </aside>
    </div>
  );
};

export default Index;
