import Boody from "./main/main";
import Navbar from "./navbar/navbar";

const spotify = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <Navbar className="col-lg-4 col-md-3 col-sm-6 col-xs-12 pull-right"></Navbar>
        </div>
        <div className="col-9">
          <Boody className="ol-lg-8 col-md-9 col-sm-6 col-xs-12 pull-left"></Boody>
        </div>
      </div>
      {/* <Player></Player> */}
    </div>
  );
};

export default spotify;
