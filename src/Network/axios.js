import axios from "axios";

const instance = axios.create({
  // cloud function api url should be changed with yours
  baseURL: "http://localhost:5001/clone-bcd7f/us-central1/api",
});

export default instance;
