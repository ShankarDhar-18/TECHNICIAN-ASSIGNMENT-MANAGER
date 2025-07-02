import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const hc = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const hs = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:6500/api/auth/register', form);
      alert('Registration Successful');
    } catch (error) {
      alert('Registration Failed');
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: 'linear-gradient(to right, #00c6ff, #0072ff)',
        fontFamily: "'Segoe UI', sans-serif"
      }}
    >
      <form
        onSubmit={hs}
        className="p-5 shadow-lg"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          color: '#fff',
          width: '100%',
          maxWidth: '400px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        <h2 className="text-center mb-4">Create Account</h2>

        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={hc}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={hc}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={hc}
            required
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-light btn-block mt-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
