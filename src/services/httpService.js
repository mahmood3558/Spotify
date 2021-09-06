import axios from "axios";

import hash from "./setToken/hash";

axios.defaults.headers.get["Authorization"] = `Bearer ${hash.access_token}`;
axios.defaults.headers.delete["Authorization"] = `Bearer ${hash.access_token}`;
axios.defaults.headers.put["Authorization"] = `Bearer ${hash.access_token}`;

// ['Accept'] = "application/json"["Content-Type"]="Content-Type"

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    console.log(error);
  }

  return Promise.reject(error);
});

const axiosRequest = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default axiosRequest;
