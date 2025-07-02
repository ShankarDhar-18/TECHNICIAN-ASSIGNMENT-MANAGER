import React, { useState } from 'react';
import axios from 'axios';

const BookTechnician = () => {
  const [form, setForm] = useState({
    name: '',
    technicianType: '',
    location: '',
    phone: '',
    wp: '',
    address: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = localStorage.getItem('user');
    if (!user) {
      alert('⚠️ Please login to book a technician.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:6500/api/bookings', form);
      if (response.status === 200 || response.status === 201) {
        alert('✅ Booking successful!');
        setForm({
          name: '',
          technicianType: '',
          location: '',
          phone: '',
          wp: '',
          address: '',
        });
      }
    } catch (err) {
      console.error(err);
      alert('❌ Error booking technician. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>📅 Book a Technician</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="name"
          value={form.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          name="technicianType"
          value={form.technicianType}
          placeholder="Technician Type (e.g., Electrician, AC)"
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          name="location"
          value={form.location}
          placeholder="Location"
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          name="phone"
          value={form.phone}
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          name="wp"
          value={form.wp}
          placeholder="WhatsApp Number"
          onChange={handleChange}
          required
        />
        <textarea
          className="form-control mb-3"
          name="address"
          value={form.address}
          placeholder="Full Address"
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-success w-100">✅ Submit Booking</button>
      </form>
    </div>
  );
};

export default BookTechnician;
