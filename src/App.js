import React from "react";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import { HelmetProvider } from "react-helmet-async";
import "antd/dist/reset.css";
import About from "./About";
import "./App.css";
import Home from "./HomePage/Home";
import Animation from "./HomePage/Animation";
import NavBar from "./NavBar";
import Join from "./Join";
import Events from "./EventsPage/Events";
import HawkthonAnnouncement from "./Hawkthon/HawkthonAnnouncement";
import Hawkthon2025 from "./Hawkthon/Hawkthon2025";
import TechXpo from "./TechXpo/TechXpo";
import CodeClash from "./CodeClashPage/CodeClash";
import Gallery from "./GalleryPage/Gallery";
import AnnouncementBar from "./components/AnnouncementBar";

// Add SEO configuration object
const seoConfig = {
  home: {
    title: "GDSC ULM - Google Developer Student Clubs | Home",
    description:
      "Welcome to Google Developer Student Clubs at University of Louisiana Monroe. Join our community of student developers, designers and innovators.",
  },
  about: {
    title: "About Us | GDSC ULM",
    description:
      "Learn about GDSC ULM's mission, vision, and the team behind Google Developer Student Clubs at University of Louisiana Monroe.",
  },
  join: {
    title: "Join GDSC ULM | Become a Member",
    description:
      "Join GDSC ULM to access exclusive workshops, events, and networking opportunities. Start your developer journey with us.",
  },
  events: {
    title: "Events | GDSC ULM",
    description:
      "Explore upcoming and past events hosted by GDSC ULM including workshops, hackathons, and tech talks.",
  },
  hawkathon: {
    title: "Hawkathon 2025 | GDSC ULM",
    description:
      "Join ULM's premier hackathon event. 48 hours of coding, innovation, and fun with amazing prizes to be won.",
  },
  techxpo: {
    title: "TechXpo | GDSC ULM",
    description:
      "Experience our annual technology exposition showcasing student projects and innovations.",
  },
  codeClash: {
    title: "Code Clash | GDSC ULM",
    description:
      "Participate in ou biweeklycompetitive programming contest and showcase your coding skills.",
  },
  gallery: {
    title: "Gallery | GDSC ULM",
    description:
      "View photos and memories from our past events, workshops, and community activities.",
  },
};

function App() {
  return (
    <HelmetProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1890ff",
            borderRadius: 8,
            colorBgContainer: "#ffffff",
          },
        }}
      >
        <div className="App">
          <NavBar />
          <AnnouncementBar />
          <Animation className="animation" />
          <main className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home seo={seoConfig.home} />} />
              <Route path="/about" element={<About seo={seoConfig.about} />} />
              <Route path="/join" element={<Join seo={seoConfig.join} />} />
              <Route
                path="/events"
                element={<Events seo={seoConfig.events} />}
              />
              <Route
                path="/events/hawkathon"
                element={<HawkthonAnnouncement seo={seoConfig.hawkathon} />}
              />
              <Route
                path="/events/hawkathon-2025"
                element={<Hawkthon2025 seo={seoConfig.hawkathon} />}
              />
              <Route
                path="/events/techxpo"
                element={<TechXpo seo={seoConfig.techxpo} />}
              />
              <Route
                path="/code-clash"
                element={<CodeClash seo={seoConfig.codeClash} />}
              />
              <Route
                path="/gallery"
                element={<Gallery seo={seoConfig.gallery} />}
              />
            </Routes>
          </main>
        </div>
      </ConfigProvider>
    </HelmetProvider>
  );
}

export default App;
