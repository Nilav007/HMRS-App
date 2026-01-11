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
      const response = await api.get('/jobpositions/getall');
      if (response.data.success && response.data.data) {
        setJobPositions(response.data.data);
      } else {
        setJobPositions([]);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching job positions:', err);
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
              <p><strong>Position:</strong> {job.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default JobPositions;
