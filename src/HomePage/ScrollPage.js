import React from "react";
import Card from "./Card";
import "./ScrollPage.css";
import FlagshipEvents from "../components/FlagshipEvents";

function ScrollPage() {
  return (
    <div className="scrollPage">
      <FlagshipEvents />

      <Card heading={"What We Believe In"} list={true} />

      <Card heading="Work In Progress" />
    </div>
  );
}

export default ScrollPage;
