import React, { useState } from "react";
import { Typography, Row, Col, Card, Timeline, Tabs } from "antd";
import {
  LinkedinFilled,
  GithubFilled,
  GlobalOutlined,
} from "@ant-design/icons";
import "./About.css";
import { timelineData } from "./data/timelineData";
import Animation from "./HomePage/Animation";
import SEO from "./components/SEO";

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const About = ({ seo }) => {
  const [selectedYear, setSelectedYear] = useState("2025-2026");

  const renderMemberCard = (member) => (
    <div className="legacy-member-card">
      <div className="member-photo-wrapper">
        <img src={member.image} alt={member.name} className="member-photo" />
        <div className="member-overlay">
          <div className="member-social">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <LinkedinFilled className="social-icon linkedin" />
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noreferrer">
                <GithubFilled className="social-icon github" />
              </a>
            )}
            {member.portfolio && (
              <a href={member.portfolio} target="_blank" rel="noreferrer">
                <GlobalOutlined className="social-icon portfolio" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        {member.quote && <p className="member-quote">"{member.quote}"</p>}
      </div>
    </div>
  );

  return (
    <>
      <SEO seo={seo} />
      <div className="about-page">
        <div className="about-content">
          {/* Mission Section */}
          <section className="mission-section">
            <Title level={1}>About GDSC ULM</Title>
            <Paragraph className="mission-text">
              Google Developer Student Clubs at the University of Louisiana
              Monroe is a community of students passionate about technology and
              development. We are part of Google's global program designed to
              help students bridge the gap between theory and practice.
            </Paragraph>
          </section>

          {/* Legacy Section */}
          <div className="legacy-timeline">
            <Tabs
              activeKey={selectedYear}
              onChange={setSelectedYear}
              centered
              className="year-tabs"
              tabBarGutter={40}
            >
              {timelineData.map(({ year, members, achievements }) => (
                <TabPane
                  tab={<span className="year-tab">{year}</span>}
                  key={year}
                >
                  <div className="year-content">
                    <div className="leadership-team">
                      <Title level={4}>Leadership Team</Title>
                      <Row gutter={[24, 24]}>
                        {members.map((member, idx) => (
                          <Col
                            xs={24}
                            sm={12}
                            md={8}
                            lg={6}
                            key={idx}
                            className="member-col"
                          >
                            {renderMemberCard(member)}
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </div>
                </TabPane>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
