import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import Context from "../../../context/context";
import { followedArtists } from "../../../services/service";

const FollowedArtists = () => {
  const [getFollowedArtists, setFollowedArtists] = React.useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);
  const context = useContext(Context);

  const { t } = useTranslation();

  const token = async () => {
    try {
      const get = await followedArtists();
      // console.log("FollowedArtists");
      // console.log(get);
      // console.log("FollowedArtists");
      setFollowedArtists(get.data.artists.items);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <h3 className="text-header"> {t("followedArtists")}</h3>
      <div className="container">
        <div className="row">
          {getFollowedArtists.map((followedArtist) => {
            return (
              <div className="col-lg-2">
                <NavLink
                  to="/artist"
                  className="link"
                  onClick={() => context.handleArtistId(followedArtist.id)}
                >
                  <div id="services" className="cards2">
                    <div className="card">
                      <div className="card-image">
                        <img
                          className="img-fluid round-img"
                          src={followedArtist.images[0].url}
                          alt="alternative"
                        />
                      </div>
                      <div>
                        <h3 className="">{followedArtist.name}</h3>
                        {/* <p className="">{topTrack.artists[0].name}</p> */}
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

export default FollowedArtists;
