import React, { useState, useEffect } from 'react';
import api from '../services/api';

function JobPositions() {
  const [jobPositions, setJobPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJobPositions();
  }, []);

  const fetchJobPositions = async () => {
    try {
      const response = await api.get('/job-positions');
      setJobPositions(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load job positions');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="job-positions-container">
      <h2>Available Job Positions</h2>
      <div className="job-list">
        {jobPositions.length === 0 ? (
          <p>No job positions available at the moment.</p>
        ) : (
          jobPositions.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.employer?.companyName}</p>
              <p><strong>Description:</strong> {job.description}</p>
              <p><strong>Requirements:</strong> {job.requirements}</p>
              <p><strong>Salary:</strong> ${job.salary}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Status:</strong> {job.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default JobPositions;
