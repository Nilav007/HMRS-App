import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-hero">
      <h1>Welcome to HRMS System</h1>
      <p>Your complete Human Resource Management Solution</p>

      <div className="container">
        <div className="features">
          <div className="feature-card">
            <h3>For Employers</h3>
            <p>Post jobs, manage applications, and find the best talent</p>
            <Link to="/employer-register">
              <button className="btn btn-primary">Register as Employer</button>
            </Link>
          </div>

          <div className="feature-card">
            <h3>For Job Seekers</h3>
            <p>Find your dream job and apply easily</p>
            <Link to="/jobseeker-register">
              <button className="btn btn-primary">Register as Job Seeker</button>
            </Link>
          </div>

          <div className="feature-card">
            <h3>Browse Jobs</h3>
            <p>View all available job positions</p>
            <Link to="/job-positions">
              <button className="btn btn-info">View Positions</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;