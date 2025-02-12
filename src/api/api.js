import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth", // Backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});
// Register user
export const registerUser = async (userData) => {
  try {
    const response = await API.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await API.post("/login", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


export default API;