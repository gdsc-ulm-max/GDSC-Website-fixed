import React from "react";
import { Link } from "react-router-dom";
import "./AnnouncementBar.css";

function AnnouncementBar() {
  return (
    <div className="announcement-container">
      <div className="announcement-bar">
        <div className="announcement-content">
          <span className="announcement-text">
            🚀 Next Up! TechXpo 2025
          </span>
          <span className="announcement-date">November 21</span>
          {/**
           * <Link to="/techXpo" className="announcement-link">
            Learn More →
          </Link>
           */}
          
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
