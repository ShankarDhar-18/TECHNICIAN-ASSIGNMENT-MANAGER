import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cardlist = ({ data }) => {
  const navigate = useNavigate();
  const uniqueTypes = [...new Set(data.map((tech) => tech.type))];

  return (
    <div className="row">
      {uniqueTypes.map((type, index) => {
        const tech = data.find((t) => t.type === type);
        return (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100">
              <img src={tech.image} className="card-img-top" alt={tech.type} />
              <div className="card-body">
                <h5 className="card-title">{tech.type}</h5>
                <p className="card-text">{tech.desc}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => navigate(`/technician/${encodeURIComponent(type)}`)}
                >
                  View Technician
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cardlist;
