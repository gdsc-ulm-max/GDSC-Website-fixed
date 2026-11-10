import React from "react";
import { Link } from "react-router-dom";
import "./AnnouncementBar.css";

function AnnouncementBar() {
  return (
    <div className="announcement-container">
      <div className="announcement-bar">
        <div className="announcement-content">
          <span className="announcement-text">
            TechXpo 2026 is here — Vote &amp; Learn More!
          </span>
                    <Link to="/techxpo-2026" className="announcement-link">
            Learn More →
          </Link>

        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
