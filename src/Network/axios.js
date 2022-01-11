import axios from "axios";

const instance = axios.create({
  // cloud function api url should be changed with yours
  baseURL: "xxxxxxxxxxxxxxxxxx",
});

export default instance;
