import React, { useState, useEffect } from 'react';
import api from '../services/api';

function JobPositions() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJobAdvertisements();
  }, []);

  const fetchJobAdvertisements = async () => {
    try {
      const response = await api.get('/job-advertisements');
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
            <div key={job.id} className="job-card">
              <h3>{job.jobPosition?.title || 'Position Not Specified'}</h3>
              <p><strong>Company:</strong> {job.employer?.companyName || 'N/A'}</p>
              <p><strong>Description:</strong> {job.jobDescription || 'No description provided'}</p>
              <p><strong>City:</strong> {job.city?.name || 'N/A'}</p>
              <p><strong>Min Salary:</strong> ${job.minSalary || 'Not specified'}</p>
              <p><strong>Max Salary:</strong> ${job.maxSalary || 'Not specified'}</p>
              <p><strong>Open Positions:</strong> {job.numberOfOpenPositions || 'N/A'}</p>
              <p><strong>Application Deadline:</strong> {job.applicationDeadline ? new Date(job.applicationDeadline).toLocaleDateString() : 'N/A'}</p>
              <p><strong>Status:</strong> {job.isActive ? '✅ Active' : '❌ Inactive'}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default JobPositions;
