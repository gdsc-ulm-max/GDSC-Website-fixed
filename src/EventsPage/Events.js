import React, { useState, useMemo, useEffect } from "react";
import {
  Card,
  Typography,
  Button,
  Modal,
  Form,
  Input,
  message,
  FloatButton,
  DatePicker,
  Divider,
  Popconfirm,
  Spin,
  Row,
  Col,
} from "antd";
import { LockOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";
import dayjs from "dayjs";
import "./Events.css";
import { events as initialEvents } from "../logo/EventsData";
import Animation from "../HomePage/Animation";
import { useNavigate } from "react-router-dom";
import FlagshipEvents from "../components/FlagshipEvents";

const { Title, Text } = Typography;
const { TextArea } = Input;

function Events() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [eventsList, setEventsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // Fetch events from Firebase and seed initial data if empty
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsQuery = query(
          collection(db, "events"),
          orderBy("endDate", "desc")
        );
        const querySnapshot = await getDocs(eventsQuery);
        const events = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // If no events exist, seed with initial data
        if (events.length === 0) {
          const seededEvents = await Promise.all(
            initialEvents.map(async (event) => {
              const newEvent = {
                ...event,
                endDate: new Date(2023, 11, 1).toISOString(), // Default to Dec 1, 2023
                createdAt: new Date().toISOString(),
              };
              const docRef = await addDoc(collection(db, "events"), newEvent);
              return { id: docRef.id, ...newEvent };
            })
          );
          setEventsList(seededEvents);
          message.success("Initial events added successfully!");
        } else {
          setEventsList(events);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        message.error("Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const { upcomingEvents, pastEvents } = useMemo(() => {
    const now = dayjs();
    return eventsList.reduce(
      (acc, event) => {
        if (dayjs(event.endDate).isAfter(now)) {
          acc.upcomingEvents.push(event);
        } else {
          acc.pastEvents.push(event);
        }
        return acc;
      },
      { upcomingEvents: [], pastEvents: [] }
    );
  }, [eventsList]);

  const showPasswordModal = () => {
    setIsPasswordModalVisible(true);
  };

  const handlePasswordSubmit = (values) => {
    if (values.password === "gdsc123") {
      setIsPasswordModalVisible(false);
      setIsAdmin(true);
      message.success("Admin access granted");
    } else {
      message.error("Incorrect password");
    }
  };

  const handleAddEventClick = () => {
    if (isAdmin) {
      setIsModalVisible(true);
    } else {
      showPasswordModal();
    }
  };

  const handleAddEvent = async (values) => {
    try {
      setLoading(true);
      const newEvent = {
        name: values.name,
        info: values.description,
        link: values.link,
        endDate: values.endDate.toISOString(),
        createdAt: new Date().toISOString(),
      };

      const docRef = await addDoc(collection(db, "events"), newEvent);
      setEventsList([{ id: docRef.id, ...newEvent }, ...eventsList]);
      setIsModalVisible(false);
      form.resetFields();
      message.success("Event added successfully!");
    } catch (error) {
      console.error("Error adding event:", error);
      message.error("Failed to add event");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "events", eventId));
      setEventsList(eventsList.filter((event) => event.id !== eventId));
      message.success("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event:", error);
      message.error("Failed to delete event");
    } finally {
      setLoading(false);
    }
  };

  const renderEventCard = (event, isPast) => (
    <Card
      key={event.id}
      hoverable
      className={`eventCard ${isPast ? "past-event" : ""}`}
      onClick={() => {
        if (event.name === "Hawkthon") {
          navigate("/events/hawkthon");
        } else if (event.link) {
          window.open(event.link, "_blank");
        }
      }}
      extra={
        isAdmin && (
          <Popconfirm
            title="Delete Event"
            description="Are you sure you want to delete this event?"
            onConfirm={(e) => {
              e.stopPropagation();
              handleDeleteEvent(event.id);
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              className="delete-button"
              onClick={(e) => e.stopPropagation()}
            />
          </Popconfirm>
        )
      }
    >
      <Card.Meta
        title={event.name}
        description={
          <div className="event-content">
            <Text className="eventDescription">{event.info}</Text>
            {!isPast && (
              <Text className="event-date">
                Ends on: {dayjs(event.endDate).format("MMM D, YYYY")}
              </Text>
            )}
            {!isPast && event.name !== "Hawkthon" && (
              <Button
                type="primary"
                href={event.link}
                target="_blank"
                className="viewEventButton"
                onClick={(e) => e.stopPropagation()}
              >
                View Event
              </Button>
            )}
            {!isPast && event.name === "Hawkthon" && (
              <Button
                type="primary"
                className="viewEventButton"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/events/hawkthon");
                }}
              >
                View Hawkthon
              </Button>
            )}
          </div>
        }
      />
    </Card>
  );

  const renderEventGrid = (events, title, isPast = false) => (
    <div
      className={`event-section ${isPast ? "past-events" : "upcoming-events"}`}
    >
      <Title
        level={2}
        className={`section-title ${isPast ? "past-title" : "upcoming-title"}`}
      >
        {title}
      </Title>
      <div className="eventGrid">
        {events.map((event) => renderEventCard(event, isPast))}
        {events.length === 0 && (
          <div className="no-events">
            <Text>No {title.toLowerCase()} at the moment</Text>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="events-page">
      <Animation />
      <Title level={1} style={{ textAlign: "center", marginBottom: "2rem" }}>
        Events
      </Title>

      {/* Flagship Events - always rendered */}
      <div className="flagship-events-section">
        <FlagshipEvents />
      </div>

      {/* Dynamic Events Section */}
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : (
        <>
          {renderEventGrid(upcomingEvents, "Upcoming Events")}
          <Divider className="section-divider" />
          {renderEventGrid(pastEvents, "Past Events", true)}
        </>
      )}

      {/* Password Modal */}
      <Modal
        title="Enter Admin Password"
        open={isPasswordModalVisible}
        onCancel={() => setIsPasswordModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handlePasswordSubmit}>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input the password!" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Add Event Modal */}
      <Modal
        title="Add New Event"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleAddEvent}>
          <Form.Item
            name="name"
            label="Event Name"
            rules={[
              { required: true, message: "Please input the event name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="description"
            label="Event Description"
            rules={[
              {
                required: true,
                message: "Please input the event description!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="link"
            label="Event Link"
            rules={[
              { required: true, message: "Please input the event link!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="endDate"
            label="Event End Date"
            rules={[
              { required: true, message: "Please select the event end date!" },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              disabledDate={(current) =>
                current && current < dayjs().startOf("day")
              }
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Event
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Admin Buttons */}
      <FloatButton.Group trigger="hover" style={{ right: 24, bottom: 24 }}>
        {isAdmin ? (
          <>
            <FloatButton
              icon={<PlusOutlined />}
              tooltip="Add Event"
              onClick={() => setIsModalVisible(true)}
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
            onClick={showPasswordModal}
          />
        )}
      </FloatButton.Group>
    </div>
  );
}

export default Events;
