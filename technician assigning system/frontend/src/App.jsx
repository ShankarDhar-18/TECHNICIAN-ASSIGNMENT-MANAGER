import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TechnicianDetail from './pages/TechnicianDetail';
import Cart from './pages/Cart';
import AdminDashboard from './pages/AdminDashboard';
import BookTechnician from './pages/BookTechnician';
import SearchResults from './pages/SearchResults'; // ✅ Added

import PrivateRoute from './utils/PrivateRoute';
import { CartProvider } from './context/CartContext.jsx';

import citydata from './data/citydata';

const AppContent = () => {
  const [, setSearchTerm] = useState('');
  const location = useLocation();

  const hideFooterRoutes = ['/', '/login', '/register'];
  const showFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-3">
        <Link to="/home" className="navbar-brand text-white">Technician System</Link>
        <div>
          <Link to="/book-technician" className="btn btn-outline-light me-2">Book Technician</Link>
          <Link to="/cart" className="btn btn-outline-light">Cart</Link>
        </div>
      </nav>

      <Header onSearch={setSearchTerm} />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search/:query" element={<SearchResults />} /> {/* ✅ Search Route */}

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home data={citydata} />} />
          <Route path="/about" element={<About name="raj" city="kolkata" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technician/:type" element={<TechnicianDetail data={citydata} />} />
          <Route path="/book-technician" element={<BookTechnician />} />
        </Route>

        {/* Cart Route */}
        <Route path="/cart" element={<Cart />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            localStorage.getItem('isAdmin') === 'true' ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
};

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </CartProvider>
);

export default App;
