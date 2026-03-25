import React from "react";
import { Link } from "react-router-dom";
import "./AnnouncementBar.css";

function AnnouncementBar() {
  return (
    <div className="announcement-container">
      <div className="announcement-bar">
        <div className="announcement-content">
          <span className="announcement-text">
            🦅 Hawkathon 2026 is here — Register Now!
          </span>
          <span className="announcement-date">April 17 – 19</span>
          <Link to="/hawkathon-2026" className="announcement-link">
            Learn More →
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
