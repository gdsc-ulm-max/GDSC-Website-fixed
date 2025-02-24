import React, { useState, useEffect } from "react";
import { Typography, Spin } from "antd";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import dayjs from "dayjs";
import "./UpcomingEvents.css";
import { Link } from "react-router-dom";

const { Title } = Typography;

function UpcomingEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsQuery = query(
          collection(db, "events"),
          orderBy("endDate", "desc")
        );
        const querySnapshot = await getDocs(eventsQuery);
        const events = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Filter for upcoming events
        const now = dayjs();
        const upcoming = events.filter(event => 
          event.isTbdDate || 
          event.endDate === "TBD" || 
          dayjs(event.endDate).isAfter(now)
        ).slice(0, 3); // Only show top 3 upcoming events

        setUpcomingEvents(upcoming);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const renderEventCard = (event) => (
    <div className="event-card" key={event.id}>
      <div
        className="event-header"
        style={{ backgroundColor: `${event.color}15` }}
      >
        <img src={event.logo} alt={event.name} className="event-logo" />
        <h3 style={{ color: event.color }}>{event.name}</h3>
      </div>
      <div className="event-content">
        <div className="event-tags">
          {event.tags && event.tags.map((tag, idx) => (
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
        <p className="event-description">{event.info}</p>
        <div className="event-dates">
          <div className="date-item">
            <span className="date-label">Event Date</span>
            <span className="date-value">
              {event.isTbdDate ? "TBD" : dayjs(event.endDate).format("MMM D, YYYY")}
            </span>
          </div>
        </div>
        {event.buttons && event.buttons.length > 0 && (
          <div className="event-buttons">
            {event.buttons.map((button, idx) =>
              button.link.startsWith("http") ? (
                <a
                  key={idx}
                  href={button.link}
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
                  {button.text}
                </a>
              ) : (
                <Link
                  key={idx}
                  to={button.link}
                  className="event-button"
                  style={{
                    backgroundColor: event.color,
                    display: "inline-block",
                    width: "fit-content",
                    margin: "0 8px",
                  }}
                >
                  {button.text}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="upcoming-section">
      <Title level={2} className="upcoming-title">
        Flagship Events
      </Title>
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : (
        <div className="events-container">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map(renderEventCard)
          ) : (
            <div className="no-events">
              <p>No upcoming events at the moment</p>
            </div>
          )}
        </div>
      )}
      <div className="view-all-events">
        <Link to="/events" className="view-all-button">
          View All Events
        </Link>
      </div>
    </div>
  );
}

export default UpcomingEvents; 