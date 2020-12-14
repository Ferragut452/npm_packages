import axios from "axios";

const $http = axios.create({
  baseURL: process.env.VUE_APP_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default $http;
