import http from "./httpService";
import config from "./config.json";
// import hash from "./setToken/hash";

export const user = () => {
  return http.get(`${config.spotify}/v1/me`);
};

export const loginUser = (user) => {
  return http.post(`${config.toplearnapi}/api/login`, JSON.stringify(user));
};
