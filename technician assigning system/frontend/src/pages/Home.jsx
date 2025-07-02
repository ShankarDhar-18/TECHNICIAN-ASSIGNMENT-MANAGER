import React from 'react';
import Carouselslider from '../components/Carouselslider';
import Cardlist from '../components/Cardlist';
import SparePartCard from '../components/SparePartCard';
import Datatable from '../components/Datatable';
import citydata from '../data/citydata';
import spareParts from '../data/spareParts';

const Home = () => {
  const sectionStyle = {
    background: 'rgba(255, 255, 255, 0.06)',
    backdropFilter: 'blur(12px)',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
    padding: '40px 30px',
    marginBottom: '60px',
  };

  const headingStyle = {
    fontWeight: '800',
    fontSize: '2.8rem',
    textShadow: '1px 1px 2px #000',
  };

  const subTextStyle = {
    fontSize: '18px',
    color: '#ccc',
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        minHeight: '100vh',
        paddingTop: '20px',
        fontFamily: "'Segoe UI', sans-serif",
        color: '#fff',
      }}
    >
      {/* Carousel */}
      <Carouselslider />

      {/* Technician Zone */}
      <div className="container" style={sectionStyle}>
        <h2 className="text-center mb-4" style={headingStyle}>
          🔧 Technician Zone
        </h2>
        <p className="text-center mb-4" style={subTextStyle}>
          Find trusted professionals near you
        </p>
        <Cardlist data={citydata} />
      </div>

      {/* Spare Parts Section */}
      <div className="container" style={sectionStyle}>
        <h2 className="text-center mb-4" style={headingStyle}>
          🛠️ Spare Parts Store
        </h2>
        <p className="text-center mb-4" style={subTextStyle}>
          Browse and order essential parts for your repairs
        </p>
        <div className="row">
          {spareParts.map((part) => (
            <div className="col-md-4 mb-4" key={part.id}>
              <SparePartCard part={part} />
            </div>
          ))}
        </div>
      </div>

      {/* Technician Availability (Moved to Bottom) */}
      <div className="container" style={sectionStyle}>
        <h2 className="text-center mb-4" style={headingStyle}>
          📊 Availability Status
        </h2>
        <p className="text-center mb-4" style={subTextStyle}>
          Real-time data of technician availability
        </p>
        <Datatable data={citydata} />
      </div>
    </div>
  );
};

export default Home;
