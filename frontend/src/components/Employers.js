import React, { useState, useEffect } from 'react';
import { employerAPI } from '../services/api';

function Employers() {
  const [employers, setEmployers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    fetchEmployers();
  }, []);

  const fetchEmployers = async () => {
    try {
      const response = await employerAPI.getAll();
      setEmployers(response.data.data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching employers:', error);
      setMessage({ text: 'Error loading employers', type: 'error' });
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employer?')) {
      try {
        await employerAPI.delete(id);
        setMessage({ text: 'Employer deleted successfully!', type: 'success' });
        fetchEmployers();
        setTimeout(() => setMessage({ text: '', type: '' }), 3000);
      } catch (error) {
        setMessage({ text: 'Error deleting employer', type: 'error' });
      }
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Employers List</div>

        {message.text && (
          <div className={`alert alert-${message.type}`}>
            {message.text}
          </div>
        )}

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Company Name</th>
              <th>Website</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employers.map((employer) => (
              <tr key={employer.id}>
                <td>{employer.id}</td>
                <td>{employer.companyName}</td>
                <td>{employer.companyWebPage}</td>
                <td>{employer.email}</td>
                <td>{employer.phoneNumber}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(employer.id)}>
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

export default Employers;
