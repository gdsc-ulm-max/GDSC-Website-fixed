import React from "react";
import "./Home.css";
import LandingPage from "./LandingPage";
import ScrollPage from "./ScrollPage";

function Home() {
  return (
    <div className="homePage">
      <LandingPage />
      <ScrollPage />
    </div>
  );
}

export default Home;
