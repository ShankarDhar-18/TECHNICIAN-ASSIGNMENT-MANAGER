import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Admin login shortcut
    if (email === 'admin' && password === 'admin') {
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('user', JSON.stringify({ name: 'Admin' }));
      navigate('/admin-dashboard');
      return;
    }

    try {
      const res = await axios.post('http://localhost:6500/api/auth/login', {
        email,
        password,
      });

      if (res.data.token) {
        // ✅ Fallback if res.data.user is undefined
        const userInfo = res.data.user || { name: email };
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(userInfo));
        localStorage.setItem('isAdmin', 'false');
        navigate('/home');
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login Error:', err);
      alert('Login failed. Invalid credentials or server error.');
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          width: '360px',
          borderRadius: '15px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }}
      >
        <h3
          className="text-center mb-4"
          style={{ color: '#4b3f72', fontWeight: '700' }}
        >
          Welcome Back
        </h3>

        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label" style={{ fontWeight: '600' }}>
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              className="form-control form-control-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or username"
              required
              style={{
                borderRadius: '8px',
                borderColor: '#764ba2',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#667eea')}
              onBlur={(e) => (e.target.style.borderColor = '#764ba2')}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label" style={{ fontWeight: '600' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control form-control-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{
                borderRadius: '8px',
                borderColor: '#764ba2',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#667eea')}
              onBlur={(e) => (e.target.style.borderColor = '#764ba2')}
            />
          </div>

          <button
            type="submit"
            className="btn btn-gradient w-100 fw-bold"
            style={{
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '10px',
              padding: '12px',
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(118, 75, 162, 0.4)',
              color: '#fff',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) =>
              (e.target.style.background =
                'linear-gradient(90deg, #764ba2 0%, #667eea 100%)')
            }
            onMouseLeave={(e) =>
              (e.target.style.background =
                'linear-gradient(90deg, #667eea 0%, #764ba2 100%)')
            }
          >
            Login
          </button>
        </form>

        <p className="text-center mt-3 mb-0" style={{ color: '#777' }}>
          Don't have an account?{' '}
          <a href="/register" style={{ color: '#764ba2', fontWeight: '600' }}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
