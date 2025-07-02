import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:6500/api/auth/dashboard", {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(res => setMsg(res.data.message))
      .catch(() => setMsg('Welcome to SD Technicians System'));
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100 px-3"
      style={{
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        className="glass-card text-center p-5"
        style={{
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          borderRadius: '25px',
          color: '#f0f0f3',
          maxWidth: '650px',
          width: '100%',
          boxShadow:
            '0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 0 15px 2px rgba(100, 180, 255, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          transition: 'transform 0.3s ease',
        }}
      >
        <div className="mb-4">
          <i
            className="fas fa-tools fa-4x"
            style={{
              color: '#67d9ff',
              textShadow: '0 0 8px #67d9ff',
              animation: 'pulseGlow 2.5s infinite alternate',
            }}
          ></i>
        </div>

        <h1
          className="mb-3"
          style={{
            fontWeight: '900',
            fontSize: '2.8rem',
            letterSpacing: '1.3px',
            textShadow: '0 2px 6px rgba(103, 217, 255, 0.6)',
          }}
        >
          {msg}
        </h1>

        <p
          className="lead mb-4"
          style={{
            fontSize: '1.25rem',
            lineHeight: '1.6',
            color: '#cde6f7',
            maxWidth: '520px',
            margin: '0 auto',
            fontWeight: '500',
          }}
        >
          SD Technicians System is your trusted partner for managing skilled technician assignments seamlessly. Track services, manage bookings, and optimize workflows with real-time updates — all in one elegant dashboard designed for efficiency and ease.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="btn btn-outline-light btn-lg"
          style={{
            borderRadius: '12px',
            padding: '12px 36px',
            fontWeight: '600',
            letterSpacing: '0.05em',
            boxShadow: '0 4px 12px rgba(103, 217, 255, 0.5)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#67d9ff';
            e.target.style.color = '#02273a';
            e.target.style.boxShadow = '0 6px 20px rgba(103, 217, 255, 0.8)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#f0f0f3';
            e.target.style.boxShadow = '0 4px 12px rgba(103, 217, 255, 0.5)';
          }}
        >
          Refresh Dashboard
        </button>

      <style>{`
        @keyframes pulseGlow {
          0% {
            text-shadow: 0 0 8px #67d9ff;
          }
          100% {
            text-shadow: 0 0 20px #67d9ff, 0 0 30px #3bb9ff;
          }
        }
      `}</style>
      </div>
    </div>
  );
};

export default Dashboard;
