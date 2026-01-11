import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

function EmployerLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    try {
      const response = await api.post('/employers/login', formData);
      if (response.data.success && response.data.data) {
        localStorage.setItem('employerId', response.data.data.id);
        localStorage.setItem('userType', 'employer');
        localStorage.setItem('companyName', response.data.data.companyName);
        navigate('/employer-dashboard');
      } else {
        setError(response.data.message || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Employer Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
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
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/employer-register">Register here</Link>
      </p>
    </div>
  );
}

export default EmployerLogin;
