import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-dayone.herokuapp.com",
});

export default instance;
