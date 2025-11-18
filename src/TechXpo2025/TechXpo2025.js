import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import techXpoLogo from "../assets/techxpo.png";
import "./TechXpo2025.css";
import VotingModal from "./VotingModal";
import AdminPanel from "./AdminPanel";
import { getProjects } from "../services/votingService";

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
      title: '"Skills for Your First Job" Session',
      description: "Keynote address by Chief Operation Officer from Kinetix Solutions.",
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
  const [votingModalOpen, setVotingModalOpen] = useState(false);
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  // Fetch projects on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoadingProjects(true);
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoadingProjects(false);
    }
  };

  const handleVoteClick = () => {
    setVotingModalOpen(true);
  };

  const handleAdminClick = () => {
    if (isAdmin) {
      setAdminPanelOpen(true);
    } else {
      setShowPasswordPrompt(true);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (adminPassword === process.env.REACT_APP_ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowPasswordPrompt(false);
      setAdminPanelOpen(true);
      setAdminPassword("");
    } else {
      alert("Incorrect password");
      setAdminPassword("");
    }
  };

  return (
    <div className="techxpo-page">
      <Helmet>
        <title>{seo?.title || "TechXpo 2025 - GDSC ULM"}</title>
        <meta name="description" content={seo?.description || "Join us for TechXpo 2025 - A showcase of student innovation and technology"} />
        <meta property="og:title" content={seo?.title || "TechXpo 2025 - GDSC ULM"} />
        <meta property="og:description" content={seo?.description || "Join us for TechXpo 2025 - A showcase of student innovation and technology"} />
      </Helmet>

      {/* Title Above Card */}
      <div className="page-title">
        <h1>
          <span className="gdsc-text">GDSC</span>
          <span className="ulm-text">ULM</span>
          <span className="techxpo-text">TechXpo</span>
          <span className="year">{techXpoData.year}</span>
        </h1>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="techxpo-logo-wrapper">
            <img src={techXpoLogo} alt="TechXpo 2025 Logo" className="techxpo-logo" />
          </div>
          <div className="hero-text">
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
              <p>Gain insights from "Skills for Your First Job" session with Kinetix Solutions COO</p>
            </div>
            <div className="highlight-card">
              <span className="material-icons">emoji_events</span>
              <h3>Recognition</h3>
              <p>Celebrate outstanding projects at the award ceremony</p>
            </div>
          </div>
        </div>
      </section>

      {/* Voting Section */}
      <section className="voting-section">
        <div className="container">
          <div className="voting-header">
            <svg className="trophy-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 28C27.866 28 31 24.866 31 21V10H17V21C17 24.866 20.134 28 24 28Z" fill="#4285F4"/>
              <path d="M31 10H35C36.6569 10 38 11.3431 38 13V15C38 16.6569 36.6569 18 35 18H31" stroke="#4285F4" strokeWidth="3" strokeLinecap="round"/>
              <path d="M17 10H13C11.3431 10 10 11.3431 10 13V15C10 16.6569 11.3431 18 13 18H17" stroke="#4285F4" strokeWidth="3" strokeLinecap="round"/>
              <path d="M24 28V34" stroke="#4285F4" strokeWidth="3" strokeLinecap="round"/>
              <rect x="16" y="34" width="16" height="3" rx="1.5" fill="#4285F4"/>
              <rect x="14" y="38" width="20" height="3" rx="1.5" fill="#4285F4"/>
            </svg>
            <h2>Vote for Your Favorite Project</h2>
          </div>
          <button onClick={handleVoteClick} className="vote-btn">
            Vote Now
          </button>
        </div>
      </section>

      {/* Voting Modal */}
      <VotingModal 
        isOpen={votingModalOpen} 
        onClose={() => setVotingModalOpen(false)} 
      />

      {/* Admin Panel */}
      <AdminPanel 
        isOpen={adminPanelOpen} 
        onClose={() => setAdminPanelOpen(false)} 
      />

      {/* Admin Password Prompt */}
      {showPasswordPrompt && (
        <div className="password-prompt-overlay" onClick={() => setShowPasswordPrompt(false)}>
          <div className="password-prompt-content" onClick={(e) => e.stopPropagation()}>
            <button className="password-prompt-close" onClick={() => setShowPasswordPrompt(false)}>×</button>
            <h3>Admin Access</h3>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Enter admin password"
                autoFocus
              />
              <button type="submit">Access Admin Panel</button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Admin Button */}
      <button className="floating-admin-btn" onClick={handleAdminClick} title="Admin Panel">
        <span className="material-icons">{isAdmin ? 'admin_panel_settings' : 'lock'}</span>
      </button>
    </div>
  );
}

export default TechXpo2025;
