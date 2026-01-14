import axios from "axios";

const api = axios.create({
  baseURL: "https://gig-flow-tyk0.onrender.com",
  withCredentials: true, 
});

export default api;
