import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FreelancerDashboard from './pages/FreelancerDashboard';
import ClientDashboard from './pages/ClientDashboard';
import AddContract from './pages/AddContract';
import PostJob from './pages/PostJob';
import AddService from './pages/AddService';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import FreelancerProfile from './pages/FreelancerProfile';
import ReviewList from './components/ReviewList';
import Search from './components/Search';

const App = () => {
  return (
    <div>
        {/* <AuthProvider> */}
        
          <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/freelancer-dashboard' element={<FreelancerDashboard/>}/>
        <Route path='/client-dashboard' element={<ClientDashboard/>}/>
        <Route path='/Contract' element={<AddContract/>}/>
        <Route path='/jobs' element={<PostJob/>}/>
        <Route path='/services' element={<AddService/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/freelancer/:freelancerId' element={<FreelancerProfile/>}/>
        <Route path='/reviewCart' element={<ReviewList/>}/>
        <Route path='/search' element={<Search/>}/>
  
      </Routes>
    </Router>

    {/* </AuthProvider> */}
    </div>
  );
};

export default App;