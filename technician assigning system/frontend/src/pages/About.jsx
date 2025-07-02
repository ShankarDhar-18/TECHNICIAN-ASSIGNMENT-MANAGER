import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ceoImg from '../assets/ceo.jpg';         // Add your image in src/assets
import mdImg from '../assets/md.jpg';
import cmoImg from '../assets/cmo.jpg';

const About = () => {
  const team = [
    {
      name: 'Shankar Kumar Dhar',
      title: 'CEO & Owner',
      image: ceoImg,
      description:
        'Founder of the platform, visionary leader with deep technical expertise and strong leadership. Manages overall strategy and growth.',
    },
    {
      name: 'Somnath Ghosh',
      title: 'Managing Director (under CEO)',
      image: mdImg,
      description:
        'Oversees daily operations and team coordination. Ensures smooth functioning across departments and project execution.',
    },
    {
      name: 'Arpita Bhowmick',
      title: 'CMO, Project Manager & HR',
      image: cmoImg,
      description:
        'Handles project planning, team management, and marketing strategies. Also responsible for HR and internal culture.',
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 display-4 fw-bold text-primary">Meet Our Leadership</h1>
      <div className="row justify-content-center">
        {team.map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card shadow-lg h-100"
              style={{
                borderRadius: '15px',
                overflow: 'hidden',
              }}
            >
              <img
                src={member.image}
                className="card-img-top"
                alt={member.name}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h4 className="card-title">{member.name}</h4>
                <h6 className="text-muted">{member.title}</h6>
                <p className="card-text mt-2">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
