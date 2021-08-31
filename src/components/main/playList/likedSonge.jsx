import React from "react";

import { likedSonge } from "../../../services/service";

const LikedSonge = () => {
  const [getLikedSonges, setLikedSonges] = React.useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);

  const token = async () => {
    try {
      const get = await likedSonge();
      console.log("FollowedArtists");
      console.log(get);
      console.log("FollowedArtists");
      setLikedSonges(get.data.items);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <h3 className="text-header">Your Liked Songe</h3>
      <div className="container">
        <div className="row">
          {getLikedSonges.map((likedSonge) => {
            return (
              <div className="col-lg-2">
                <div id="services" className="cards">
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="img-fluid"
                        src={likedSonge.track.album.images[0].url}
                        alt="alternative"
                      />
                    </div>
                    <div>
                      <h3 className="">{likedSonge.track.name}</h3>
                      <p className="">{likedSonge.track.artists[0].name}</p>
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

export default LikedSonge;
