import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Components
import Home from './components/Home';
import EmployerLogin from './components/EmployerLogin';
import JobSeekerLogin from './components/JobSeekerLogin';
import EmployerRegister from './components/EmployerRegister';
import JobSeekerRegister from './components/JobSeekerRegister';
import EmployerDashboard from './components/EmployerDashboard';
import JobSeekerDashboard from './components/JobSeekerDashboard';
import JobPositions from './components/JobPositions';
import Employers from './components/Employers';
import JobSeekers from './components/JobSeekers';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              HRMS System
            </Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/job-positions" className="nav-link">Job Positions</Link>
              </li>
              <li className="nav-item">
                <Link to="/employer-login" className="nav-link">Employer Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/jobseeker-login" className="nav-link">Job Seeker Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employer-login" element={<EmployerLogin />} />
          <Route path="/jobseeker-login" element={<JobSeekerLogin />} />
          <Route path="/employer-register" element={<EmployerRegister />} />
          <Route path="/jobseeker-register" element={<JobSeekerRegister />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/jobseeker-dashboard" element={<JobSeekerDashboard />} />
          <Route path="/job-positions" element={<JobPositions />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/jobseekers" element={<JobSeekers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;