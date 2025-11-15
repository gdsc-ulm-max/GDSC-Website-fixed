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
  eventDate: "November 21, 2025",
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
            <h1>
              <div className="title-line">
                <span className="gdsc-text">GDSC</span>
                <span className="ulm-text">ULM</span>
                <span className="techxpo-text">TechXpo</span>
              </div>
              <span className="year">{techXpoData.year}</span>
            </h1>
            <p className="theme">{techXpoData.theme.title}</p>
            <p className="subtitle">{techXpoData.theme.subtitle}</p>
            <p className="description">{techXpoData.theme.description}</p>
            <div className="event-date-wrapper">
              <p className="event-date">
                <span className="material-icons">event</span>
                {techXpoData.eventDate}
              </p>
            </div>
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
      <section className="voting-section">
        <div className="container">
          <h2>Vote for Your Favorite Project</h2>
          <div className="voting-info">
            <p>Support the projects you love! Cast your vote and help recognize outstanding student innovation.</p>
            <p className="voting-note">Voting will be available during the event.</p>
            <a href="#vote" className="vote-btn">
              <span className="material-icons">how_to_vote</span>
              Vote Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechXpo2025;
