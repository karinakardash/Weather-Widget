import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

api.interceptors.request.use((config) => {
  config.url =
    config.url + "&units=metric" + "&appid=" + process.env.REACT_APP_API_KEY;
  return config;
});

export const apiPro = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

apiPro.interceptors.request.use((config) => {
  config.url =
    config.url +
    "&units=metric" +
    "&appid=" +
    process.env.REACT_APP_API_PRO_KEY;
  return config;
});
