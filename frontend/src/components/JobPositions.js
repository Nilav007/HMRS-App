import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function JobPositions() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobAdvertisements();
  }, []);

  const fetchJobAdvertisements = async () => {
    try {
      const response = await api.get('/job-advertisements/active');
      if (response.data.success && response.data.data) {
        setJobAdvertisements(response.data.data);
      } else {
        setJobAdvertisements([]);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching job advertisements:', err);
      setError('Failed to load job advertisements');
      setLoading(false);
    }
  };

  const handleApply = async (job) => {
    const userType = localStorage.getItem('userType');
    const userId = localStorage.getItem('userId');

    if (!userType || userType !== 'jobseeker' || !userId) {
      alert('Please login as a Job Seeker to apply for jobs');
      navigate('/jobseeker-login');
      return;
    }

    const confirmation = window.confirm(
      `Do you want to apply for ${job.jobPosition?.title} at ${job.employer?.companyName}?`
    );

    if (confirmation) {
      try {
        console.log("Job data:", job);
        console.log("Sending advertisementId:", job.advertisementId);
        
        const applicationData = {
          jobSeeker: { id: parseInt(userId) },
          jobAdvertisement: { advertisementId: job.advertisementId },
          status: 'pending'
        };

        const response = await api.post('/job-applications/apply', applicationData);
        
        if (response.data.success) {
          alert(`Application submitted successfully for ${job.jobPosition?.title}!`);
        } else {
          alert(response.data.message || 'Failed to submit application');
        }
      } catch (err) {
        console.error('Error submitting application:', err);
        if (err.response?.data?.message) {
          alert(err.response.data.message);
        } else {
          alert('Failed to submit application. Please try again.');
        }
      }
    }
  };

  if (loading) return <div className="loading">Loading job positions...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="job-positions-container">
      <h2>Available Job Positions</h2>
      <div className="job-list">
        {jobAdvertisements.length === 0 ? (
          <p>No job positions available at the moment.</p>
        ) : (
          jobAdvertisements.map((job) => (
            <div key={job.advertisementId} className="job-card">
              <h3>{job.jobPosition?.title || 'Position Not Specified'}</h3>
              <p><strong>Company:</strong> {job.employer?.companyName || 'N/A'}</p>
              <p><strong>Description:</strong> {job.description || 'No description provided'}</p>
              <p><strong>City:</strong> {job.city?.cityName || 'N/A'}</p>
              <p><strong>Salary Range:</strong> ${job.minSalary?.toLocaleString()} - ${job.maxSalary?.toLocaleString()}</p>
              <p><strong>Open Positions:</strong> {job.openPositionCount || 'N/A'}</p>
              <p><strong>Application Deadline:</strong> {job.applicationDeadline ? new Date(job.applicationDeadline).toLocaleDateString() : 'N/A'}</p>
              
              <button 
                className="btn btn-primary" 
                onClick={() => handleApply(job)}
                style={{
                  marginTop: '1rem',
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Apply Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default JobPositions;
