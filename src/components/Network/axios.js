import axios from "axios";

const instance = axios.create({
  // cloud function api url
  baseURL: "...",
});

export default instance;
