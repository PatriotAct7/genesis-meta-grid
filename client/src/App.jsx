import React from "react";
import { HashRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./index.css";

function Login() {
  return (
    <div className="container">
      <h1>Login Page</h1>
      <p><Link className="btn" to="/dashboard">Login</Link></p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/">Logout</Link>
      </nav>
      <div className="card">
        <h1>Dashboard</h1>
        <p>Welcome! Routing works.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
