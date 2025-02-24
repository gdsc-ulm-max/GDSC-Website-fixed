import React from "react";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
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

function App() {
  return (
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/join" element={<Join />} />
            <Route path="/events" element={<Events />} />
            <Route
              path="/events/hawkathon"
              element={<HawkthonAnnouncement />}
            />
            <Route path="/events/hawkathon-2025" element={<Hawkthon2025 />} />
            <Route path="/events/techxpo" element={<TechXpo />} />
            <Route path="/code-clash" element={<CodeClash />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </ConfigProvider>
  );
}

export default App;
