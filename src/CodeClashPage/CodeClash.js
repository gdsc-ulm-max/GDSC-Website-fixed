import React, { useState, useEffect } from "react";
import {
  Table,
  Modal,
  Input,
  Upload,
  message,
  FloatButton,
  Spin,
  Typography,
  Button,
  Row,
  Col,
  Card,
  Select,
} from "antd";
import {
  LockOutlined,
  UploadOutlined,
  InboxOutlined,
  CodeOutlined,
  TeamOutlined,
  TrophyOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import { collection, getDoc, setDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Papa from "papaparse";
import { motion } from "framer-motion";
import "./CodeClash.css";
import SEO from "../components/SEO";

const { Title, Text } = Typography;
const { Dragger } = Upload;
const { Option } = Select;

const CodeClash = ({ seo }) => {
  const [allStudentsData, setAllStudentsData] = useState([]);
  const [freshmanData, setFreshmanData] = useState([]);
  const [currentContest, setCurrentContest] = useState("all-students");
  const [allStudentsVisible, setAllStudentsVisible] = useState(false);
  const [freshmanVisible, setFreshmanVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false);
  const [uploadContestType, setUploadContestType] = useState("all-students");
  const [challenges, setChallenges] = useState([]);

  const features = [
    {
      icon: <CodeOutlined className="feature-icon" />,
      title: "Real Problems",
      description:
        "Industry-standard coding challenges that mirror real technical interviews",
    },
    {
      icon: <TeamOutlined className="feature-icon" />,
      title: "Peer Learning",
      description:
        "Collaborate and compete with fellow developers in real-time",
    },
    {
      icon: <TrophyOutlined className="feature-icon" />,
      title: "Win Prizes",
      description:
        "Top performers get recognized and rewarded at TechXpo 2025",
    },
    {
      icon: <LaptopOutlined className="feature-icon" />,
      title: "Career Ready",
      description: "Build the skills that top tech companies are looking for",
    },
  ];

  // Get current leaderboard data based on selected contest
  const getCurrentLeaderboardData = () => {
    return currentContest === "all-students" ? allStudentsData : freshmanData;
  };

  // Check if current contest is visible to public
  const isCurrentContestVisible = () => {
    return currentContest === "all-students" ? allStudentsVisible : freshmanVisible;
  };

  // Get contest display name
  const getContestDisplayName = (contestType) => {
    return contestType === "all-students" ? "All Students Contest" : "Freshman Contest";
  };

  // Table columns configuration
  const columns = [
    {
      title: "S.N.",
      dataIndex: "sn",
      key: "sn",
      width: 80,
      render: (sn) => (
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {sn === 1 && <span className="material-icons" style={{ color: '#FFD700' }}>emoji_events</span>}
          {sn === 2 && <span className="material-icons" style={{ color: '#C0C0C0' }}>emoji_events</span>}
          {sn === 3 && <span className="material-icons" style={{ color: '#CD7F32' }}>emoji_events</span>}
          {sn}
        </span>
      ),
    },
    {
      title: "Name of Participant",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hackerrank User ID",
      dataIndex: "hackerrankId",
      key: "hackerrankId",
    },
    {
      title: "Total Score",
      dataIndex: "totalScore",
      key: "totalScore",
    },
    {
      title: "Session-I",
      dataIndex: "sessionOne",
      key: "sessionOne",
    },
    {
      title: "Session-II",
      dataIndex: "sessionTwo",
      key: "sessionTwo",
    },
    {
      title: "Session-III",
      dataIndex: "sessionThree",
      key: "sessionThree",
    },
    {
      title: "Session-IV",
      dataIndex: "sessionFour",
      key: "sessionFour",
    },
  ];

  // Fetch leaderboard data on component mount
  useEffect(() => {
    fetchAllContestData();
    fetchChallenges();
  }, []);

  const fetchAllContestData = async () => {
    try {
      setLoading(true);
      await Promise.all([
        fetchContestData("all-students", setAllStudentsData),
        fetchContestData("freshman", setFreshmanData)
      ]);
    } finally {
      setLoading(false);
    }
  };

  const fetchContestData = async (contestType, setDataFunction) => {
    try {
      if (!db) {
        throw new Error("Firebase DB is not initialized");
      }

      const collectionName = contestType === "all-students" ? "all-contest" : "freshman-contest";
      const leaderboardRef = doc(db, collectionName, "leaderboard");

      try {
        const leaderboardDoc = await getDoc(leaderboardRef);
        if (leaderboardDoc.exists()) {
          const data = leaderboardDoc.data().participants || [];
          const isVisible = leaderboardDoc.data().isVisible || false;
          
          setDataFunction(data);
          
          // Set visibility state
          if (contestType === "all-students") {
            setAllStudentsVisible(isVisible);
          } else {
            setFreshmanVisible(isVisible);
          }
        } else {
          await setDoc(leaderboardRef, {
            participants: [],
            isVisible: false,
          });
          setDataFunction([]);
        }
      } catch (error) {
        console.error(`Firebase error for ${contestType}:`, error);
        if (error.code === "failed-precondition" || error.message.includes("offline")) {
          message.warning("You appear to be offline. Some data may not be available.");
          setDataFunction([]);
        } else {
          message.error(`Failed to load ${getContestDisplayName(contestType)} data`);
        }
      }
    } catch (error) {
      console.error(`Error fetching ${contestType} data:`, error);
      message.error(`Failed to load ${getContestDisplayName(contestType)} data`);
    }
  };

  const fetchChallenges = async () => {
    try {
      // Check if Firebase is initialized properly
      if (!db) {
        throw new Error("Firebase DB is not initialized");
      }

      const challengesCollection = collection(db, "challenges");
      try {
        const challengesSnapshot = await getDocs(challengesCollection);
        const challengesList = challengesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setChallenges(challengesList);
      } catch (error) {
        console.error("Firebase error:", error);
        if (
          error.code === "failed-precondition" ||
          error.message.includes("offline")
        ) {
          message.warning(
            "You appear to be offline. Challenge data may not be available."
          );
          setChallenges([]);
        } else {
          message.error("Failed to load challenges");
        }
      }
    } catch (error) {
      console.error("Error fetching challenges:", error);
      message.error("Failed to load challenges");
      setChallenges([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = (password) => {
    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      setIsAdmin(true);
      setIsPasswordModalVisible(false);
      message.success("Admin access granted");
    } else {
      message.error("Incorrect password");
    }
  };

  const processCSV = (file) => {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const processedData = results.data
            .filter((row) => row["S.N."] && row["Name of Participant"])
            .map((row) => ({
              sn: parseInt(row["S.N."]),
              name: row["Name of Participant"],
              hackerrankId: row["Hackerrank User ID"],
              totalScore: parseFloat(row["Total Score"]) || 0,
              sessionOne: row["Session-I"] || "0",
              sessionTwo: row["Session-II"] || "0",
              sessionThree: row["Session-III"] || "0",
              sessionFour: row["Session-IV"] || "0",
            }));
          resolve(processedData);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  };

  const handleCSVUpload = async ({ file }) => {
    try {
      setLoading(true);
      const processedData = await processCSV(file);

      // Determine collection name based on upload contest type
      const collectionName = uploadContestType === "all-students" ? "all-contest" : "freshman-contest";
      const leaderboardRef = doc(db, collectionName, "leaderboard");
      
      await setDoc(leaderboardRef, {
        participants: processedData,
        lastUpdated: new Date().toISOString(),
        isVisible: true, // Make visible when CSV is uploaded
      });

      // Refresh the specific contest data and visibility
      if (uploadContestType === "all-students") {
        await fetchContestData("all-students", setAllStudentsData);
      } else {
        await fetchContestData("freshman", setFreshmanData);
      }
      
      message.success(`${getContestDisplayName(uploadContestType)} leaderboard updated and made visible!`);
      setIsUploadModalVisible(false);
    } catch (error) {
      console.error("Error uploading CSV:", error);
      if (error.code === "permission-denied") {
        message.error(
          "Permission denied. Please check your admin credentials."
        );
      } else {
        message.error("Failed to update leaderboard. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SEO seo={seo} />
      <div className="codeclash-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title
            className="neon-text"
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            CODE CLASH: Evening Edition
          </Title>

          <Text
            className="gradient-text"
            style={{
              display: "block",
              textAlign: "center",
              fontSize: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            Solve LeetCode-style programming challenges, sharpen your skills,
            compete with peers, and have a blast while prepping for your dream
            job!
          </Text>

          <Row gutter={[24, 24]} className="features-grid">
            {features.map((feature, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="feature-card">
                    {feature.icon}
                    <Title level={4} className="gradient-text">
                      {feature.title}
                    </Title>
                    <Text style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                      {feature.description}
                    </Text>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <div className="event-info">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Title
                level={3}
                className="gradient-text"
                style={{ textAlign: "center", marginBottom: "1rem" }}
              >
                BI-WEEKLY EVENT
              </Title>
              <Title
                level={1}
                className="neon-text"
                style={{ textAlign: "center", marginBottom: "1rem" }}
              >
                Hemphill 203
              </Title>
              <Title
                level={3}
                style={{
                  textAlign: "center",
                  color: "white",
                  marginBottom: "0.5rem",
                }}
              >
                October 28, 2025
              </Title>
              <Title
                level={4}
                style={{
                  textAlign: "center",
                  color: "white",
                  marginBottom: "2rem",
                }}
              >
                5:40 PM - 6:40 PM
              </Title>

                {/**
                 * <div style={{ display: "flex", justifyContent: "center" }}>
                <Button size="large" className="neon-button">
                  Register Now
                </Button>
              </div>
                 */}
              
            </motion.div>
          </div>
          
          {(isAdmin || allStudentsVisible || freshmanVisible) && (
            <div className="leaderboard-container">
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "2rem", flexDirection: "column", gap: "1rem" }}>
                <Title
                  level={2}
                  className="gradient-text"
                  style={{ margin: 0 }}
                >
                  Leaderboard
                </Title>
                
                {(allStudentsVisible || freshmanVisible || isAdmin) && (
                  <div className="contest-selector">
                    <div 
                      className={`contest-tab ${currentContest === "all-students" ? "active" : ""} ${!allStudentsVisible && !isAdmin ? "disabled" : ""}`}
                      onClick={() => (allStudentsVisible || isAdmin) && setCurrentContest("all-students")}
                    >
                      All Students Contest
                      {!allStudentsVisible && !isAdmin && <LockOutlined style={{ marginLeft: "8px" }} />}
                    </div>
                    <div 
                      className={`contest-tab ${currentContest === "freshman" ? "active" : ""} ${!freshmanVisible && !isAdmin ? "disabled" : ""}`}
                      onClick={() => (freshmanVisible || isAdmin) && setCurrentContest("freshman")}
                    >
                      Freshman Contest
                      {!freshmanVisible && !isAdmin && <LockOutlined style={{ marginLeft: "8px" }} />}
                    </div>
                  </div>
                )}
              </div>

              {(isAdmin || isCurrentContestVisible()) && (
                <>
                  <Title
                    level={4}
                    style={{ textAlign: "center", color: "white", marginBottom: "1rem" }}
                  >
                    {getContestDisplayName(currentContest)}
                  </Title>

                  {loading ? (
                    <div className="loading-container">
                      <Spin size="large" />
                    </div>
                  ) : (
                    <Table
                      dataSource={getCurrentLeaderboardData()}
                      columns={columns}
                      rowKey="sn"
                      pagination={false}
                      className="leaderboard-table"
                    />
                  )}
                </>
              )}

              {!isAdmin && !isCurrentContestVisible() && (
                <div style={{ textAlign: "center", padding: "2rem", color: "rgba(255, 255, 255, 0.6)" }}>
                  <LockOutlined style={{ fontSize: "2rem", marginBottom: "1rem" }} />
                  <Text style={{ display: "block", color: "rgba(255, 255, 255, 0.6)" }}>
                    This contest leaderboard is not yet available.
                  </Text>
                </div>
              )}
            </div>
          )}

          <Text
            style={{
              textAlign: "center",
              color: "white",
              marginTop: "2rem",
              display: "block",
            }}
          >
             We are looking to make it more competitive and engaging - join us for coding battles to win cash prizes!
          </Text>
        </motion.div>

        {/* Password Modal */}
        <Modal
          title="Enter Admin Password"
          open={isPasswordModalVisible}
          onCancel={() => setIsPasswordModalVisible(false)}
          footer={null}
        >
          <Input.Password
            placeholder="Enter password"
            onPressEnter={(e) => handlePasswordSubmit(e.target.value)}
          />
        </Modal>

        {/* Upload Modal */}
        <Modal
          title="Upload CSV File"
          open={isUploadModalVisible}
          onCancel={() => setIsUploadModalVisible(false)}
          footer={null}
        >
          <div style={{ marginBottom: "1rem" }}>
            <Text strong>Select Contest Type:</Text>
            <Select
              value={uploadContestType}
              onChange={setUploadContestType}
              style={{ width: "100%", marginTop: "0.5rem" }}
              size="large"
            >
              <Option value="all-students">All Students Contest</Option>
              <Option value="freshman">Freshman Contest</Option>
            </Select>
          </div>
          
          <Dragger
            name="file"
            multiple={false}
            accept=".csv"
            customRequest={({ file, onSuccess }) => {
              handleCSVUpload({ file });
              onSuccess("ok");
            }}
            showUploadList={false}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag CSV file to upload</p>
            <p className="ant-upload-hint">
              Upload CSV for {getContestDisplayName(uploadContestType)}
            </p>
            <p className="ant-upload-hint">
              The CSV should contain columns: Name of Participant, Hackerrank User ID, Total Score, Session-I, Session-II, Session-III, Session-IV
            </p>
          </Dragger>
        </Modal>

        {/* Admin Button */}
        <FloatButton.Group trigger="hover" style={{ right: 24, bottom: 24 }}>
          {isAdmin ? (
            <>
              <FloatButton
                icon={<UploadOutlined />}
                tooltip="Upload CSV"
                onClick={() => setIsUploadModalVisible(true)}
              />
              <FloatButton
                icon={<LockOutlined />}
                tooltip="Admin Mode Active"
                type="primary"
              />
            </>
          ) : (
            <FloatButton
              icon={<LockOutlined />}
              tooltip="Admin Login"
              onClick={() => setIsPasswordModalVisible(true)}
            />
          )}
        </FloatButton.Group>
      </div>
    </>
  );
};

export default CodeClash;
