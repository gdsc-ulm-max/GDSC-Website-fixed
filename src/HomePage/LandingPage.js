import React from "react";
import "./LandingPage.css";
import Animation from "./Animation";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <Animation />
      <div className="content">
        <div className="hero-section">
          <h1 className="title">
            <span className="google-blue">Google</span>{" "}
            <span className="google-red">Developer</span>{" "}
            <span className="google-yellow">Student</span>{" "}
            <span className="google-green">Club</span>
          </h1>
          <h2 className="subtitle">
            <a
              href="https://maps.app.goo.gl/pPykTzSy8PSxARH68"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              University of Louisiana Monroe
              <svg className="location-icon" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </a>
          </h2>
          <p className="description">
            Empowering students to grow as developers, leaders, and innovators
            through technology and community.
          </p>
          <div className="cta-buttons">
            <Link to={"join"} className="cta-button primary">
              <span className="button-text">Join GDSC ULM</span>
              <svg className="button-icon" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </Link>
            <Link to={"events"} className="cta-button secondary">
              <span className="button-text">Events</span>
              <svg className="button-icon calendar" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat">
            <h3 className="stat-number">200+</h3>
            <p className="stat-label">Student Members</p>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <h3 className="stat-number">15+</h3>
            <p className="stat-label">Tech Events</p>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <h3 className="stat-number">5+</h3>
            <p class="stat-label">Workshop Series</p>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </div>
  );
}

export default LandingPage;
