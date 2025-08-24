import React from "react";
import { HashRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./index.css";

/* Pages */
function Login() {
  return (
    <div className="container">
      <h1>Login Page</h1>
      <p><Link className="btn" to="/dashboard">Login</Link></p>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/wallet">Wallet</Link>
      <Link to="/">Logout</Link>
    </nav>
  );
}

function Dashboard() {
  return (
    <div className="container">
      <Nav />
      <div className="card">
        <h1>Dashboard</h1>
        <p>Welcome! Routing works.</p>
      </div>
    </div>
  );
}

function Wallet() {
  return (
    <div className="container">
      <Nav />
      <div className="card">
        <h1>Wallet</h1>
        <p>This is a placeholder. Coming soon: balances, NFTs, transactions.</p>
        <ul>
          <li>ETH: 0.00 (mock)</li>
          <li>NFTs: 0 (mock)</li>
        </ul>
      </div>
    </div>
  );
}

/* App router */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
