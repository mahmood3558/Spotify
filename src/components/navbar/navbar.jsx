import { NavLink } from "react-router-dom";

import ProfilePreview from "../main/profile/profilePreview";

const index = () => {
  return (
    <div>
      <aside
        className="sidebar position-fixed top-0 left-0 overflow-auto h-100  nav-z-index float-left"
        id="show-side-navigation1"
      >
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
              Home
            </NavLink>
          </li>
          <li className="li">
            <i className="fa fa-search"></i>
            <NavLink
              to="/search"
              className="navbar-hover"
              activeClassName="active-navLink"
            >
              Search
            </NavLink>
          </li>
          <li className="li">
            <i className="fa fa-align-justify"></i>
            <NavLink
              to="/library"
              className="navbar-hover"
              activeClassName="active-navLink"
            >
              Library
            </NavLink>
          </li>
        </ul>

        <ul className="categories list-unstyled">
          <li className="li">
            <i className="fa fa-heart"></i>
            <NavLink
              to="/likedSonge"
              className="navbar-hover"
              activeClassName="active-navLink"
            >
              Liked Songs
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
          <li className="li">
            <i className="fa fa-music  "></i>
            <NavLink
              to="/playList"
              className="navbar-hover"
              activeClassName="active-navLink"
            >
              play List
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default index;
