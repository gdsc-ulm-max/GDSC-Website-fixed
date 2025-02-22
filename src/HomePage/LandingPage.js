import React from "react";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import Animation from "./Animation";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landingPage">
      <Animation />
      <div className="content">
        <h1>Google Developer Students Club @ ULM</h1>
        <p>
          The Google Developers Student Club at ULM is program powered by Google
          for tech aspiring university students to learn new skills and
          technologies and gain real time experience.
        </p>
        <Space size="large" className="button-group">
          <Button 
            type="primary" 
            size="large"
            onClick={() => navigate('/join')}
            className="action-button join-button"
          >
            Join Us
          </Button>
          <Button 
            type="primary" 
            size="large"
            onClick={() => navigate('/events')}
            className="action-button events-button"
          >
            Upcoming Events
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default LandingPage; 