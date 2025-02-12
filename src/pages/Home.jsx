import React,{ useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import JobCard from "../components/JobCard";
import { fetchJobs, fetchServices } from "../services/api";
import "../styles/styles.css";
import Search from "../components/Search";
const Home = () => {

  const [jobs, setJobs] = useState([]);
    const [services, setServices] = useState([]);
  
    useEffect(() => {
      // Fetch top jobs and services
      fetchJobs()
        .then((data) => setJobs(data.slice(0, 10))) // Display top 5 jobs
        .catch((error) => console.error("Error fetching jobs:", error));
  
      fetchServices()
        .then((data) => setServices(data.slice(0, 10))) // Display top 5 services
        .catch((error) => console.error("Error fetching services:", error));
    }, []);
    return (
        <div>
             <Navbar />
      {/* <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mt-8">Welcome to the Freelance Marketplace</h1>
        <p className="text-center mt-4">Find the best freelancers or post your job listings.</p>
      </div>
       <h1 className="text-4xl font-bold text-center mt-8">Welcome to the Freelance Marketplace</h1>
       <Search />  */}

       <div className="home-page">
             <header className="hero-section">
        <h1 className="text-4xl font-bold text-center mt-8 px-4">Welcome to Freelance Marketplace</h1>
        <p>Connect with the best freelancers or find your dream projects.</p>
        <div className="hero-buttons">
          <a href="/register" className="button">Get Started</a>
          <a href="/search" className="button button-outline">Explore</a>
        </div>
       
      
      </header>

      <section className="jobs-section">
       <h2>Top Job Listings</h2>
        <div className="jobs-list">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p>No jobs available right now.</p>
          )}
        </div>
        {/* <a href="/jobs" className="link">Create Jobs</a> */}
      </section>

      <section className="services-section">
        <h2>Top Freelancer Services</h2>
        <div className="services-list">
          {services.length > 0 ? (
            services.map((service) => <ServiceCard key={service.id} service={service} />)
          ) : (
            <p>No services available right now.</p>
          )}
        </div>
        {/* <a href="/services" className="link">Create Services</a> */}
      </section>

      <footer className="footer">
        <p>© 2024 Freelance Marketplace. All Rights Reserved.</p>
      </footer>
        </div>
      {/* <Footer /> */}
        </div>
    );
};

export default Home;