import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-white pt-4 pb-2"
      style={{
        background: 'linear-gradient(to right, #141e30, #243b55)',
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-left">
          {/* Column 1: Brand */}
          <div className="col-md-4 mb-4">
            <h5 className="font-weight-bold">
              <i className="fas fa-tools mr-2"></i>SD Technician System
            </h5>
            <p>
              Reliable platform to assign, manage, and track professional technicians across cities.
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div className="col-md-4 mb-4">
            <h5 className="font-weight-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/dashboard" className="text-white">Dashboard</a></li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div className="col-md-4 mb-4">
            <h5 className="font-weight-bold">Connect With Us</h5>
            <a href="#" className="text-white mr-3">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-white mr-3">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-white mr-3">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>
        <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <div className="text-center">
          <small>&copy; {new Date().getFullYear()} SD Technician System. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
