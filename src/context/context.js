import { createContext } from "react";

const Context = createContext({
  albumId: "",
  artistId: "",
  playerId: "",
  playlistId: "",
  handleAlbumId: () => {},
  handleArtistId: () => {},
  handlePlayerId: () => {},
  handlePlaylistId: () => {},
});

export default Context;
