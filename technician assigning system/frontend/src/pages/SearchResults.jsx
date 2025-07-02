// src/pages/SearchResults.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import citydata from '../data/citydata';

const SearchResults = () => {
  const { query } = useParams();
  const searchTerm = decodeURIComponent(query).toLowerCase();

  // 🔍 Filter technician data
  const results = citydata.filter((tech) =>
    tech.name.toLowerCase().includes(searchTerm) ||
    tech.type.toLowerCase().includes(searchTerm) ||
    tech.location.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        🔍 Search Results for "<span className="text-primary">{searchTerm}</span>"
      </h2>

      {results.length === 0 ? (
        <h4 className="text-center text-danger">No technicians found.</h4>
      ) : (
        <div className="row">
          {results.map((tech) => (
            <div className="col-md-4 mb-4" key={tech.id}>
              <div className="card h-100 shadow-sm">
                <img src={tech.image} className="card-img-top" alt={tech.name} />
                <div className="card-body">
                  <h5 className="card-title">{tech.name}</h5>
                  <p className="card-text">{tech.desc}</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Type: {tech.type}</li>
                    <li className="list-group-item">Location: {tech.location}</li>
                    <li className="list-group-item">Experience: {tech.experience} years</li>
                    <li className="list-group-item">Rating: ⭐ {tech.rating}</li>
                  </ul>
                  <Link to={`/view/${encodeURIComponent(tech.type)}`} className="btn btn-outline-primary mt-3 w-100">
                    View Technicians
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
