import React from "react";
import hawkathonLogo from "../assets/hawkathon.jpeg"; // Add this import
import "./Hawkthon2025.css";

const hawkathonData = {
  edition: "2nd Annual",
  year: "2025",
  theme: {
    title: "Theme:TBD",
    subtitle: "Build with AI",
    description: "Join us in leveraging AI to create solutions that matter",
  },
  status: {
    phase: "REGISTRATION",
    dates: {
      registration: {
        start: "February 26, 2025",
        end: "March 26, 2025",
      },
    },
    fee: "$10 per team",
  },
  tracks: [
    {
      name: "Education",
      icon: "school",
      color: "#4285F4",
      description: "Reimagine learning with AI",
    },
    {
      name: "Healthcare",
      icon: "health_and_safety",
      color: "#DB4437",
      description: "Transform healthcare accessibility",
    },
    {
      name: "Sustainability",
      icon: "eco",
      color: "#0F9D58",
      description: "Build for a sustainable future",
    },
    {
      name: "Community",
      icon: "diversity_3",
      color: "#F4B400",
      description: "Create inclusive solutions",
    },
  ],
  contact: {
    email: "gdsculm@gmail.com",
    social: {
      instagram: "https://instagram.com/gdsc_ulm",
      linkedin: "https://linkedin.com/company/gdsc-ulm",
      github: "https://github.com/gdsc-ulm",
    },
  },
  links: {
    register:
      "https://webservices.ulm.edu/webforms/form/hawkathon-registration",
    findTeam: "https://gdsc-ulm.github.io/Pair_request_form/",
    sponsor: "https://forms.gle/sponsor",
  },
};

function Hawkthon() {
  return (
    <div className="hawkathon-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Add Logo Section */}
          <div className="hawkathon-logo">
            <img src={hawkathonLogo} alt="Hawkathon Logo" />
          </div>

          <div className="hero-text">
            <div className="gdsc-badge">
              <span>GDSC</span>
              <span>×</span>
              <span>ACM</span>
            </div>
            <h1>
              <span className="google-gradient">{hawkathonData.edition}</span>
              <span className="title">Hawkathon</span>
              <span className="year">{hawkathonData.year}</span>
            </h1>
            <p className="theme">{hawkathonData.theme.title}</p>
            <p className="subtitle">{hawkathonData.theme.subtitle}</p>
          </div>

          <div className="registration-card">
            <div className="status-badge-registration">
              <span className="pulse"></span>
              <span className="material-icons">event_available</span>
              Registration Open
            </div>
            <div className="dates">
              <span className="material-icons">calendar_today</span>
              {hawkathonData.status.dates.registration.start} -{" "}
              {hawkathonData.status.dates.registration.end}
            </div>
            <div className="details">
              <span className="team">
                <span className="material-icons">groups</span>
                Teams of 1-4
              </span>
              <span className="dot">•</span>
              <span className="fee">
                <span className="material-icons">paid</span>
                {hawkathonData.status.fee}
              </span>
            </div>
            <div className="cta-buttons">
              <a
                href={hawkathonData.links.register}
                className="register-btn primary"
              >
                <span className="material-icons">how_to_reg</span>
                Register Now
              </a>
              <a
                href={hawkathonData.links.findTeam}
                className="register-btn secondary"
              >
                <span className="material-icons">group_add</span>
                Find Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hawkthon;
