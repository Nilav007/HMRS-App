import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

function JobSeekerDashboard() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');
  const userId = localStorage.getItem('userId');
  const [showApplications, setShowApplications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [applications, setApplications] = useState([]);
  const [loadingApps, setLoadingApps] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userType');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
    navigate('/');
  };

  const fetchApplications = async () => {
    if (!userId) return;
    
    setLoadingApps(true);
    try {
      const response = await api.get(`/job-applications/by-jobseeker/${userId}`);
      if (response.data.success && response.data.data) {
        setApplications(response.data.data);
      }
    } catch (err) {
      console.error('Error fetching applications:', err);
    } finally {
      setLoadingApps(false);
    }
  };

  const handleShowApplications = () => {
    setShowApplications(!showApplications);
    if (!showApplications && applications.length === 0) {
      fetchApplications();
    }
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
            <button className="btn btn-info" onClick={handleShowApplications}>
              {showApplications ? 'Hide' : `View Applications (${applications.length})`}
            </button>
          </div>

          <div className="feature-card">
            <h3>My Profile</h3>
            <p>Update your profile information</p>
            <button className="btn btn-success" onClick={() => setShowProfile(!showProfile)}>
              {showProfile ? 'Hide Profile' : 'Edit Profile'}
            </button>
          </div>
        </div>

        {showApplications && (
          <div className="applications-section" style={{marginTop: '2rem'}}>
            <h3>My Applications</h3>
            {loadingApps ? (
              <p>Loading applications...</p>
            ) : applications.length === 0 ? (
              <div className="info-message" style={{padding: '1rem', backgroundColor: '#e3f2fd', borderRadius: '4px', marginTop: '1rem'}}>
                <p>You haven't applied to any jobs yet.</p>
                <p>Browse available jobs and apply to get started!</p>
                <Link to="/job-positions">
                  <button className="btn btn-primary" style={{marginTop: '1rem'}}>Browse Jobs</button>
                </Link>
              </div>
            ) : (
              <div className="job-list" style={{marginTop: '1rem'}}>
                {applications.map((app) => (
                  <div key={app.applicationId} className="job-card" style={{marginBottom: '1rem'}}>
                    <h4>{app.jobAdvertisement?.jobPosition?.title || 'Position Not Available'}</h4>
                    <p><strong>Company:</strong> {app.jobAdvertisement?.employer?.companyName || 'N/A'}</p>
                    <p><strong>City:</strong> {app.jobAdvertisement?.city?.cityName || 'N/A'}</p>
                    <p><strong>Applied On:</strong> {app.applicationDate ? new Date(app.applicationDate).toLocaleDateString() : 'N/A'}</p>
                    <p><strong>Status:</strong> <span style={{
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      backgroundColor: app.status === 'pending' ? '#ffc107' : '#28a745',
                      color: 'white',
                      fontWeight: 'bold'
                    }}>{app.status?.toUpperCase()}</span></p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {showProfile && (
          <div className="profile-section" style={{marginTop: '2rem'}}>
            <h3>My Profile</h3>
            <div className="profile-form" style={{maxWidth: '600px', margin: '0 auto'}}>
              <div className="form-group" style={{marginBottom: '1rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Email:</label>
                <input type="email" value={userEmail} disabled style={{width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd', backgroundColor: '#f5f5f5'}}/>
              </div>
              
              <button className="btn btn-success" style={{marginTop: '1rem'}} onClick={() => alert('Profile update feature coming soon!')}>Save Profile</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobSeekerDashboard;
