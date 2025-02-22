import React from "react";
import { Card as AntCard, Typography, List, Row, Col } from "antd";
import "./Card.css";

const { Title, Text } = Typography;

const beliefCards = [
  {
    title: "INNOVATE",
    description: "We believe in pushing boundaries and creating innovative solutions. Through hands-on projects and workshops, we explore cutting-edge technologies and foster creative problem-solving.",
    colorGroups: [
      { color: "#4285F4", letters: "IN" },
      { color: "#DB4437", letters: "NO" },
      { color: "#F4B400", letters: "VA" },
      { color: "#0F9D58", letters: "TE" }
    ]
  },
  {
    title: "COMMUNITY",
    description: "We build a vibrant tech community where students can connect, collaborate, and grow together. Our inclusive environment welcomes diverse perspectives and encourages knowledge sharing.",
    colorGroups: [
      { color: "#4285F4", letters: "CO" },
      { color: "#DB4437", letters: "MM" },
      { color: "#F4B400", letters: "UN" },
      { color: "#0F9D58", letters: "ITY" }
    ]
  },
  {
    title: "LEARNING",
    description: "We are committed to continuous learning and skill development. Through workshops, study jams, and hands-on projects, we help students master new technologies and stay ahead in tech.",
    colorGroups: [
      { color: "#4285F4", letters: "LE" },
      { color: "#DB4437", letters: "AR" },
      { color: "#F4B400", letters: "NI" },
      { color: "#0F9D58", letters: "NG" }
    ]
  }
];

const workCards = [
  {
    title: "WORKSHOPS",
    description: "Cloud Study Jams, Android Development, AI/ML Sessions",
    colorGroups: [
      { color: "#4285F4", letters: "WO" },
      { color: "#DB4437", letters: "RK" },
      { color: "#F4B400", letters: "SH" },
      { color: "#0F9D58", letters: "OPS" }
    ]
  },
  {
    title: "PROJECTS",
    description: "Hands-on Development, Team Collaboration, Real-world Applications",
    colorGroups: [
      { color: "#4285F4", letters: "PR" },
      { color: "#DB4437", letters: "OJ" },
      { color: "#F4B400", letters: "EC" },
      { color: "#0F9D58", letters: "TS" }
    ]
  },
  {
    title: "EVENTS",
    description: "Tech Talks, Hackathons, Project Showcases",
    colorGroups: [
      { color: "#4285F4", letters: "EV" },
      { color: "#DB4437", letters: "EN" },
      { color: "#F4B400", letters: "TS" }
    ]
  }
];

function Card(props) {
  const renderColoredTitle = (item) => {
    return item.colorGroups.map((group, index) => (
      <span key={index} style={{ color: group.color }}>
        {group.letters}
      </span>
    ));
  };

  return (
    <AntCard className="card" bordered={false}>
      <Title level={2}>{props.heading}</Title>
      {props.list ? (
        <Row gutter={[24, 24]} className="beliefs-grid">
          {beliefCards.map((belief, index) => (
            <Col xs={24} md={8} key={index}>
              <AntCard className="belief-card" bordered={false}>
                <Title level={3} className="belief-title">
                  {renderColoredTitle(belief)}
                </Title>
                <Text className="belief-description">
                  {belief.description}
                </Text>
              </AntCard>
            </Col>
          ))}
        </Row>
      ) : (
        <Row gutter={[24, 24]} className="work-grid">
          {workCards.map((work, index) => (
            <Col xs={24} md={8} key={index}>
              <AntCard className="work-card" bordered={false}>
                <Title level={3} className="work-title">
                  {renderColoredTitle(work)}
                </Title>
                <Text className="work-description">
                  {work.description}
                </Text>
              </AntCard>
            </Col>
          ))}
        </Row>
      )}
    </AntCard>
  );
}

export default Card; 