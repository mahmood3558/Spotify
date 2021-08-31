import React from "react";

import { search } from "../../../services/service";
import Categories from "../search/categories";

const Searching = () => {
  const [getSearch, setSearch] = React.useState([]);
  let [showCategories, setShowCategories] = React.useState(true);

  const [getTracksSearch, setTracksSearch] = React.useState([]);
  const [getAlbumsSearch, setAlbumsSearch] = React.useState([]);
  const [getArtistsSearch, setArtistsSearch] = React.useState([]);
  const [getPlaylistsSearch, setPlaylistsSearch] = React.useState([]);
  const [getEpisodeSearch, setEpisodeSearch] = React.useState([]);

  const searching = async (event) => {
    event.preventDefault();
    setShowCategories(false);
    const Search = getSearch;
    try {
      const get = await search(Search);
      console.log(get.data.artists.items);
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
          <h3 className="text-header">Categories</h3>
          <Categories></Categories>
        </div>
      );
    } else {
      return (
        <div>
          {/* search in Tracks */}
          <div className="container">
            <div className="row">
              <h2 className="text-header">Track</h2>
              {getTracksSearch.map((track) => {
                return (
                  <div className="col-lg-2">
                    <div id="services" className="cards">
                      <div className="card">
                        <div className="card-image">
                          <img
                            className="img-fluid Square-img"
                            // src={track.album.images[0].url}
                            src={
                              track.album.images[0] != null
                                ? track.album.images[0].url
                                : "https://download.services.iconscout.com/download?name=audio-track&download=1&url=https%3A%2F%2Fd1b1fjiwh8olf2.cloudfront.net%2Ficon%2Ffree%2Fpng-512%2F31710.png%3Ftoken%3DeyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzMDYyNzIwMCwicSI6bnVsbCwiaWF0IjoxNjMwMzk2NjU0fQ__.940492cb924272ebfe1ded0b81c68599f920d7c1a8548db6e51db9ed2d852ab6&width=512&height=512"
                            }
                            alt="alternative"
                          />
                        </div>
                        <div>
                          <h3 className="">{track.album.name}</h3>
                          <p className="">{track.album.artists[0].name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* search in Albums */}
          <div className="container">
            <div className="row">
              <h2 className="text-header">Album</h2>
              {getAlbumsSearch.map((album) => {
                return (
                  <div className="col-lg-2">
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
                          <p className="">{album.artists[0].name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* search in Artists */}
          <div className="container">
            <div className="row">
              <h2 className="text-header">Artist</h2>
              {getArtistsSearch.map((artist) => {
                return (
                  <div className="col-lg-2">
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* search in Playlists */}
          <div className="container">
            <div className="row">
              <h2 className="text-header">Playlists</h2>
              {getPlaylistsSearch.map((playlist) => {
                return (
                  <div className="col-lg-2">
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* search in Episode */}
          {/* <div className="container">
        <div className="row">
          <h2 className="text-header">Episode</h2>
          {getEpisodeSearch.map((episode) => {
            if (episode != null) {
              return (
                <div className="col-lg-2">
                  <div id="services" className="cards">
                    <div className="card">
                      <div className="card-image">
                        <img
                          className="img-fluid"
                          src={episode.images[0].url}
                          alt="alternative"
                        />
                      </div>
                      <div>
                        <h3 className="text-break">{episode.name}</h3>
                        <p className="">{episode.owner.display_name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div> */}
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
          placeholder="Artists, songs, or podcasts"
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
