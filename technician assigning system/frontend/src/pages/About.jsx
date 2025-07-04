import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ceoImg from "../assets/ceo.jpg";
import mdImg from "../assets/md.jpg";
import cmoImg from "../assets/cmo.jpg";
import accountantImg from "../assets/accountant.jpg";

const About = () => {
  const team = [
    {
      name: "Shankar Kumar Dhar",
      title: "CEO & Owner",
      image: ceoImg,
      description:
        "Founder of the platform, visionary leader with deep technical expertise and strong leadership. Manages overall strategy and growth.",
    },
    {
      name: "Somnath Ghosh",
      title: "Managing Director (under CEO)",
      image: mdImg,
      description:
        "Oversees daily operations and team coordination. Ensures smooth functioning across departments and project execution.",
    },
    {
      name: "Arpita Bhowmick",
      title: "CMO, Project Manager & HR",
      image: cmoImg,
      description:
        "Handles project planning, team management, and marketing strategies. Also responsible for HR and internal culture.",
    },
  ];

  const additionalMember = {
    name: "Vivek Shaw",
    title: "Senior Accountant & Financial Analyst",
    image: accountantImg,
    description:
      "Responsible for financial oversight and strategic contributions as a member of the board. Maintains financial records and audits.",
  };

  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(to right, #f0f4f8, #ffffff)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div className="container">
        <h1 className="text-center mb-5 display-5 fw-bold text-primary">
          Meet Our Leadership
        </h1>

        {/* First Row - Main 3 Members */}
        <div className="row justify-content-center">
          {team.map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card h-100 shadow-sm"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "none",
                }}
              >
                <img
                  src={member.image}
                  className="card-img-top"
                  alt={member.name}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h4 className="card-title text-dark">{member.name}</h4>
                  <h6 className="text-secondary">{member.title}</h6>
                  <p className="card-text mt-2 text-muted">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Vivek Shaw */}
        <div className="row justify-content-center mt-4">
          <div className="col-md-4">
            <div
              className="card h-100 shadow-sm"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "none",
              }}
            >
              <img
                src={additionalMember.image}
                className="card-img-top"
                alt={additionalMember.name}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h4 className="card-title text-dark">
                  {additionalMember.name}
                </h4>
                <h6 className="text-secondary">{additionalMember.title}</h6>
                <p className="card-text mt-2 text-muted">
                  {additionalMember.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
