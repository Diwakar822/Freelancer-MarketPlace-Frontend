import React,{ useState, useEffect } from 'react';
// import ContractCard from "../components/ContractCard";
import { Link } from 'react-router-dom';
// import "../styles/styles.css";


const FreelancerDashboard = () => {
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
      fetch("https://freelancer-marketplace-backend-1.onrender.com/api/contracts/freelancer")
        .then((response) => response.json())
        .then((data) => setContracts(data))
        .catch((error) => console.error("Error:", error));
    }, []);
    return (
        <div>
             <div className="dashboard-page">
             
             {contracts.map((contract) => (
        <ContractCard key={contract.id} contract={contract} />
      ))}

      <header className="dashboard-header">
        <h2>Freelancer Dashboard</h2>
      </header>
      <div className="dashboard-summary">
        <div className="summary-item">
          <h4>5</h4>
          <p>Active Contracts</p>
        </div>
        <div className="summary-item">
          <h4>12</h4>
          <p>Completed Projects</p>
        </div>
        <div className="summary-item">
          <h4>4.8</h4>
          <p>Average Rating</p>
        </div>
      </div>
      <section className="dashboard-content">
        <div className="dashboard-card">
          <h3>Create a Services</h3>
          <p>3 services under review</p>
          <p>2 services</p>
          <div className="card-action">
            <Link to={"/services"}><button className="action-button">Create a services</button></Link>
          </div>
        </div>
        <div className="dashboard-card">
          <h3>Contracts</h3>
          <p>2 contracts nearing deadline</p>
          <p>1 awaiting feedback</p>
          <div className="card-action">
           <Link to={'/Contract'}><button className="action-button">view Contracts</button></Link> 
           
          </div>
        </div>
        <div className="dashboard-card">
          <h3>Client Reviews</h3>
          <p>4 new reviews this week</p>
          <p>Overall rating: 4.8</p>
          <div className="card-action">
           <Link to={'/reviewCart'}><button className="action-button">View Reviews</button></Link>
          </div>
        </div>
        <div className="dashboard-card">
          <h3>Earnings</h3>
          <p>Total: $3,200 this month</p>
          <p>Pending: $500</p>
          <div className="card-action">
            <button className="action-button">View Earnings</button>
          </div>
        </div>
        <div className="dashboard-card">
          <h3>Profils</h3>
          <p>5 new items added this month</p>
          <p>Viewers: 200</p>
          <div className="card-action">
           <Link to={"/profile"}><button className="action-button">Edit and View</button></Link>
          </div>
        </div>
      </section>

      
        
          </div>
        </div>
    );
};

export default FreelancerDashboard;