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

      {/* ── DAY 1 DETAILED SCHEDULE ─────────────────────────── */}
      <section className="h26-section h26-section-white">
        <div className="h26-container">
          <h2 className="h26-section-title">Day 1 — Full Schedule</h2>
          <p className="h26-section-sub">April 17 · Hemphill Hall · Room 134 (main) + Breakout Rooms 113, 121, 124, 160 &amp; 223</p>

          <div className="h26-d1">

            {/* 1 — Check-in */}
            <div className="h26-d1-item">
              <div className="h26-d1-a">
                <div className="h26-d1-timebox">
                  <span className="h26-d1-time">12:00 – 12:30 PM</span>
                </div>
              </div>
              <div className="h26-d1-spine">
                <div className="h26-d1-dot h26-d1-dot-blue">
                  {/* ID badge / check-in */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <rect x="4" y="3" width="16" height="18" rx="2"/>
                    <line x1="8" y1="8" x2="16" y2="8"/>
                    <line x1="8" y1="12" x2="14" y2="12"/>
                    <circle cx="12" cy="17" r="1" fill="white" stroke="none"/>
                  </svg>
                </div>
              </div>
              <div className="h26-d1-b">
                <div className="h26-d1-card h26-d1-card-blue">
                  <div className="h26-d1-card-head">
                    <h3 className="h26-d1-card-title">Check-in &amp; Seating</h3>
                    <span className="h26-d1-card-time-mobile">12:00 – 12:30 PM</span>
                  </div>
                  <p className="h26-d1-card-venue">📍 Room 134</p>
                  <ul className="h26-d1-card-list">
                    <li>Register at the front desk &amp; collect your ID badge</li>
                    <li>Receive your team allocation</li>
                    <li>Find your seat &amp; meet fellow participants</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2 — Opening Ceremony */}
            <div className="h26-d1-item">
              <div className="h26-d1-a">
                <div className="h26-d1-timebox">
                  <span className="h26-d1-time">12:30 – 1:00 PM</span>
                </div>
              </div>
              <div className="h26-d1-spine">
                <div className="h26-d1-dot h26-d1-dot-green">
                  {/* Microphone */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <rect x="9" y="2" width="6" height="11" rx="3"/>
                    <path d="M5 10a7 7 0 0 0 14 0"/>
                    <line x1="12" y1="19" x2="12" y2="22"/>
                    <line x1="9" y1="22" x2="15" y2="22"/>
                  </svg>
                </div>
              </div>
              <div className="h26-d1-b">
                <div className="h26-d1-card h26-d1-card-green">
                  <div className="h26-d1-card-head">
                    <h3 className="h26-d1-card-title">Opening Ceremony</h3>
                    <span className="h26-d1-card-time-mobile">12:30 – 1:00 PM</span>
                  </div>
                  <p className="h26-d1-card-venue">📍 Room 134</p>
                  <ul className="h26-d1-card-list">
                    <li>Welcome address &amp; GDSC intro</li>
                    <li>Event overview (what, why, how)</li>
                    <li>Rules &amp; judging criteria walkthrough</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3 — Guest Speaker */}
            <div className="h26-d1-item">
              <div className="h26-d1-a">
                <div className="h26-d1-timebox">
                  <span className="h26-d1-time">1:00 – 1:25 PM</span>
                </div>
              </div>
              <div className="h26-d1-spine">
                <div className="h26-d1-dot h26-d1-dot-purple">
                  {/* Lightbulb */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 4 12.74V17H8v-2.26A7 7 0 0 1 12 2z"/>
                  </svg>
                </div>
              </div>
              <div className="h26-d1-b">
                <div className="h26-d1-card h26-d1-card-purple">
                  <div className="h26-d1-card-head">
                    <h3 className="h26-d1-card-title">Guest Speaker Session</h3>
                    <span className="h26-d1-card-time-mobile">1:00 – 1:25 PM</span>
                  </div>
                  <p className="h26-d1-card-venue">📍 Room 134</p>
                  <ul className="h26-d1-card-list">
                    <li>Tech &amp; innovation keynote</li>
                    <li>Practical insights from the industry</li>
                    <li>Live Q&amp;A</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4 — Theme Reveal */}
            <div className="h26-d1-item">
              <div className="h26-d1-a">
                <div className="h26-d1-timebox">
                  <span className="h26-d1-time">1:30 – 1:50 PM</span>
                </div>
              </div>
              <div className="h26-d1-spine">
                <div className="h26-d1-dot h26-d1-dot-yellow">
                  {/* Target / reveal */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="12" cy="12" r="1" fill="white" stroke="none"/>
                  </svg>
                </div>
              </div>
              <div className="h26-d1-b">
                <div className="h26-d1-card h26-d1-card-yellow">
                  <div className="h26-d1-card-head">
                    <h3 className="h26-d1-card-title">Theme &amp; Problem Statement Reveal</h3>
                    <span className="h26-d1-card-time-mobile">1:30 – 1:50 PM</span>
                  </div>
                  <p className="h26-d1-card-venue">📍 Room 134</p>
                  <ul className="h26-d1-card-list">
                    <li>Hackathon theme announcement</li>
                    <li>Tracks &amp; problem statements explained</li>
                    <li>What a winning project looks like</li>
                    <li>GitHub submission guidelines</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5 — Speed Typing */}
            <div className="h26-d1-item">
              <div className="h26-d1-a">
                <div className="h26-d1-timebox">
                  <span className="h26-d1-time">1:55 – 2:10 PM</span>
                </div>
              </div>
              <div className="h26-d1-spine">
                <div className="h26-d1-dot h26-d1-dot-red">
                  {/* Keyboard / typing */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <rect x="2" y="6" width="20" height="12" rx="2"/>
                    <line x1="6" y1="10" x2="6" y2="10"/><line x1="10" y1="10" x2="10" y2="10"/>
                    <line x1="14" y1="10" x2="14" y2="10"/><line x1="18" y1="10" x2="18" y2="10"/>
                    <line x1="8" y1="14" x2="16" y2="14"/>
                  </svg>
                </div>
              </div>
              <div className="h26-d1-b">
                <div className="h26-d1-card h26-d1-card-red">
                  <div className="h26-d1-card-head">
                    <h3 className="h26-d1-card-title">Speed Typing Competition</h3>
                    <span className="h26-d1-card-time-mobile">1:55 – 2:10 PM</span>
                  </div>
                  <p className="h26-d1-card-venue">📍 Room 134</p>
                  <ul className="h26-d1-card-list">
                    <li>Fun warm-up challenge for all participants</li>
                    <li>Winner announced on the spot</li>
                  </ul>
                  <span className="h26-d1-badge h26-d1-badge-fun">Fun Event</span>
                </div>
              </div>
            </div>

            {/* 6 — Hacking Begins (hero item) */}
            <div className="h26-d1-item h26-d1-item-hero">
              <div className="h26-d1-a">
                <div className="h26-d1-timebox">
                  <span className="h26-d1-time">2:10 – 4:45 PM</span>
                  <span className="h26-d1-duration">2h 35m</span>
                </div>
              </div>
              <div className="h26-d1-spine">
                <div className="h26-d1-dot h26-d1-dot-hero">
                  {/* Code brackets — hacking */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
              </div>
              <div className="h26-d1-b">
                <div className="h26-d1-card h26-d1-card-hero">
                  <div className="h26-d1-card-head">
                    <h3 className="h26-d1-card-title">Hacking Begins</h3>
                    <span className="h26-d1-badge h26-d1-badge-live">Hacking Live</span>
                  </div>
                  <p className="h26-d1-card-time-mobile">2:10 – 4:45 PM</p>
                  <p className="h26-d1-card-venue">📍 Breakout Rooms 113, 121, 124, 160 &amp; 223</p>
                  <ul className="h26-d1-card-list">
                    <li>Head to your assigned breakout room</li>
                    <li>Start building your project</li>
                    <li>Mentors on-site for technical guidance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 7 — Snack Break */}
            <div className="h26-d1-item h26-d1-item-nested">
              <div className="h26-d1-a">
                <div className="h26-d1-timebox">
                  <span className="h26-d1-time">~3:00 PM</span>
                  <span className="h26-d1-during">during hacking</span>
                </div>
              </div>
              <div className="h26-d1-spine">
                <div className="h26-d1-dot h26-d1-dot-orange">
                  {/* Coffee cup */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <path d="M17 8h1a4 4 0 0 1 0 8h-1"/>
                    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
                    <line x1="6" y1="2" x2="6" y2="4"/>
                    <line x1="10" y1="2" x2="10" y2="4"/>
                    <line x1="14" y1="2" x2="14" y2="4"/>
                  </svg>
                </div>
              </div>
              <div className="h26-d1-b">
                <div className="h26-d1-card h26-d1-card-orange">
                  <div className="h26-d1-card-head">
                    <h3 className="h26-d1-card-title">Snack Break</h3>
                    <span className="h26-d1-card-time-mobile">~3:00 PM</span>
                  </div>
                  <p className="h26-d1-card-venue">📍 All Breakout Rooms</p>
                  <ul className="h26-d1-card-list">
                    <li>Light snacks &amp; drinks brought to your room</li>
                    <li>No need to step away — keep building!</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 8 — Wrap-Up */}
            <div className="h26-d1-item">
              <div className="h26-d1-a">
                <div className="h26-d1-timebox">
                  <span className="h26-d1-time">4:45 – 5:00 PM</span>
                </div>
              </div>
              <div className="h26-d1-spine h26-d1-spine-last">
                <div className="h26-d1-dot h26-d1-dot-blue">
                  {/* Upload / submit */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                </div>
              </div>
              <div className="h26-d1-b">
                <div className="h26-d1-card h26-d1-card-blue">
                  <div className="h26-d1-card-head">
                    <h3 className="h26-d1-card-title">Submission &amp; Day 1 Wrap-Up</h3>
                    <span className="h26-d1-card-time-mobile">4:45 – 5:00 PM</span>
                  </div>
                  <p className="h26-d1-card-venue">📍 Room 134</p>
                  <ul className="h26-d1-card-list">
                    <li>Push your Day 1 progress to GitHub</li>
                    <li>Brief on what to expect on Day 2</li>
                    <li>Save your work &amp; create backups</li>
                  </ul>
                </div>
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
