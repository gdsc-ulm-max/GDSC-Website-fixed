import React from "react";
import { Helmet } from "react-helmet-async";
import hawkathonLogo from "../assets/hawkathon.jpeg";
import "./Hawkathon2026.css";

const Hawkathon2026 = ({ seo }) => {
  return (
    <div className="h26">
      <Helmet>
        <title>{seo?.title || "Hawkathon 2026 | GDSC ULM"}</title>
        <meta
          name="description"
          content={
            seo?.description ||
            "Hawkathon 2026 — April 17–19 at ULM. Register now."
          }
        />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="h26-hero">
        <div className="h26-container">
          <div className="h26-hero-top">
            <img src={hawkathonLogo} alt="Hawkathon" className="h26-hero-logo" />
            <span className="h26-hero-org">GDSC ULM × ACM</span>
          </div>

          <h1 className="h26-hero-title">
            Hawkathon<br />
            <span className="h26-hero-year">2026</span>
          </h1>

          <p className="h26-hero-date">April 17 – 19 · University of Louisiana Monroe</p>

          <div className="h26-hero-actions">
            <a
              href="https://forms.cloud.microsoft/r/zRbLD8Mu6U"
              target="_blank"
              rel="noopener noreferrer"
              className="h26-btn-primary"
            >
              Register Now
            </a>
            <span className="h26-hero-slots">Only 15 teams · First Come, First Served</span>
          </div>

          <div className="h26-hero-stats">
            <div className="h26-hero-stat">
              <span className="h26-hero-stat-num">$1,500</span>
              <span className="h26-hero-stat-lbl">Prize Pool</span>
            </div>
            <div className="h26-hero-stat-sep" />
            <div className="h26-hero-stat">
              <span className="h26-hero-stat-num">3 Days</span>
              <span className="h26-hero-stat-lbl">Apr 17 – 19</span>
            </div>
            <div className="h26-hero-stat-sep" />
            <div className="h26-hero-stat">
              <span className="h26-hero-stat-num">$5</span>
              <span className="h26-hero-stat-lbl">Per Member</span>
            </div>
            <div className="h26-hero-stat-sep" />
            <div className="h26-hero-stat">
              <span className="h26-hero-stat-num">3+</span>
              <span className="h26-hero-stat-lbl">Members Min</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE ─────────────────────────────────────────── */}
      <section className="h26-section h26-section-offwhite">
        <div className="h26-container">
          <h2 className="h26-section-title">Event Schedule</h2>
          <p className="h26-section-sub">Three days, one goal — build something great</p>

          <div className="h26-timeline">
            {/* Dots row — separate from cards so height never misaligns */}
            <div className="h26-dots-row">
              <div className="h26-dots-item">
                <div className="h26-dot h26-dot-blue" />
              </div>
              <div className="h26-dots-item">
                <div className="h26-dot h26-dot-green" />
              </div>
              <div className="h26-dots-item">
                <div className="h26-dot h26-dot-yellow" />
              </div>
            </div>

            {/* Cards row */}
            <div className="h26-cards-row">
              <div className="h26-timeline-card">
                <div className="h26-tcard-header">
                  <span className="h26-tcard-day">Day 1</span>
                  <span className="h26-tcard-date">April 17</span>
                </div>
                <h3 className="h26-tcard-title">Keynotes &amp; Kick Off</h3>
                <p className="h26-tcard-venue">📍 Hemphill Hall</p>
                <ul className="h26-tcard-list">
                  <li>Event overview &amp; topic reveal</li>
                  <li>Team setup &amp; GitHub onboarding</li>
                  <li>Rules, prize pool &amp; judging walkthrough</li>
                  <li>Meet the judges &amp; network</li>
                </ul>
                <span className="h26-tcard-tag h26-tag-required">Mandatory</span>
              </div>

              <div className="h26-timeline-card">
                <div className="h26-tcard-header">
                  <span className="h26-tcard-day">Day 2</span>
                  <span className="h26-tcard-date">April 18</span>
                </div>
                <h3 className="h26-tcard-title">Hacking &amp; Mentorship</h3>
                <p className="h26-tcard-venue">📍 Hemphill Hall · 10 AM – 5 PM</p>
                <ul className="h26-tcard-list">
                  <li>Open workspace for all teams</li>
                  <li>Collaborative environment</li>
                  <li>Mentors on-site for queries</li>
                  <li>Drop in anytime during hours</li>
                </ul>
                <span className="h26-tcard-tag h26-tag-optional">Optional</span>
              </div>

              <div className="h26-timeline-card">
                <div className="h26-tcard-header">
                  <span className="h26-tcard-day">Day 3</span>
                  <span className="h26-tcard-date">April 19</span>
                </div>
                <h3 className="h26-tcard-title">Project Showcase &amp; Judging</h3>
                <p className="h26-tcard-venue">📍 The Hanger · 9 AM – 2 PM</p>
                <ul className="h26-tcard-list">
                  <li>Teams present to judges</li>
                  <li>Live evaluation &amp; scoring</li>
                  <li>Results announced</li>
                  <li>Prizes awarded to all teams</li>
                </ul>
                <span className="h26-tcard-tag h26-tag-required">Mandatory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIZES ───────────────────────────────────────────── */}
      <section className="h26-section h26-section-white">
        <div className="h26-container">
          <h2 className="h26-section-title">Prize Pool</h2>
          <p className="h26-section-sub">$1,500 total across all placements</p>

          <div className="h26-prizes">
            <div className="h26-prize h26-prize-2nd">
              <span className="h26-prize-rank">2nd</span>
              <span className="h26-prize-amount">$300</span>
              <span className="h26-prize-label">Runner Up</span>
            </div>

            <div className="h26-prize h26-prize-1st">
              <div className="h26-prize-crown">🏆</div>
              <span className="h26-prize-rank">1st</span>
              <span className="h26-prize-amount">$1,000</span>
              <span className="h26-prize-label">Champion</span>
            </div>

            <div className="h26-prize h26-prize-3rd">
              <span className="h26-prize-rank">3rd</span>
              <span className="h26-prize-amount">$200</span>
              <span className="h26-prize-label">3rd Place</span>
            </div>
          </div>

          <p className="h26-prize-note">All placements receive certificates · Organized by GDSC ULM &amp; ACM</p>
        </div>
      </section>

      {/* ── REGISTRATION ─────────────────────────────────────── */}
      <section className="h26-section h26-section-offwhite">
        <div className="h26-container">
          <h2 className="h26-section-title">Registration</h2>
          <p className="h26-section-sub">Everything you need to know before signing up</p>

          <div className="h26-reg-layout">
            <div className="h26-reg-info">
              <div className="h26-reg-row">
                <div className="h26-reg-item">
                  <div className="h26-reg-dot" />
                  <div>
                    <strong>Team Size</strong>
                    <p>Minimum 3 members per team</p>
                  </div>
                </div>
                <div className="h26-reg-item">
                  <div className="h26-reg-dot" />
                  <div>
                    <strong>Eligibility</strong>
                    <p>At least one Freshman or Sophomore required per team</p>
                  </div>
                </div>
              </div>
              <div className="h26-reg-row">
                <div className="h26-reg-item">
                  <div className="h26-reg-dot" />
                  <div>
                    <strong>Fee</strong>
                    <p>$5 per team member (non-refundable)</p>
                  </div>
                </div>
                <div className="h26-reg-item">
                  <div className="h26-reg-dot" />
                  <div>
                    <strong>Slots</strong>
                    <p>Only 15 teams — First Come, First Served</p>
                  </div>
                </div>
              </div>
              <div className="h26-reg-row">
                <div className="h26-reg-item">
                  <div className="h26-reg-dot" />
                  <div>
                    <strong>Contact</strong>
                    <p>You'll be contacted via your Warhawks email</p>
                  </div>
                </div>
                <div className="h26-reg-item">
                  <div className="h26-reg-dot" />
                  <div>
                    <strong>Organizers</strong>
                    <p>GDSC ULM &amp; ACM · Sponsored by GreenQube</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h26-reg-cta-card">
              <h3>Ready to build?</h3>
              <p>Fill out all questions carefully and include your teammates' names in the form.</p>
              <a
                href="https://forms.cloud.microsoft/r/zRbLD8Mu6U"
                target="_blank"
                rel="noopener noreferrer"
                className="h26-btn-primary h26-btn-full"
              >
                Register Your Team
              </a>
              <span className="h26-reg-cta-note">April 17–19 · ULM · 15 spots only</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="h26-footer">
        <p>
          Follow{" "}
          <a href="https://www.instagram.com/gdsc_ulm/" target="_blank" rel="noopener noreferrer">
            @gdsc_ulm
          </a>{" "}
          on Instagram for updates · University of Louisiana Monroe
        </p>
      </footer>
    </div>
  );
};

export default Hawkathon2026;
