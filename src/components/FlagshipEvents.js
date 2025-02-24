import React from "react";
import "./FlagshipEvents.css";
import hawkathonLogo from "../assets/hawkathon.jpeg";
import techxpoLogo from "../assets/techxpo.png";
import codeclashLogo from "../assets/codeclash.png";
import { Link } from "react-router-dom";

const events = [
  {
    name: "Hawkathon",
    date: "TBD",
    description:
      "An annual hackathon event where students collaborate to build innovative solutions within 2-3 days",
    color: "#4285F4", // Google Blue
    logo: hawkathonLogo,
    tags: ["Hackathon", "Innovation", "Collab"],
    links: [
      {
        text: "Learn More",
        link: "/events/hawkathon-2025",
      },
      {
        text: "Register Team",
        link: "https://webservices.ulm.edu/webforms/form/hawkathon-registration",
      },
    ],
  },
  {
    name: "TechXPO",
    date: "TBD",
    description:
      "A technology exhibition event featuring student projects, demonstrations and networking opportunities",
    color: "#0F9D58", // Google Green
    logo: techxpoLogo,
    tags: ["Exhibition", "Networking", "Projects"],
  },
  {
    name: "CodeClash",
    date: "March 7, 2025",
    nextDate: "March 21, 2025",
    description:
      "A competitive programming event testing participants' problem-solving and coding skills",
    color: "#DB4437", // Google Red
    logo: codeclashLogo,
    tags: ["Competition", "Coding", "Prizes"],
  },
];

function FlagshipEvents() {
  return (
    <div className="flagship-section">
      <h2 className="flagship-title">Flagship Events</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div
              className="event-header"
              style={{ backgroundColor: `${event.color}15` }}
            >
              <img src={event.logo} alt={event.name} className="event-logo" />
              <h3 style={{ color: event.color }}>{event.name}</h3>
            </div>
            <div className="event-content">
              <div className="event-tags">
                {event.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="event-tag"
                    style={{
                      backgroundColor: `${event.color}15`,
                      color: event.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="event-description">{event.description}</p>
              <div className="event-dates">
                <div className="date-item">
                  <span className="date-label">Next Event</span>
                  <span className="date-value">{event.date}</span>
                </div>
                {event.nextDate && (
                  <div className="date-item">
                    <span className="date-label">Following</span>
                    <span className="date-value">{event.nextDate}</span>
                  </div>
                )}
              </div>
              {/* Removed the undefined 'e' variable */}
              {event.links ? (
                <div className="event-buttons">
                  {event.links.map((link, idx) =>
                    link.link.startsWith("http") ? (
                      <a
                        key={idx}
                        href={link.link}
                        className="event-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: event.color,
                          display: "inline-block",
                          width: "fit-content",
                          margin: "0 8px",
                        }}
                      >
                        {link.text}
                      </a>
                    ) : (
                      <Link
                        key={idx}
                        to={link.link}
                        className="event-button"
                        style={{
                          backgroundColor: event.color,
                          display: "inline-block",
                          width: "fit-content",
                          margin: "0 8px",
                        }}
                      >
                        {link.text}
                      </Link>
                    )
                  )}
                </div>
              ) : (
                event.link &&
                (event.link.startsWith("http") ? (
                  <a
                    href={event.link}
                    className="event-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: event.color,
                      display: "inline-block",
                      width: "fit-content",
                      alignSelf: "center",
                    }}
                  >
                    Learn More
                  </a>
                ) : (
                  <Link
                    to={event.link}
                    className="event-button"
                    style={{
                      backgroundColor: event.color,
                      display: "inline-block",
                      width: "fit-content",
                      alignSelf: "center",
                    }}
                  >
                    Learn More
                  </Link>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlagshipEvents;
