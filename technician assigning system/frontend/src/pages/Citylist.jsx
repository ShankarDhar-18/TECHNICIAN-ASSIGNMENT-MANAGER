import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Citylist = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await axios.get('http://localhost:6500/api/zones');
        setCities(res.data);
      } catch (err) {
        console.error('Error fetching cities:', err);
      }
    };

    fetchCities();
  }, []);

  return (
    <div className='container-fluid'>
      <h3 className='mb-3'>Technician Assigning</h3>
      <div className='row'>
        {cities.map((zone) => (
          <div className='col-md-3 mb-4' key={zone._id}>
            <div className='card h-100 shadow-sm'>
              <img
                src={`http://localhost:6500/uploads${zone.image}`}
                alt={zone.title}
                className='card-img-top'
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{zone.title}</h5>
                <p className='card-text'>{zone.desc}</p>
                <span className='badge bg-dark'>{zone.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Citylist;
