import React from "react";
import { Helmet } from "react-helmet-async";
import hawkathonLogo from "../assets/hawkathon.jpeg";
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
  registration: {
    fee: "$10 per team",
    teamSize: "2-4 members",
    deadline: "March 26, 2025",
    selection: "First-come, first-served (limited slots)",
    eligibility:
      "Each team must include at least one freshman or sophomore member",
  },
};

function Hawkthon({ seo }) {
  return (
    <div className="hawkathon-page">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>

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
                Teams of 2-4
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

      {/* Add Registration Info Section */}
      <section className="registration-info">
        <div className="container">
          <h2>Registration Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <span className="material-icons">paid</span>
              <h3>Team Fee</h3>
              <p>{hawkathonData.registration.fee}</p>
              <small>(non-refundable)</small>
            </div>
            <div className="info-card">
              <span className="material-icons">groups</span>
              <h3>Team Size</h3>
              <p>{hawkathonData.registration.teamSize}</p>
            </div>
            <div className="info-card">
              <span className="material-icons">event</span>
              <h3>Deadline</h3>
              <p>{hawkathonData.registration.deadline}</p>
            </div>
            <div className="info-card">
              <span className="material-icons">how_to_reg</span>
              <h3>Selection</h3>
              <p>{hawkathonData.registration.selection}</p>
            </div>
          </div>

          <div className="important-notice">
            <h3>
              <span className="material-icons">priority_high</span>
              Important Information
            </h3>
            <p>
              <strong>Eligibility Requirement:</strong>{" "}
              {hawkathonData.registration.eligibility}
            </p>
            <div className="team-finding">
              <p>
                <strong>Looking for teammates?</strong> If you don't have a full
                team yet,
              </p>
              <a href={hawkathonData.links.findTeam} className="find-team-link">
                <span className="material-icons">group_add</span>
                Find teammates here
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hawkthon;
