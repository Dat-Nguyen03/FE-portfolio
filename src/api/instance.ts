import axios from "axios";

const { accessToken } = JSON.parse(localStorage.getItem("user") || "false");

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default instance;
