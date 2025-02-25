import React from "react";
import { Card, Button, Typography, List, Space } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "./Join.css";
import Animation from "./HomePage/Animation";
import SEO from "./components/SEO";

const { Title, Text } = Typography;

const Join = ({ seo }) => {
  const memberBenefits = [
    "Access to exclusive GDSC events and workshops",
    "Networking opportunities with industry professionals",
    "Hands-on experience with cutting-edge technologies",
    "Internship opportunities through Google's network",
    "Certificate of participation in GDSC activities",
  ];

  const coreBenefits = [
    "Leadership experience in a global tech community",
    "Enhanced networking opportunities",
    "Priority access to Google events and resources",
    "Recognition as a GDSC team leader",
  ];

  const renderListItem = (item) => (
    <div className="benefit-item">
      <CheckCircleOutlined className="check-icon" />
      <Text>{item}</Text>
    </div>
  );

  return (
    <>
      <SEO seo={seo} />
      <div className="join-page">
        <Animation />
        <Title style={{ textAlign: "center", marginBottom: "2rem" }}>
          Join GDSC Community
        </Title>
        <div className="joinCards">
          <Card
            className="joinCard member"
            hoverable
            title={
              <Space>
                <UserOutlined style={{ fontSize: "24px" }} />
                <Title level={3} style={{ margin: 0 }}>
                  Become a Member
                </Title>
              </Space>
            }
          >
            <div className="benefits-list">
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="benefit-wrapper">
                  {renderListItem(benefit)}
                </div>
              ))}
            </div>
            <Button
              type="primary"
              size="large"
              href="https://webservices.ulm.edu/webforms/form/gdsc-interest-form"
              target="_blank"
              className="join-button"
            >
              Join Now
            </Button>
          </Card>

          <Card
            className="joinCard team"
            hoverable
            title={
              <Space>
                <TeamOutlined style={{ fontSize: "24px" }} />
                <Title level={3} style={{ margin: 0 }}>
                  Become a Core Team Member
                </Title>
              </Space>
            }
          >
            <div className="benefits-list">
              {coreBenefits.map((benefit, index) => (
                <div key={index} className="benefit-wrapper">
                  {renderListItem(benefit)}
                </div>
              ))}
            </div>
            <Button
              type="primary"
              size="large"
              disabled
              className="join-button"
            >
              Applications Closed
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Join;
