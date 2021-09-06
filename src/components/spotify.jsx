import Boody from "./main/main";
import Navbar from "./navbar/navbar";
import Player from "./player/player";

const spotify = () => {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Navbar className="col-lg-4 col-md-3 col-sm-6 col-xs-12 pull-right"></Navbar>
        </div>
        <div className="col-10 body">
          <Boody className="col-lg-8 col-md-9 col-sm-6 col-xs-12 pull-left"></Boody>
        </div>
      </div>
      <div className="col-12 player">
        <Player className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "></Player>
      </div>
    </div>
  );
};

export default spotify;
