import axios from "axios";

const { accessToken } = JSON.parse(localStorage.getItem("user") || "false");

const instance = axios.create({
  baseURL: "https://be-portfolio-sage.vercel.app/api",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default instance;
