import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Hawkathon2026.css';
import hawkathonLogo from '../assets/hawkathon.jpeg';

const Hawkathon2026 = ({ seo }) => {
  return (
    <div className="hawkathon2026-container">
      <Helmet>
        <title>{seo?.title || 'Hawkathon 2026 | GDSC ULM'}</title>
        <meta name="description" content={seo?.description || "Hawkathon 2026 — ULM's premier hackathon event. Stay tuned for announcements."} />
      </Helmet>

      <div className="hawkathon2026-content">
        <div className="hawkathon2026-badge">GDSC ULM Presents</div>

        <img src={hawkathonLogo} alt="Hawkathon Logo" className="hawkathon2026-logo" />

        <h1 className="hawkathon2026-title">Hawkathon 2026</h1>
        <p className="hawkathon2026-subtitle">ULM's Premier Hackathon Event</p>

        <div className="hawkathon2026-announcement">
          <span className="announcement-icon">📣</span>
          <h2 className="announcement-heading">Announcement Coming Soon</h2>
          <div className="announcement-divider" />
          <p className="announcement-text">
            We're gearing up for another exciting edition of Hawkathon! Details on dates, theme, prizes, and registration will be announced shortly. Stay connected with GDSC ULM for all the latest updates.
          </p>
          <div className="announcement-tags">
            <span className="announcement-tag">Hackathon</span>
            <span className="announcement-tag">Innovation</span>
            <span className="announcement-tag">AI & Tech</span>
            <span className="announcement-tag">ULM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hawkathon2026;
