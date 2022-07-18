import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

api.interceptors.request.use((config) => {
  config.url =
    config.url +
    "&units=metric" +
    "&appid=" +
    "e8f1bf04488ed01e7557d40bed6c9f4e";
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
    "e45ec6bff1f6c8cae1002ee0a201b75b";
  return config;
});
