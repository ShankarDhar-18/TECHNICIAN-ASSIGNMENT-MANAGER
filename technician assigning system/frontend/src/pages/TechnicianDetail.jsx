import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import citydata from '../data/citydata';

const TechnicianDetail = () => {
  const { type } = useParams();
  const decodedType = decodeURIComponent(type);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter by selected type (Electrician, AC, etc.)
  const filteredByType = citydata.filter((x) => x.type === decodedType);

  // Further filter by search input (case insensitive)
  const filtered = filteredByType.filter((tech) =>
    tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tech.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{decodedType} Technicians</h2>

      {/* ✅ Search Bar */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="🔍 Search by name or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filtered.length === 0 ? (
        <h4 className="text-center text-danger">No Technicians Found</h4>
      ) : (
        <div className="row">
          {filtered.map((tech) => (
            <div className="col-md-4 mb-4" key={tech.id}>
              <div className="card h-100">
                <img src={tech.image} className="card-img-top" alt={tech.name} />
                <div className="card-body">
                  <h5 className="card-title">{tech.name}</h5>
                  <p className="card-text">{tech.desc}</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">ID: {tech.id}</li>
                    <li className="list-group-item">Location: {tech.location}</li>
                    <li className="list-group-item">Experience: {tech.experience} years</li>
                    <li className="list-group-item">Rating: ⭐ {tech.rating}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TechnicianDetail;
