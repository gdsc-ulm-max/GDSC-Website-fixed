import React from "react";
import { Helmet } from "react-helmet-async";
import hawkathonLogo from "../assets/hawkathon.jpeg";
import "./Hawkathon2026.css";

const Hawkathon2026 = ({ seo }) => {
  return (
    <div className="h26-page">
      <Helmet>
        <title>{seo?.title || "Hawkathon 2026 | GDSC ULM"}</title>
        <meta
          name="description"
          content={
            seo?.description ||
            "Hawkathon 2026 — ULM's premier hackathon. April 17-19. Register now."
          }
        />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="h26-hero">
        <div className="h26-hero-inner">
          <img src={hawkathonLogo} alt="Hawkathon" className="h26-logo" />

          <div className="h26-org-badges">
            <span className="h26-badge">GDSC ULM</span>
            <span className="h26-badge-sep">×</span>
            <span className="h26-badge">ACM</span>
          </div>

          <h1 className="h26-title">
            <span className="h26-title-accent">Hawkathon</span> 2026
          </h1>
          <p className="h26-subtitle">ULM's Premier Hackathon</p>

          <div className="h26-meta-row">
            <span className="h26-meta-item">
              <span className="material-icons">event</span>
              April 17 – 19, 2026
            </span>
            <span className="h26-meta-dot" />
            <span className="h26-meta-item">
              <span className="material-icons">location_on</span>
              Hemphill Hall &amp; The Hanger
            </span>
            <span className="h26-meta-dot" />
            <span className="h26-meta-item">
              <span className="material-icons">workspace_premium</span>
              Sponsored by GreenQube
            </span>
          </div>

          <a
            href="https://forms.cloud.microsoft/r/zRbLD8Mu6U"
            target="_blank"
            rel="noopener noreferrer"
            className="h26-register-btn"
          >
            <span className="material-icons">how_to_reg</span>
            Register Now
          </a>

          <p className="h26-slots-notice">
            <span className="material-icons">warning_amber</span>
            Only 15 teams — First Come, First Served
          </p>
        </div>
      </section>

      {/* ── Quick Stats ──────────────────────────────────────── */}
      <section className="h26-stats">
        <div className="h26-stats-inner">
          <div className="h26-stat">
            <span className="h26-stat-value">$1,500</span>
            <span className="h26-stat-label">Prize Pool</span>
          </div>
          <div className="h26-stat-divider" />
          <div className="h26-stat">
            <span className="h26-stat-value">3</span>
            <span className="h26-stat-label">Days</span>
          </div>
          <div className="h26-stat-divider" />
          <div className="h26-stat">
            <span className="h26-stat-value">15</span>
            <span className="h26-stat-label">Teams Max</span>
          </div>
          <div className="h26-stat-divider" />
          <div className="h26-stat">
            <span className="h26-stat-value">$5</span>
            <span className="h26-stat-label">Per Member</span>
          </div>
        </div>
      </section>

      {/* ── Schedule ─────────────────────────────────────────── */}
      <section className="h26-section">
        <div className="h26-section-inner">
          <div className="h26-section-header">
            <span className="material-icons h26-section-icon">event_note</span>
            <h2 className="h26-section-title">Event Schedule</h2>
          </div>

          <div className="h26-days-grid">
            {/* Day 1 */}
            <div className="h26-day-card h26-day1">
              <div className="h26-day-header">
                <span className="h26-day-badge">Day 1</span>
                <span className="h26-day-date">April 17</span>
              </div>
              <div className="h26-day-icon-wrap">
                <span className="material-icons">rocket_launch</span>
              </div>
              <h3 className="h26-day-title">Keynotes &amp; Kick Off</h3>
              <div className="h26-day-venue">
                <span className="material-icons">location_on</span>
                Hemphill Hall
              </div>
              <ul className="h26-day-list">
                <li>
                  <span className="material-icons">check_circle</span>
                  Event overview &amp; orientation
                </li>
                <li>
                  <span className="material-icons">check_circle</span>
                  Topic reveal for Hawkathon 2026
                </li>
                <li>
                  <span className="material-icons">check_circle</span>
                  Form your team &amp; set up GitHub
                </li>
                <li>
                  <span className="material-icons">check_circle</span>
                  Rules, prize pool &amp; judging criteria
                </li>
                <li>
                  <span className="material-icons">check_circle</span>
                  Meet the judges &amp; network
                </li>
              </ul>
              <div className="h26-day-note">
                <span className="material-icons">info</span>
                Mandatory attendance
              </div>
            </div>

            {/* Day 2 */}
            <div className="h26-day-card h26-day2">
              <div className="h26-day-header">
                <span className="h26-day-badge">Day 2</span>
                <span className="h26-day-date">April 18</span>
              </div>
              <div className="h26-day-icon-wrap">
                <span className="material-icons">code</span>
              </div>
              <h3 className="h26-day-title">Hacking &amp; Mentorship</h3>
              <div className="h26-day-venue">
                <span className="material-icons">location_on</span>
                Hemphill Hall · 10 AM – 5 PM
              </div>
              <ul className="h26-day-list">
                <li>
                  <span className="material-icons">check_circle</span>
                  Open workspace for all teams
                </li>
                <li>
                  <span className="material-icons">check_circle</span>
                  Collaborative environment
                </li>
                <li>
                  <span className="material-icons">check_circle</span>
                  Mentorship &amp; Q&amp;A support
                </li>
                <li>
                  <span className="material-icons">check_circle</span>
                  Get guidance on your project
                </li>
              </ul>
              <div className="h26-day-note h26-day-note-optional">
                <span className="material-icons">info</span>
                Optional — open for teams needing space
              </div>
            </div>

            {/* Day 3 */}
            <div className="h26-day-card h26-day3">
              <div className="h26-day-header">
                <span className="h26-day-badge">Day 3</span>
                <span className="h26-day-date">April 19</span>
              </div>
              <div className="h26-day-icon-wrap">
                <span className="material-icons">emoji_events</span>
              </div>
              <h3 className="h26-day-title">Project Showcase &amp; Judging</h3>
              <div className="h26-day-venue">
                <span className="material-icons">location_on</span>
                The Hanger · 9 AM – 2 PM
              </div>
              <ul className="h26-day-list">
                <li>
                  <span className="material-icons">check_circle</span>
                  Teams present to judges
                </li>
                <li>
                  <span className="material-icons">check_circle</span>
                  Live judging &amp; evaluation
                </li>
                <li>
                  <span className="material-icons">check_circle</span>
                  Results announced
                </li>
                <li>
                  <span className="material-icons">check_circle</span>
                  Winners &amp; all participants awarded
                </li>
              </ul>
              <div className="h26-day-note">
                <span className="material-icons">info</span>
                Mandatory attendance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prize Pool ───────────────────────────────────────── */}
      <section className="h26-section h26-prizes-section">
        <div className="h26-section-inner">
          <div className="h26-section-header">
            <span className="material-icons h26-section-icon">
              emoji_events
            </span>
            <h2 className="h26-section-title">Prize Pool</h2>
          </div>

          <div className="h26-prizes-grid">
            <div className="h26-prize h26-prize-second">
              <div className="h26-prize-medal">
                <span className="material-icons">workspace_premium</span>
              </div>
              <span className="h26-prize-place">2nd Place</span>
              <span className="h26-prize-amount">$300</span>
              <span className="h26-prize-plus">+ Certificate</span>
            </div>

            <div className="h26-prize h26-prize-first">
              <div className="h26-prize-crown">
                <span className="material-icons">military_tech</span>
              </div>
              <span className="h26-prize-place">1st Place</span>
              <span className="h26-prize-amount">$1,000</span>
              <span className="h26-prize-plus">+ Certificate</span>
            </div>

            <div className="h26-prize h26-prize-third">
              <div className="h26-prize-medal">
                <span className="material-icons">workspace_premium</span>
              </div>
              <span className="h26-prize-place">3rd Place</span>
              <span className="h26-prize-amount">$200</span>
              <span className="h26-prize-plus">+ Certificate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Registration Details ─────────────────────────────── */}
      <section className="h26-section">
        <div className="h26-section-inner">
          <div className="h26-section-header">
            <span className="material-icons h26-section-icon">
              app_registration
            </span>
            <h2 className="h26-section-title">Registration Details</h2>
          </div>

          <div className="h26-reg-grid">
            <div className="h26-reg-card">
              <span className="material-icons">groups</span>
              <h3>Team Size</h3>
              <p>Minimum 3 members</p>
              <small>Include all teammates in the form</small>
            </div>
            <div className="h26-reg-card">
              <span className="material-icons">school</span>
              <h3>Eligibility</h3>
              <p>At least one Freshman or Sophomore required</p>
              <small>Per team</small>
            </div>
            <div className="h26-reg-card">
              <span className="material-icons">paid</span>
              <h3>Registration Fee</h3>
              <p>$5 per team member</p>
              <small>Non-refundable</small>
            </div>
            <div className="h26-reg-card">
              <span className="material-icons">confirmation_number</span>
              <h3>Team Slots</h3>
              <p>Only 15 teams</p>
              <small>First Come, First Served</small>
            </div>
            <div className="h26-reg-card">
              <span className="material-icons">email</span>
              <h3>Communication</h3>
              <p>Via Warhawks Email</p>
              <small>We'll reach out for further info</small>
            </div>
            <div className="h26-reg-card">
              <span className="material-icons">business</span>
              <h3>Organized by</h3>
              <p>GDSC ULM &amp; ACM</p>
              <small>Sponsored by GreenQube</small>
            </div>
          </div>

          <div className="h26-reg-cta">
            <a
              href="https://forms.cloud.microsoft/r/zRbLD8Mu6U"
              target="_blank"
              rel="noopener noreferrer"
              className="h26-register-btn"
            >
              <span className="material-icons">how_to_reg</span>
              Register Your Team
            </a>
            <p className="h26-reg-note">
              Answer all questions carefully and accurately · Use your Warhawks
              email
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="h26-footer">
        <p>
          Follow{" "}
          <a
            href="https://www.instagram.com/gdsc_ulm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gdsc_ulm
          </a>{" "}
          on Instagram for updates · University of Louisiana Monroe
        </p>
      </footer>
    </div>
  );
};

export default Hawkathon2026;
