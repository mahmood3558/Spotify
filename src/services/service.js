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
  console.log("getSearch");
  console.log(searchWord);
  console.log("getSearch");
  // const searchWord = "lover";
  return http.get(
    `${config.spotify}/v1/search?q=${searchWord}&type=track%2Cartist%2Calbum%2Cplaylist%2Cepisode&market=US&limit=12`
  );
};

// export const searchTrack = () => {
//   return http.get(`${config.spotify}/v1/search?q=Muse&type=track`);
// };

export const categories = () => {
  return http.get(`${config.spotify}/v1/browse/categories`);
};

/////////////////////////////////////////////////////////////////////////////

export const loginUser = (user) => {
  return http.post(`${config.toplearnapi}/api/login`, JSON.stringify(user));
};
