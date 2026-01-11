import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { jobSeekerAPI } from '../services/api';

function JobSeekerRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    nationalId: '',
    birthDate: '',
    email: '',
    password: '',
    rePaswword: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.rePaswword) {
      setMessage({ text: 'Passwords do not match!', type: 'error' });
      return;
    }

    try {
      await jobSeekerAPI.add(formData);
      setMessage({ text: 'Registration successful!', type: 'success' });
      setTimeout(() => navigate('/jobseeker-login'), 2000);
    } catch (error) {
      setMessage({ text: error.response?.data?.message || 'Registration failed', type: 'error' });
    }
  };

  return (
    <div className="container">
      <div className="card" style={{maxWidth: '600px', margin: '2rem auto'}}>
        <div className="card-header">Job Seeker Registration</div>

        {message.text && (
          <div className={`alert alert-${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-input"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">National ID</label>
            <input
              type="text"
              name="nationalId"
              className="form-input"
              value={formData.nationalId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Birth Year</label>
            <input
              type="number"
              name="birthDate"
              className="form-input"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="rePaswword"
              className="form-input"
              value={formData.rePaswword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
            Register
          </button>

          <p style={{marginTop: '1rem', textAlign: 'center'}}>
            Already have an account? <Link to="/jobseeker-login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default JobSeekerRegister;