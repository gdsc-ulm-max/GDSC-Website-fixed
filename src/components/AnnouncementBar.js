import React from "react";
import { Link } from "react-router-dom";
import "./AnnouncementBar.css";

function AnnouncementBar() {
  return (
    <div className="announcement-container">
      <div className="announcement-bar">
        <div className="announcement-content">
          <span className="announcement-text">
            🚀 Hawkathon 2025 Registration Open
          </span>
          <span className="announcement-date">Feb 26 - March 26</span>
          <Link to="/events/hawkathon" className="announcement-link">
            Register Now →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
