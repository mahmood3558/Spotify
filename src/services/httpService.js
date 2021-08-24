import axios from "axios";
import { toast } from "react-toastify";

import hash from "./setToken/hash";

axios.defaults.headers.get["Authorization"] = `Bearer ${hash.access_token}`;

// ['Accept'] = "application/json"["Content-Type"]="Content-Type"

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    console.log(error);
    toast.error("Server error", {
      position: "top-right",
      closeOnClick: true,
    });
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
