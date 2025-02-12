import React from 'react';
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Dashboard = () => {
    const { user, logout } = useAuth();
    return (
        <div>
             <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mt-8">Dashboard</h1>
        {user && (
          <div className="text-center mt-4">
            <p>Welcome, {user.name}!</p>
            <button
              onClick={logout}
              className="mt-4 bg-red-600 text-white p-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
        </div>
    );
};

export default Dashboard;