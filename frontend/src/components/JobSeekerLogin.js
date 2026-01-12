import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

function JobSeekerLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await api.get('/jobseekers/getall');
      
      if (response.data.success && response.data.data) {
        const jobSeeker = response.data.data.find(
          js => js.email === formData.email && js.password === formData.password
        );
        
        if (jobSeeker) {
          localStorage.setItem('userType', 'jobseeker');
          localStorage.setItem('userEmail', formData.email);
          localStorage.setItem('userId', jobSeeker.id);
          navigate('/jobseeker-dashboard');
        } else {
          setMessage({ text: 'Invalid email or password', type: 'danger' });
        }
      }
    } catch (err) {
      console.error('Login error:', err);
      setMessage({ text: 'Login failed. Please try again.', type: 'danger' });
    }
  };

  return (
    <div className="container">
      <div className="card" style={{maxWidth: '500px', margin: '2rem auto'}}>
        <div className="card-header">Job Seeker Login</div>

        {message.text && (
          <div className={`alert alert-${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
            Login
          </button>

          <p style={{marginTop: '1rem', textAlign: 'center'}}>
            Don't have an account? <Link to="/jobseeker-register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default JobSeekerLogin;
