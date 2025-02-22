import React from "react";
import "./Hawkthon2025.css";

const Hawkthon2025 = () => {
  return (
    <div className="hawkthon-announcement">
      <section className="hero-section">
        <img
          className="hawk-logo"
          src={require("../logo/hawkathon logo.png")}
          alt="Hawkthon Banner"
        />
        <h1>Hawkthon 2025</h1>
        <p>
          Welcome to ULM's 2nd Annual Hawkthon! Organized by the Google Developer 
          Student Club (GDSC) at the University of Louisiana Monroe, Hawkthon is 
          an exciting hackathon focused on creating innovative tech solutions for 
          university enhancement. Join us for two days of coding, collaboration, and creativity!
        </p>
      </section>

      <section className="content-section">
        <h2>Event Overview</h2>
        <dl className="event-details">
          <dt>Event Name</dt>
          <dd>Hawkthon 2025</dd>

          <dt>Date</dt>
          <dd>April 10 – April 11, 2025</dd>

          <dt>Time</dt>
          <dd>10:00 AM – 3:00 PM (both days)</dd>

          <dt>Venues</dt>
          <dd>
            <ul className="venue-list">
              <li>Day 1: Hemphill Hall - Kickoff and Workshops</li>
              <li>Day 2: The Hangar Hall - Project Presentations</li>
            </ul>
          </dd>

          <dt>Theme</dt>
          <dd>Innovating Campus Life Through Technology</dd>
        </dl>
      </section>

      <section className="content-section">
        <h2>About Hawkthon</h2>
        <p>
          Hawkthon is more than just a hackathon - it's a platform where innovation
          meets campus life. This year, we're focusing on developing technology
          solutions that enhance the university experience. Whether you're a coding expert 
          or just starting out, Hawkthon provides the perfect opportunity to learn, create, 
          and make a real difference in our university community.
        </p>
      </section>

      <section className="content-section">
        <h2>What You'll Build</h2>
        <ul>
          <li>
            <strong>Student Life Solutions</strong>
            Campus navigation, event planning, and student organization tools
          </li>
          <li>
            <strong>Academic Tools</strong>
            Study aids, course management, and learning resources
          </li>
          <li>
            <strong>Campus Services</strong>
            Dining, transportation, and facility management solutions
          </li>
          <li>
            <strong>Community Engagement</strong>
            Student networking and campus event platforms
          </li>
          <li>
            <strong>University Operations</strong>
            Resource scheduling and campus communication systems
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Event Schedule</h2>
        <h3>Day 1: Learning & Development</h3>
        <ul className="schedule-list">
          <li>
            <strong>10:00 AM</strong>
            Registration & Team Formation
          </li>
          <li>
            <strong>10:30 AM</strong>
            Opening Ceremony & Theme Announcement
          </li>
          <li>
            <strong>11:00 AM</strong>
            Technical Workshops & Mentorship Sessions
          </li>
          <li>
            <strong>12:30 PM</strong>
            Networking Lunch
          </li>
          <li>
            <strong>1:30 PM</strong>
            Project Development Begins
          </li>
          <li>
            <strong>3:00 PM</strong>
            Day 1 Wrap-up
          </li>
        </ul>

        <h3>Day 2: Project Completion & Showcase</h3>
        <ul className="schedule-list">
          <li>
            <strong>10:00 AM</strong>
            Project Development Continues
          </li>
          <li>
            <strong>12:00 PM</strong>
            Lunch Break
          </li>
          <li>
            <strong>1:00 PM</strong>
            Project Submissions
          </li>
          <li>
            <strong>1:30 PM</strong>
            Project Presentations
          </li>
          <li>
            <strong>2:30 PM</strong>
            Judging & Awards Ceremony
          </li>
          <li>
            <strong>3:00 PM</strong>
            Closing Ceremony
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Prizes & Recognition</h2>
        <ul>
          <li>
            <strong>1st Place</strong>
            $500 + Professional Mentorship Opportunities
          </li>
          <li>
            <strong>2nd Place</strong>
            $300 + Tech Company Swag Packages
          </li>
          <li>
            <strong>3rd Place</strong>
            $200 + Digital Innovation Certificates
          </li>
          <li>
            <strong>People's Choice</strong>
            Special Recognition & Prizes
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Rules & Guidelines</h2>
        <ul>
          <li>
            <strong>Team Size</strong>
            1-4 members per team
          </li>
          <li>
            <strong>Project Requirements</strong>
            All code must be written during the hackathon
          </li>
          <li>
            <strong>Technology Stack</strong>
            Any programming language or framework is allowed
          </li>
          <li>
            <strong>Submission</strong>
            Projects must be uploaded to GitHub with documentation
          </li>
          <li>
            <strong>Judging Criteria</strong>
            Innovation, Impact, Technical Complexity, and Presentation
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Hawkthon2025; 