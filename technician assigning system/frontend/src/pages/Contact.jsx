import React, { useState } from 'react';
import TechnicianForm from './CityForm';  // renamed from Cityform
import TechnicianList from './CityList';  // renamed from Citylist

const Contact = () => {
  const [phone, setPhone] = useState('');

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return alert("Please enter a valid phone number.");
    alert(`Technician phone number submitted: ${phone}`);
    setPhone('');
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="display-4 font-weight-bold text-primary">🛠️ Register a Technician</h2>
        <p className="lead text-muted">Provide technician contact details and manage your technician list.</p>
      </div>

      {/* Contact Number Form */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h5 className="mb-3 text-center text-info">📞 Technician Contact Number</h5>
            <form onSubmit={handlePhoneSubmit}>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter technician phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success btn-block">
                Save Contact Number
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Technician Form */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-4">
            <TechnicianForm />
          </div>
        </div>
      </div>

      <hr className="my-5" />

      {/* Technician List */}
      <div className="text-center mb-4">
        <h3 className="font-weight-bold text-success">👷 Technician List</h3>
        <p className="text-muted">View and manage all available technicians below.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <TechnicianList />
        </div>
      </div>
    </div>
  );
};

export default Contact;
