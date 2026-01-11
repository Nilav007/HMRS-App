import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function JobSeekerDashboard() {
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
          Job Seeker Dashboard
          <button className="btn btn-danger" style={{float: 'right'}} onClick={handleLogout}>
            Logout
          </button>
        </div>

        <p style={{marginBottom: '2rem'}}>Welcome, {userEmail}!</p>

        <div className="features">
          <div className="feature-card">
            <h3>Browse Jobs</h3>
            <p>View all available job positions</p>
            <Link to="/job-positions">
              <button className="btn btn-primary">View Jobs</button>
            </Link>
          </div>

          <div className="feature-card">
            <h3>My Applications</h3>
            <p>Track your job applications</p>
            <button className="btn btn-info">Coming Soon</button>
          </div>

          <div className="feature-card">
            <h3>My Profile</h3>
            <p>Update your profile information</p>
            <button className="btn btn-success">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSeekerDashboard;