import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const API_URL = "https://smart-guradian.onrender.com/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(
  (config) => {
    const token = secureLocalStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
