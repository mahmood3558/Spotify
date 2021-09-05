import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../../context/context";
import { playlists } from "../../../services/service";

const Playlists = () => {
  const [getplaylists, setplaylists] = useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);
  const context = useContext(Context);

  const token = async () => {
    try {
      const get = await playlists();
      // console.log("playlists");
      // console.log(get);
      // console.log("playlists");
      setplaylists(get.data.items);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
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
                <NavLink
                  to="/playListTracks"
                  className="link"
                  onClick={() => context.handlePlaylistId(playlist.id)}
                >
                  <div id="services" className="cards">
                    <div className="card">
                      <div className="card-image">
                        <img
                          className="img-fluid"
                          src={
                            playlist.images[0] != null
                              ? playlist.images[0].url
                              : "https://download.services.iconscout.com/download?name=music-album&download=1&url=https%3A%2F%2Fd1b1fjiwh8olf2.cloudfront.net%2Ficon%2Ffree%2Fpng-512%2F475066.png%3Ftoken%3DeyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzMDYyNzIwMCwicSI6bnVsbCwiaWF0IjoxNjMwMzk2MjIzfQ__.4e5e7d734ce9ecba9d94de0517c37de235ca452ae5395bc41d652458d1663fcd&width=512&height=512"
                          }
                          alt="alternative"
                        />
                      </div>
                      <div>
                        <h3 className="">{playlist.name}</h3>
                        <p className="">by {playlist.owner.display_name}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Playlists;
