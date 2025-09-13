// src/api.js
import axios from "axios";

// ✅ Use your deployed Render backend
const API = axios.create({
  baseURL: "https://backend-2-vq6j.onrender.com/api",
});

// ----------------------------
// 🔹 FACE RECOGNITION ENDPOINTS
// ----------------------------

// Upload a face sample (image)
export const saveSample = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await API.post("/face/save-sample", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// Train the recognition model
export const trainModel = async () => {
  const res = await API.post("/face/train");
  return res.data;
};

// Recognize face from an uploaded image
export const recognizeFace = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await API.post("/face/recognize", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// ----------------------------
// 🔹 AUTH / ATTENDANCE (if needed later)
// ----------------------------
// Example placeholders – update with your backend endpoints

export const login = async (credentials) => {
  const res = await API.post("/auth/login", credentials);
  return res.data;
};

export const signup = async (data) => {
  const res = await API.post("/auth/signup", data);
  return res.data;
};

export const getAttendanceList = async () => {
  const res = await API.get("/attendance/list");
  return res.data;
};

export default API;
