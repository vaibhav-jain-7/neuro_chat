import axios from "axios";
const api = axios.create({
    baseURL:  `http://localhost:8002/`,
    withCredentials: false,
  });
  
  api.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default api;
  