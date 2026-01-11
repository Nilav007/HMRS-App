import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userType', 'jobseeker');
    localStorage.setItem('userEmail', formData.email);
    navigate('/jobseeker-dashboard');
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