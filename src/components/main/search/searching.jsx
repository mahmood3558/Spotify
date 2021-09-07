import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";

import { search, like } from "../../../services/service";
import Categories from "../categories/categories";
import Context from "../../../context/context";

const Searching = () => {
  const [getSearch, setSearch] = useState([]);
  const [getTracksSearch, setTracksSearch] = useState([]);
  const [getAlbumsSearch, setAlbumsSearch] = useState([]);
  const [getArtistsSearch, setArtistsSearch] = useState([]);
  const [getPlaylistsSearch, setPlaylistsSearch] = useState([]);
  const [getEpisodeSearch, setEpisodeSearch] = useState([]);
  const [showCategories, setShowCategories] = useState(true);

  const context = useContext(Context);

  const { t } = useTranslation();

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);

    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const searching = async (event) => {
    event.preventDefault();
    setShowCategories(false);
    const Search = getSearch;
    try {
      const get = await search(Search);
      // console.log(get.data.artists.items);
      setTracksSearch(get.data.tracks.items);
      setAlbumsSearch(get.data.albums.items);
      setArtistsSearch(get.data.artists.items);
      setPlaylistsSearch(get.data.playlists.items);
      setEpisodeSearch(get.data.episodes.items);
    } catch (e) {
      console.error(e);
    }
  };

  const showSearch = () => {
    if (showCategories) {
      return (
        <div>
          <h3 className="text-header"> {t("categories")}</h3>
          <Categories></Categories>
        </div>
      );
    } else {
      return (
        <div>
          {/* search in Tracks */}
          <h2 className="text-header"> {t("track")}</h2>
          {getTracksSearch.map((track) => {
            return (
              <div className="container">
                <div className="row song-list">
                  <div
                    className="col-1"
                    onClick={() => context.handlePlayerId(track.uri)}
                  >
                    <div className="img-player">
                      <img
                        className="song-img "
                        // src={likedSonge.track.album.images[0].url}
                        src={
                          track.album.images[0] != null
                            ? track.album.images[0].url
                            : "https://download.services.iconscout.com/download?name=audio-track&download=1&url=https%3A%2F%2Fd1b1fjiwh8olf2.cloudfront.net%2Ficon%2Ffree%2Fpng-512%2F31710.png%3Ftoken%3DeyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzMDYyNzIwMCwicSI6bnVsbCwiaWF0IjoxNjMwMzk2NjU0fQ__.940492cb924272ebfe1ded0b81c68599f920d7c1a8548db6e51db9ed2d852ab6&width=512&height=512"
                        }
                        alt="alternative"
                      />
                      <div className="overlay icon">
                        <i className="fa fa-play-circle "></i>
                      </div>
                    </div>
                    {/* <img
                  className="song-img"
                  src={likedSonge.track.album.images[0].url}
                  alt="alternative"
                /> */}
                  </div>
                  <div className="col-3 ">
                    <h3 className="song-h3">{track.name}</h3>
                    {/* <p1>{likedSonge.track.artists[0].name}</p1> */}
                    <NavLink
                      to="/artist"
                      className="link song-p"
                      onClick={() =>
                        context.handleArtistId(track.artists[0].id)
                      }
                    >
                      {track.artists[0].name}
                    </NavLink>
                  </div>

                  <div className="col-5 song-p1">
                    <NavLink
                      to="/album"
                      className="link song-p"
                      onClick={() => context.handleAlbumId(track.album.id)}
                    >
                      {track.album.name}
                    </NavLink>
                  </div>
                  <div className="col-1 ">
                    <div className="like-icon">
                      <div className=" icon4">
                        {/* {checkLike(likedSonge.track.id) ? (
                      <i className="fa fa-heart "></i>
                    ) : (
                      <i className="fa fa-heart-o "></i>
                    )} */}
                        <i
                          className="fa fa-heart-o"
                          onClick={() => {
                            like(track.id);
                            toast.success(
                              t("music") +
                                " '" +
                                track.name +
                                "' " +
                                t("toastAdd"),
                              {
                                position: "bottom-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                              }
                            );
                          }}
                        ></i>
                        {/* <i className="fa fa-heart-o "></i> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-1 song-p1">
                    <h6>{millisToMinutesAndSeconds(track.duration_ms)}</h6>
                  </div>
                </div>
              </div>
            );
          })}

          {/* search in Albums */}
          <div className="container">
            <div className="row">
              <h2 className="text-header1"> {t("album")}</h2>
              {getAlbumsSearch.map((album) => {
                return (
                  <div className="col-lg-2">
                    <NavLink
                      to="/album"
                      className="link"
                      onClick={() => context.handleAlbumId(album.id)}
                    >
                      <div id="services" className="cards">
                        <div className="card">
                          <div className="card-image">
                            <img
                              className="img-fluid Square-img"
                              src={
                                album.images[0] != null
                                  ? album.images[0].url
                                  : "https://cdn0.iconfinder.com/data/icons/neutro-audio/32/album-512.png"
                              }
                              alt="alternative"
                            />
                          </div>
                          <div>
                            <h3 className="">{album.name}</h3>
                            {/* <p className="">{album.artists[0].name}</p> */}
                            <NavLink
                              to="/artist"
                              className="link"
                              onClick={() =>
                                context.handleArtistId(album.artists[0].id)
                              }
                            >
                              <p className="link">{album.artists[0].name}</p>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>

          {/* search in Artists */}
          <div className="container">
            <div className="row">
              <h2 className="text-header1"> {t("artist")}</h2>
              {getArtistsSearch.map((artist) => {
                return (
                  <div className="col-lg-2">
                    <NavLink
                      to="/artist"
                      className="link"
                      onClick={() => context.handleArtistId(artist.id)}
                    >
                      <div id="services" className="cards2 ">
                        <div className="card">
                          <div className="card-image">
                            <img
                              className="img-fluid round-img "
                              src={
                                artist.images[0] != null
                                  ? artist.images[0].url
                                  : "https://icon-library.com/images/person-image-icon/person-image-icon-12.jpg"
                              }
                              alt="alternative"
                            />
                          </div>
                          <div>
                            <h3 className="">{artist.name}</h3>
                            {/* <p className="">{artist.type}</p> */}
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>

          {/* search in Playlists */}
          <div className="container">
            <div className="row">
              <h2 className="text-header1"> {t("playlists")}</h2>
              {getPlaylistsSearch.map((playlist) => {
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
                              className="img-fluid Square-img"
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
                            <p className="">{playlist.owner.display_name}</p>
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
    }
  };

  // React.useEffect(() => {
  //   searching();
  // }, []);

  return (
    <div>
      <form onSubmit={searching} className="search-bar">
        <input
          placeholder={t("searchPlaceholder")}
          // placeholder="Artists, songs, or podcasts"
          value={getSearch}
          type="text"
          name="search"
          pattern=".*\S.*"
          required
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
      {showSearch()}
    </div>
  );
};

export default Searching;
