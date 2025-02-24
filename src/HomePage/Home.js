import React from "react";
import SEO from "../components/SEO";
import "./Home.css";
import LandingPage from "./LandingPage";
import ScrollPage from "./ScrollPage";

const Home = ({ seo }) => {
  return (
    <>
      <SEO seo={seo} />
      <div className="homePage">
        <LandingPage />
        <ScrollPage />
      </div>
    </>
  );
};

export default Home;
