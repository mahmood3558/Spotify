import { createContext } from "react";

const Context = createContext({
  albumId: "",
  artistId: "",
  playerId: "",
  playlistId: "",
  categorieId: "",
  handleAlbumId: () => {},
  handleArtistId: () => {},
  handlePlayerId: () => {},
  handlePlaylistId: () => {},
  handleCategorieId: () => {},
});

export default Context;
