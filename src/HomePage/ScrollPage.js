import React from "react";
import Card from "./Card";
import "./ScrollPage.css";
import UpcomingEvents from "../components/UpcomingEvents";

function ScrollPage() {
  return (
    <div className="scrollPage">
      <UpcomingEvents />

      <Card heading={"What We Believe In"} list={true} />

      <Card heading="Work In Progress" />
    </div>
  );
}

export default ScrollPage;
