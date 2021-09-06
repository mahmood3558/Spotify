import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../../context/context";
import { topTracks } from "../../../services/service";

const TopTracks = () => {
  const [getTopTracks, setTopTracks] = React.useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);
  const context = useContext(Context);

  const token = async () => {
    try {
      const get = await topTracks();
      console.log("TopTracks");
      console.log(get.data.items);
      console.log("TopTracks");
      setTopTracks(get.data.items);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {getTopTracks.map((topTrack) => {
            return (
              <div className="col-lg-2">
                <div id="services" className="cards">
                  <div
                    className="card"
                    onClick={() => context.handlePlayerId(topTrack.uri)}
                  >
                    <div className="card-image">
                      <div className="img-player2">
                        <img
                          className="img-fluid"
                          src={topTrack.album.images[0].url}
                          alt="alternative"
                        />
                        <div className="overlay icon3">
                          <i className="fa fa-play-circle "></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="">{topTrack.name}</h3>
                      <NavLink
                        to="/album"
                        className="link2"
                        onClick={() => context.handleAlbumId(topTrack.album.id)}
                      >
                        <p className="link2"> {topTrack.album.name}</p>
                      </NavLink>
                      {/* <p className="">{topTrack.artists[0].name}</p> */}
                      {/* <i className="fa fa-play-circle play-icon"></i> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopTracks;
