import http from "./httpService";
import config from "./config.json";
// import hash from "./setToken/hash";

export const profile = () => {
  return http.get(`${config.spotify}/v1/me`);
};

export const topTracks = () => {
  return http.get(`${config.spotify}/v1/me/top/tracks?limit=12`);
};

export const topArtists = () => {
  return http.get(`${config.spotify}/v1/me/top/artists?limit=12`);
};

export const newReleases = () => {
  return http.get(`${config.spotify}/v1/browse/new-releases?limit=12`);
};

export const featuredPlaylists = () => {
  return http.get(`${config.spotify}/v1/browse/featured-playlists?limit=12`);
};

export const recentlyPlayedTracks = () => {
  return http.get(`${config.spotify}/v1/me/player/recently-played?limit=12`);
};

//search
export const search = (searchWord) => {
  return http.get(
    `${config.spotify}/v1/search?q=${searchWord}&type=track%2Cartist%2Calbum%2Cplaylist%2Cepisode&market=US&limit=12`
  );
};

export const categories = () => {
  return http.get(`${config.spotify}/v1/browse/categories`);
};

//Lib
export const followedArtists = () => {
  return http.get(`${config.spotify}/v1/me/following?type=artist`);
};

export const savedAlbums = () => {
  return http.get(`${config.spotify}/v1/me/albums`);
};

//play list
export const likedSonge = () => {
  return http.get(`${config.spotify}/v1/me/tracks`);
};

export const playlists = () => {
  return http.get(`${config.spotify}/v1/me/playlists`);
};

/////////////////////////////////////////////////////////////////////////////

export const loginUser = (user) => {
  return http.post(`${config.toplearnapi}/api/login`, JSON.stringify(user));
};
