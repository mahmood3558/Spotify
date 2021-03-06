import React, { useState, useEffect } from "react";

import { currentPlayback } from "../services/service";
import Context from "../context/context";

const GlobalState = (props) => {
  const [getPlayerId, setPlayerId] = useState("");
  const [getArtistId, setArtistId] = useState("");
  const [getAlbumId, setAlbumId] = useState("");
  const [getPlaylistId, setPlaylistId] = useState("");
  const [getCategorieId, setCategorieId] = useState("");

  const handlePlayerId = (playerId) => {
    setPlayerId(playerId);
  };

  const handleArtistId = (artistId) => {
    setArtistId(artistId);
  };

  const handleAlbumId = (albumId) => {
    setAlbumId(albumId);
  };

  const handlePlaylistId = (playlistId) => {
    setPlaylistId(playlistId);
  };

  const handleCategorieId = (categorieId) => {
    setCategorieId(categorieId);
  };

  const token = async () => {
    try {
      const get = await currentPlayback();
      // console.log("currentPlaybackkkkkkkkkkkk");
      // console.log(get.data.context);
      // console.log("currentPlaybackkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      setPlayerId(get.data.context.uri);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    token();
  }, []);

  return (
    <Context.Provider
      value={{
        albumId: getAlbumId,
        artistId: getArtistId,
        playerId: getPlayerId,
        playlistId: getPlaylistId,
        categorieId: getCategorieId,
        handleAlbumId: handleAlbumId,
        handleArtistId: handleArtistId,
        handlePlayerId: handlePlayerId,
        handlePlaylistId: handlePlaylistId,
        handleCategorieId: handleCategorieId,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
