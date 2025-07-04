import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Citylist = () => {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const fetchTechnicians = async () => {
      try {
        const res = await axios.get('http://localhost:6500/api/technicians');
        setTechnicians(res.data);
      } catch (err) {
        console.error('Error fetching technicians:', err);
      }
    };

    fetchTechnicians();
  }, []);

  return (
    <div className='container-fluid'>
      <h3 className='mb-4 text-center text-primary'>All Registered Technicians</h3>
      <div className='row'>
        {technicians.map((tech) => (
          <div className='col-md-4 mb-4' key={tech._id}>
            <div className='card h-100 shadow-sm'>
              <img
                src={`http://localhost:6500/uploads/${tech.image}`}
                alt={tech.name}
                className='card-img-top'
                style={{ objectFit: 'cover', height: '250px' }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{tech.name}</h5>
                <p className='card-text'>
                  <strong>Department:</strong> {tech.department}<br />
                  <strong>Experience:</strong> {tech.experience} years<br />
                  <strong>Phone:</strong> {tech.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Citylist;
