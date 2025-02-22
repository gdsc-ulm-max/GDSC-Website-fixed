import React from "react";
import "./EventCard.css";

function EventCard(props) {
  return (
    <div className="eventCard">
      <h3>{props.name}</h3>
      <p>{props.info}</p>
      <a href={props.link} target="_blank" rel="noreferrer">
        <button className="eventButton">View Event</button>
      </a>
    </div>
  );
}

export default EventCard;
