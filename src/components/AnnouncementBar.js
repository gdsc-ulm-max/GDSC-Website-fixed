import React from "react";
import { Link } from "react-router-dom";
import "./AnnouncementBar.css";

function AnnouncementBar() {
  return (
    <div className="announcement-container">
      <div className="announcement-bar">
        <div className="announcement-content">
          <span className="announcement-text">
            🚀 Next Up! Hawkathon 2025
          </span>
          <span className="announcement-date">April 11 - April 13</span>
          <Link to="/hawkathon" className="announcement-link">
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
