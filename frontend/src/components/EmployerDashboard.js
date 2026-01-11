import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function EmployerDashboard() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem('userType');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          Employer Dashboard
          <button className="btn btn-danger" style={{float: 'right'}} onClick={handleLogout}>
            Logout
          </button>
        </div>

        <p style={{marginBottom: '2rem'}}>Welcome, {userEmail}!</p>

        <div className="features">
          <div className="feature-card">
            <h3>Manage Job Positions</h3>
            <p>Create, edit, and delete job positions</p>
            <Link to="/job-positions">
              <button className="btn btn-primary">Go to Positions</button>
            </Link>
          </div>

          <div className="feature-card">
            <h3>View Job Seekers</h3>
            <p>Browse registered job seekers</p>
            <Link to="/jobseekers">
              <button className="btn btn-info">View Job Seekers</button>
            </Link>
          </div>

          <div className="feature-card">
            <h3>My Profile</h3>
            <p>Manage your company profile</p>
            <Link to="/employers">
              <button className="btn btn-success">View Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerDashboard;