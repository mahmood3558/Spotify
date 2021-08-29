import http from "./httpService";
import config from "./config.json";
// import hash from "./setToken/hash";

export const profile = () => {
  return http.get(`${config.spotify}/v1/me`);
};

export const topTracks = () => {
  return http.get(`${config.spotify}/v1/me/top/tracks`);
};

export const newReleases = () => {
  return http.get(`${config.spotify}/v1/browse/new-releases`);
};

export const loginUser = (user) => {
  return http.post(`${config.toplearnapi}/api/login`, JSON.stringify(user));
};
