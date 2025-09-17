import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "http://localhost:5000";
const API = axios.create({
  baseURL: `${baseURL}/api`,
});

export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);

export default API;