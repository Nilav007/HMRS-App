import React, { useState, useEffect } from 'react';
import { jobSeekerAPI } from '../services/api';

function JobSeekers() {
  const [jobSeekers, setJobSeekers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    fetchJobSeekers();
  }, []);

  const fetchJobSeekers = async () => {
    try {
      const response = await jobSeekerAPI.getAll();
      setJobSeekers(response.data.data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching job seekers:', error);
      setMessage({ text: 'Error loading job seekers', type: 'error' });
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job seeker?')) {
      try {
        await jobSeekerAPI.delete(id);
        setMessage({ text: 'Job seeker deleted successfully!', type: 'success' });
        fetchJobSeekers();
        setTimeout(() => setMessage({ text: '', type: '' }), 3000);
      } catch (error) {
        setMessage({ text: 'Error deleting job seeker', type: 'error' });
      }
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Job Seekers List</div>

        {message.text && (
          <div className={`alert alert-${message.type}`}>
            {message.text}
          </div>
        )}

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>National ID</th>
              <th>Birth Year</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobSeekers.map((jobSeeker) => (
              <tr key={jobSeeker.id}>
                <td>{jobSeeker.id}</td>
                <td>{jobSeeker.name} {jobSeeker.lastName}</td>
                <td>{jobSeeker.nationalId}</td>
                <td>{jobSeeker.birthDate}</td>
                <td>{jobSeeker.email}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(jobSeeker.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JobSeekers;