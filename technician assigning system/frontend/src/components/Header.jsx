import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [query, setQuery] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow px-4"
      style={{
        background: 'linear-gradient(90deg, #1e3c72, #2a5298)',
        color: '#fff',
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <Link className="navbar-brand text-white font-weight-bold" to="/" style={{ fontSize: '1.5rem' }}>
        <i className="fas fa-tools mr-2"></i>TechAssign
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          {!token ? (
            <>
              <li className="nav-item">
                <Link to="/register" className="nav-link text-white">
                  <i className="fas fa-user-plus"></i> Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-white">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link text-white">
                  <i className="fas fa-tachometer-alt"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/home" className="nav-link text-white">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white">
                  <i className="fas fa-info-circle"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white">
                  <i className="fas fa-envelope"></i> Contact
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-sm btn-outline-light ml-3">
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </li>
            </>
          )}
        </ul>

        {/* ✅ Search Form */}
        <form className="form-inline ml-lg-4 mt-2 mt-lg-0" onSubmit={handleSearch}>
          <input
            className="form-control form-control-sm mr-sm-2"
            type="search"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button className="btn btn-success btn-sm" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
