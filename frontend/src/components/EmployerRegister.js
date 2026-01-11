import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

function EmployerRegister() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyWebPage: '',
    email: '',
    password: '',
    rePassword: '',
    phoneNumber: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.rePassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      const response = await api.post('/employers/add', formData);
      if (response.data.success) {
        alert('Registration successful!');
        navigate('/employer-login');
      } else {
        setError(response.data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h2>Employer Registration</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            minLength="2"
          />
        </div>
        <div className="form-group">
          <label>Company Website:</label>
          <input
            type="text"
            name="companyWebPage"
            value={formData.companyWebPage}
            onChange={handleChange}
            placeholder="https://www.example.com"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="1234567890"
            required
            pattern="[0-9]{10,15}"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="rePassword"
            value={formData.rePassword}
            onChange={handleChange}
            required
            minLength="6"
          />
        </div>
        <button type="submit" className="btn-primary">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/employer-login">Login here</Link>
      </p>
    </div>
  );
}

export default EmployerRegister;
