import axios from "axios";

const api = axios.create({
  baseURL: "https://gigflow-backend-aylc.onrender.com/api/auth/register",
  withCredentials: true, 
});

export default api;
