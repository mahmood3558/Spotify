import User from "./userPreview";

const index = () => {
  return (
    <div>
      <aside
        className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left"
        id="show-side-navigation1"
      >
        <i
          className="uil-bars close-aside d-md-none d-lg-none"
          data-close="show-side-navigation1"
        ></i>

        <User></User>

        <ul className="categories list-unstyled sidebar-header">
          <li className="">
            <i className="fa fa-home"></i>
            <a href="#" className="navbarhover">
              Home
            </a>
          </li>
          <li className="">
            <i className="fa fa-search"></i>
            <a href="#" className="navbarhover">
              Search
            </a>
          </li>
          <li className="">
            <i className="fa fa-align-justify"></i>
            <a href="#" className="navbarhover">
              Library
            </a>
          </li>
        </ul>

        <ul className="categories list-unstyled">
          <li className="">
            <i className="fa fa-heart"></i>
            <a href="#" className="navbarhover">
              Liked Songs
            </a>
          </li>
          <li className="">
            <i className="fa fa-plus "></i>
            <a href="#" className="navbarhover">
              Create Playlist
            </a>
          </li>
          <li className="">
            <i className="fa fa-music  "></i>
            <a href="#" className="navbarhover">
              play List
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default index;
