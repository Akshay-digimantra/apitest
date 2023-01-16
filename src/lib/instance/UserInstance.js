import axios from "axios";

const instance = axios.create({
  baseURL: `https://gorest.co.in/public/`,
});

instance.interceptors.request.use((request) => {
  return request;
});

instance.interceptors.response.use((response) => {
  return response;
});

export default instance;
