import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Hawkathon2026.css';
import hawkathonLogo from '../assets/hawkathon.jpeg';

const Hawkathon2026 = ({ seo }) => {
  return (
    <div className="h26-page">
      <Helmet>
        <title>{seo?.title || 'Hawkathon 2026 | GDSC ULM'}</title>
        <meta
          name="description"
          content={seo?.description || "Hawkathon 2026 — ULM's premier hackathon. Stay tuned for announcements."}
        />
      </Helmet>

      <div className="h26-card">
        <img src={hawkathonLogo} alt="Hawkathon" className="h26-logo" />

        <div className="h26-label">
          <span className="h26-label-dot" />
          GDSC ULM Presents
        </div>

        <h1 className="h26-title">
          <span className="h26-title-accent">Hawkathon</span> 2026
        </h1>
        <p className="h26-org">University of Louisiana Monroe</p>

        <div className="h26-divider" />

        <div className="h26-announcement">
          <div className="h26-announcement-icon">
            <span className="material-icons">campaign</span>
          </div>
          <h2 className="h26-announcement-heading">Announcement Coming Soon</h2>
          <p className="h26-announcement-text">
            We're preparing for another exciting edition of Hawkathon. Details
            on dates, theme, prizes, and registration will be announced shortly.
            Stay connected with GDSC ULM for all the latest updates.
          </p>
        </div>

        <div className="h26-tags">
          <span className="h26-tag">Hackathon</span>
          <span className="h26-tag">Innovation</span>
          <span className="h26-tag">AI &amp; Tech</span>
          <span className="h26-tag">Spring 2026</span>
          <span className="h26-tag">ULM</span>
        </div>

        <p className="h26-footer">
          Follow us on{' '}
          <a href="https://www.instagram.com/gdsc_ulm/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{' '}
          for updates
        </p>
      </div>
    </div>
  );
};

export default Hawkathon2026;
