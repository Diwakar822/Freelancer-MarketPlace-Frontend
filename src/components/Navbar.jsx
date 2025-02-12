import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Freelance Marketplace
        </Link>
        <div className="flex space-x-4">
          <Link to="/login" className="hover:text-gray-300 font-bold">
            Login
          </Link>
          <Link to="/register" className="hover:text-gray-300 font-bold">
            Register
          </Link>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;