import React from "react";
import { Helmet } from "react-helmet-async";
import "./TechXpo2025.css";

const techXpoData = {
  edition: "1st Annual",
  year: "2025",
  theme: {
    title: "Innovation Showcase",
    subtitle: "Celebrating Student Innovation",
    description: "Join us for a day of innovation, learning, and networking",
  },
  eventDate: "TBA",
  timeline: [
    {
      time: "9:00 AM - 11:00 AM",
      title: "Product Showcase & Exhibition (Part 1)",
      description: "Students present their projects to judges and attendees.",
      icon: "rocket_launch",
      color: "#4285F4",
    },
    {
      time: "11:00 AM - 11:30 AM",
      title: '"Talk with an Intern" Panel Session',
      description: "An interactive Q&A session focused on internships and early-career development.",
      icon: "forum",
      color: "#DB4437",
    },
    {
      time: "12:00 PM - 1:15 PM",
      title: "Product Showcase & Exhibition (Part 2)",
      description: "Continued project demonstrations, audience voting, and final evaluations by judges.",
      icon: "how_to_vote",
      color: "#F4B400",
    },
    {
      time: "1:30 PM - 2:30 PM",
      title: "Award Ceremony & Winner Announcement",
      description: "The culmination of the event, where top projects are recognized and awarded.",
      icon: "emoji_events",
      color: "#0F9D58",
    },
    {
      time: "2:30 PM",
      title: "Event Concludes",
      description: "Thank you for joining us!",
      icon: "celebration",
      color: "#4285F4",
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
};

function TechXpo2025({ seo }) {
  return (
    <div className="techxpo-page">
      <Helmet>
        <title>{seo?.title || "TechXpo 2025 - GDSC ULM"}</title>
        <meta name="description" content={seo?.description || "Join us for TechXpo 2025 - A showcase of student innovation and technology"} />
        <meta property="og:title" content={seo?.title || "TechXpo 2025 - GDSC ULM"} />
        <meta property="og:description" content={seo?.description || "Join us for TechXpo 2025 - A showcase of student innovation and technology"} />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="gdsc-badge">
              <span>GDSC ULM</span>
            </div>
            <h1>
              <span className="google-gradient">{techXpoData.edition}</span>
              <span className="title">TechXpo</span>
              <span className="year">{techXpoData.year}</span>
            </h1>
            <p className="theme">{techXpoData.theme.title}</p>
            <p className="subtitle">{techXpoData.theme.subtitle}</p>
            <p className="description">{techXpoData.theme.description}</p>
            <p className="event-date">
              <span className="material-icons">event</span>
              {techXpoData.eventDate}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2>Event Timeline</h2>
          <div className="timeline">
            {techXpoData.timeline.map((event, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-marker" style={{ backgroundColor: event.color }}>
                  <span className="material-icons">{event.icon}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-time">{event.time}</div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <h2>Event Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <span className="material-icons">science</span>
              <h3>Innovation</h3>
              <p>Discover cutting-edge student projects and innovations</p>
            </div>
            <div className="highlight-card">
              <span className="material-icons">groups</span>
              <h3>Networking</h3>
              <p>Connect with fellow students, faculty, and industry professionals</p>
            </div>
            <div className="highlight-card">
              <span className="material-icons">school</span>
              <h3>Learning</h3>
              <p>Gain insights from the "Talk with an Intern" panel session</p>
            </div>
            <div className="highlight-card">
              <span className="material-icons">emoji_events</span>
              <h3>Recognition</h3>
              <p>Celebrate outstanding projects at the award ceremony</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2>Stay Connected</h2>
          <div className="contact-info">
            <p>For more information, reach out to us:</p>
            <a href={`mailto:${techXpoData.contact.email}`} className="contact-email">
              <span className="material-icons">email</span>
              {techXpoData.contact.email}
            </a>
            <div className="social-links">
              <a href={techXpoData.contact.social.instagram} target="_blank" rel="noopener noreferrer">
                <span className="material-icons">camera_alt</span>
              </a>
              <a href={techXpoData.contact.social.linkedin} target="_blank" rel="noopener noreferrer">
                <span className="material-icons">business</span>
              </a>
              <a href={techXpoData.contact.social.github} target="_blank" rel="noopener noreferrer">
                <span className="material-icons">code</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechXpo2025;
