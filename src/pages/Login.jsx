import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("https://freelancer-marketplace-backend-1.onrender.com/api/auth/login", formData);
      console.log("API Response:", response.data); // Debugging

      alert("Login successful!");
      console.log("User Role:", response.data.role);

      // if (formData.role === "client") {
      //   navigate("/client-dashboard"); // Redirect to client dashboard
      // } else if (formData.role === "freelancer") {
      //   navigate("/freelancer-dashboard"); // Redirect to freelancer dashboard
      // }

      if (response.data.role === "client") {
        navigate("/client-dashboard");
      } else if (response.data.role === "freelancer") {
        navigate("/freelancer-dashboard");
      }

     
      if (response.data.success) {
       
        localStorage.setItem("token", response.data.token); // Save token to localStorage
        localStorage.setItem("role", response.data.role); // Save role to localStorage
        console.log("Token saved:", response.data.token); // Debugging
        console.log("Role saved:", response.data.role); // Debugging

        // alert("Login successful!");
        // navigate("/dashboard"); // Redirect to dashboard

          // Redirect based on role
        
      }
    } catch (error) {
      console.error("Login Error:", error); // Debugging
      setError(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register here
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;