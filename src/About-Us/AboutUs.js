// AboutUs.js
import React from "react";
import "./AboutUs.css"; // Import the CSS file

const teamMembers = [
  {
    name: "Yaaghnetha K",
    enrollmentno:"LIT2023034"
  },
  {
    name: "Pranay B",
    enrollmentno:"LIT2023027"
  },
  {
    name: "Srinidhi K",
    enrollmentno:"LCS2023027"
  },
  {
    name: "Vaibhav R",
    enrollmentno:"LCS2023033"
  },
  {
    name: "Sanya G",
    enrollmentno:"LCS2023006"
  }
];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-description">
        We are a team of dedicated professionals committed to delivering
        top-notch services.
      </p>
      <div className="team-members-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <h2 className="team-member-name">{member.name}</h2>
            <h3 className="team-member-role">{member.enrollmentno}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
