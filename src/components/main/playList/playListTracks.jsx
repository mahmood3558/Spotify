import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { playlistTracks, like } from "../../../services/service";
import Context from "../../../context/context";

const PlaylistTracks = () => {
  const [getPlaylistCoverImage, setPlaylistCoverImage] = useState([]);
  const [getPlaylistName, setPlaylistName] = useState([]);
  const [getPlaylistTracks, setplaylistTracks] = useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);
  const context = useContext(Context);

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);

    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const playlistTracksToken = async () => {
    try {
      const get = await playlistTracks(context.playlistId);
      // console.log("playlistTrackstToken");
      // console.log(get);
      // console.log("playlistTrackstToken");
      setPlaylistCoverImage(get.data.images[0]);
      setPlaylistName(get.data);
      setplaylistTracks(get.data.tracks.items);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    playlistTracksToken();
  }, []);

  return (
    <div>
      <div>
        <div className="d-flex align-items-center px-4 py-5 profile ">
          <div>
            <img
              className="playlist-img img-fluid"
              width="100"
              src={getPlaylistCoverImage.url}
              alt=""
            />
          </div>
          <div className="ms-2">
            <h3 className="fs-6 mb-0">{getPlaylistName.name}</h3>
          </div>
        </div>
      </div>

      <div className="row  ">
        <div className="col-1">
          <h3 className="text-header">Tracks</h3>
        </div>
        <div className="col-1">
          <div className=" icon2">
            <i
              className="fa fa-play-circle "
              onClick={() => context.handlePlayerId(getPlaylistName.uri)}
            ></i>
          </div>
        </div>
      </div>

      {getPlaylistTracks.map((playlistTrack) => {
        return (
          <div className="container ">
            <div className="row  song-list">
              <div
                className="col-1"
                onClick={() => context.handlePlayerId(playlistTrack.track.uri)}
              >
                <div className="img-player">
                  <img
                    className="song-img "
                    // src={playlistTrack.track.album.images[0].url}
                    src={
                      playlistTrack.track.album.images[0] != null
                        ? playlistTrack.track.album.images[0].url
                        : "https://download.services.iconscout.com/download?name=music-album&download=1&url=https%3A%2F%2Fd1b1fjiwh8olf2.cloudfront.net%2Ficon%2Ffree%2Fpng-512%2F475066.png%3Ftoken%3DeyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzMDYyNzIwMCwicSI6bnVsbCwiaWF0IjoxNjMwMzk2MjIzfQ__.4e5e7d734ce9ecba9d94de0517c37de235ca452ae5395bc41d652458d1663fcd&width=512&height=512"
                    }
                    alt="alternative"
                  />
                  <div className="overlay icon">
                    <i className="fa fa-play-circle "></i>
                  </div>
                </div>
              </div>
              <div className="col-3 ">
                <h3 className="song-h3">{playlistTrack.track.name}</h3>

                <NavLink
                  to="/artist"
                  className="link song-p"
                  onClick={() =>
                    context.handleArtistId(playlistTrack.track.artists[0].id)
                  }
                >
                  {playlistTrack.track.artists[0].name}
                </NavLink>
              </div>
              <div className="col-5 song-p1">
                <NavLink
                  to="/album"
                  className="link song-p"
                  onClick={() =>
                    context.handleAlbumId(playlistTrack.track.album.id)
                  }
                >
                  {playlistTrack.track.album.name}
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
                      onClick={() => like(playlistTrack.track.id)}
                    ></i>
                    {/* <i className="fa fa-heart "></i> */}
                  </div>
                </div>
              </div>
              <div className="col-1 song-p1">
                <h6>
                  {millisToMinutesAndSeconds(playlistTrack.track.duration_ms)}
                </h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistTracks;
