import React from "react";

import { playlists } from "../../../services/service";

const Playlist = () => {
  const [getplaylists, setplaylists] = React.useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);

  const token = async () => {
    try {
      const get = await playlists();
      console.log("playlists");
      console.log(get);
      console.log("playlists");
      setplaylists(get.data.items);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <h3 className="text-header">Your Playlists</h3>

      <div className="container">
        <div className="row">
          {getplaylists.map((playlist) => {
            return (
              <div className="col-lg-2">
                <div id="services" className="cards">
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="img-fluid"
                        src={playlist.images[0].url}
                        alt="alternative"
                      />
                    </div>
                    <div>
                      <h3 className="">{playlist.name}</h3>
                      <p className="">by {playlist.owner.display_name}</p>
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

export default Playlist;
