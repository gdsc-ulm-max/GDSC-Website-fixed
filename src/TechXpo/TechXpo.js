import React from "react";
import "./TechXpo.css";

const TechXpo = () => {
  return (
    <div className="techxpo-announcement">
      <section className="hero-section">
        <img
          className="techxpo-logo"
          src={require("../logo/techxpologo.png")}
          alt="TechXpo Banner"
        />
        <h1>TechXpo 2024</h1>
        <h2 className="tagline">LET'S COME, CONNECT, LEARN AND GROW</h2>
      </section>

      <section className="content-section">
        <h2>Event Overview</h2>
        <dl className="event-details">
          <dt>Event Name</dt>
          <dd>TechXpo 2024</dd>

          <dt>Date</dt>
          <dd>22th November, 2024</dd>

          <dt>Time</dt>
          <dd>10:00 AM – 01:30 PM</dd>

          <dt>Venue</dt>
          <dd>Hanger Hall, ULM</dd>
        </dl>
      </section>

      <section className="content-section">
        <h2>About Our Event</h2>
        <p>
          Join us at TechXpo ULM to connect, learn, and grow! Discover 
          groundbreaking projects, engage with creative minds from diverse fields, and 
          expand your understanding of how technology is shaping our world.
        </p>
      </section>

      <section className="content-section">
        <h2>Event Highlights</h2>
        <ul>
          <li>
            <strong>Student Projects</strong>
            Discover innovative tech projects by talented students from diverse fields
          </li>
          <li>
            <strong>VR & Drone</strong>
            Experience the thrill of VR and live drone demonstrations
          </li>
          <li>
            <strong>People's Choice</strong>
            Cast your vote and help select the standout project of the event
          </li>
          <li>
            <strong>Prizes</strong>
            Exciting rewards await top projects and People's Choice winners
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Sponsors</h2>
        <ul className="sponsors-list">
          <li>Best Western</li>
          <li>CAB</li>
          <li>SGA</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>More Information</h2>
        <p>
          For additional details and updates, visit: 
          <a href="https://github.com/gdsc-ulm/techxpo" target="_blank" rel="noopener noreferrer">
            github.com/gdsc-ulm/techxpo
          </a>
        </p>
        <div className="open-badge">
          OPEN FOR ALL
        </div>
      </section>
    </div>
  );
};

export default TechXpo; 