import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-2-vq6j.onrender.com/api", // 🔹 Render backend
});

export default API;
