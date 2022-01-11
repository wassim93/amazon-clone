import axios from "axios";

const instance = axios.create({
  // cloud function api url should be changed with yours
  baseURL: "...",
});

export default instance;
