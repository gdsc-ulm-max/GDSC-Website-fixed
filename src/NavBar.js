import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import logo from "./logo/logo.png";

function NavBar() {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
    },
    {
      label: <Link to="/about">About</Link>,
      key: "about",
    },
    {
      label: <Link to="/events">Events</Link>,
      key: "events",
    },
    {
      label: <Link to="/gallery">Gallery</Link>,
      key: "gallery",
    },
    {
      label: <Link to="/join">Join</Link>,
      key: "join",
    },
  ];

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="GDSC Logo" className="logoImg" />
      </Link>
      <div className={clicked ? "menuItems clicked" : "menuItems"}>
        <Link to="/" className={location.pathname === "/" ? "items home active" : "items home"}>
          Home
        </Link>
        <Link to="/events" className={location.pathname === "/events" ? "items pastEvents active" : "items pastEvents"}>
          Events
        </Link>
        <Link to="/gallery" className={location.pathname === "/gallery" ? "items gallery active" : "items gallery"}>
          Gallery
        </Link>
        <Link to="/codeclash" className={location.pathname === "/codeclash" ? "items codeclash active" : "items codeclash"}>
          CodeClash
        </Link>
        <Link to="/join" className={location.pathname === "/join" ? "items join active" : "items join"}>
          Join
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? "items about active" : "items about"}>
          About
        </Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
}

export default NavBar;
