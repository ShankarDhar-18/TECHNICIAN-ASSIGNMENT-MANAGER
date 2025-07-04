import React from 'react';
import TechnicianForm from './CityForm';  // This is your updated form
import TechnicianList from './CityList';  // Shows technician cards/list

const Contact = () => {
  return (
    <div className="container my-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h2 className="display-4 font-weight-bold text-primary">🛠️ Register a Technician</h2>
        <p className="lead text-muted">
          Technicians can register by submitting their name, contact, experience, department, and photo.
        </p>
      </div>

      {/* Technician Registration Form */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="card shadow-lg p-4">
            <TechnicianForm />
          </div>
        </div>
      </div>

      {/* Technician List */}
      <hr className="my-5" />
      <div className="text-center mb-4">
        <h3 className="font-weight-bold text-success">👷 Technician List</h3>
        <p className="text-muted">View and manage all registered technicians below.</p>
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
