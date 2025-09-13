// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-2-vq6j.onrender.com/api", // ✅ Deployed backend
});

export const saveSample = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const res = await API.post("/face/save-sample", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const trainModel = async () => {
  const res = await API.post("/face/train");
  return res.data;
};

export const recognizeFace = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const res = await API.post("/face/recognize", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export default API;
