// import React,{useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import AuthForm from "../components/AuthForm";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { registerUser } from "../api/api";

// const Register = () => {
//     const navigate = useNavigate();
//     const [error, setError] = useState("");
  
//     const handleRegister = async (formData) => {
//       try {
//         const response = await registerUser(formData);
//         if (response.success) {
//           alert("Registration successful! Please login.");
//           navigate("/login");
//         }
//       } catch (error) {
//         setError(error.message || "Registration failed. Please try again.");
//       }
//     };
//     return (
//         <div>
//              <div>
//       <Navbar />
//       {error && <p className="text-red-500 text-center mt-4">{error}</p>}
//       <AuthForm type="register" onSubmit={handleRegister} />
//       <Footer />
//     </div>
//         </div>
//     );
// };

// export default Register;

import React ,{ useState}from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "freelancer",
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
      const response = await axios.post("https://freelancer-marketplace-backend-1.onrender.com/api/auth/register", formData);
      if (response.data.success) {
        alert("Registration successful! Please login.");
        
        navigate("/login"); // Redirect to login page
         // Redirect based on role
        
        
      }
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };
  return (
    <div>
       <Navbar />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="freelancer">Freelancer</option>
              <option value="client">Client</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Register
            </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Register;