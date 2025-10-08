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
  Upload,
  Select,
  Space,
  Checkbox,
} from "antd";
import {
  LockOutlined,
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
  EditOutlined,
} from "@ant-design/icons";
import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
  query,
  orderBy,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import dayjs from "dayjs";
import "./Events.css";
import { events as initialEvents } from "../logo/EventsData";
import Animation from "../HomePage/Animation";
import { useNavigate, Link } from "react-router-dom";
import SEO from "../components/SEO";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

function Events({ seo }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [eventsList, setEventsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isTbdDate, setIsTbdDate] = useState(false);
  const navigate = useNavigate();

  // Add state for managing tags
  const [tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState("");

  // Add state for managing multiple buttons
  const [buttons, setButtons] = useState([{ text: "", link: "" }]);

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
        // Always put TBD events in upcoming events
        if (event.isTbdDate || event.endDate === "TBD") {
          acc.upcomingEvents.push(event);
        } else if (dayjs(event.endDate).isAfter(now)) {
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

  const handlePasswordSubmit = async (values) => {
    if (values.password === "gdscadmin2025") {
      setIsPasswordModalVisible(false);
      setIsAdmin(true);
      message.success("Admin access granted");
    } else {
      message.error("Incorrect password");
    }
  };

  // Remove sign out handler since we're not using Firebase Auth
  const handleSignOut = () => {
    setIsAdmin(false);
    message.success("Signed out successfully");
  };

  const handleAddEventClick = () => {
    if (isAdmin) {
      setIsModalVisible(true);
    } else {
      showPasswordModal();
    }
  };

  const handleAddButton = () => {
    setButtons([...buttons, { text: "", link: "" }]);
  };

  const handleRemoveButton = (index) => {
    const newButtons = buttons.filter((_, i) => i !== index);
    setButtons(newButtons);
  };

  const handleButtonChange = (index, field, value) => {
    const newButtons = [...buttons];
    newButtons[index][field] = value;
    setButtons(newButtons);
  };

  // Handle image upload
  const handleUpload = async (file) => {
    try {
      // Remove Firebase Auth check - just check if admin
      if (!isAdmin) {
        message.error("You must be logged in as admin to upload images");
        return null;
      }

      // Validate file type
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
        return null;
      }

      // Validate file size (less than 2MB)
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Image must be smaller than 2MB!");
        return null;
      }

      setUploading(true);

      // Create a unique filename to avoid conflicts
      const fileName = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
      const storageRef = ref(storage, `logos/${fileName}`);

      try {
        // Upload the file
        const uploadTask = await uploadBytes(storageRef, file);
        console.log("File uploaded successfully:", uploadTask);

        // Get the download URL
        const downloadURL = await getDownloadURL(storageRef);
        console.log("Download URL obtained:", downloadURL);

        setImageUrl(downloadURL);
        message.success("Image uploaded successfully!");
        return downloadURL;
      } catch (error) {
        if (error.code === "storage/unauthorized") {
          message.error(
            "Permission denied. Please make sure you are logged in as admin."
          );
        } else {
          message.error(`Upload failed: ${error.message}`);
        }
        console.error("Error during upload:", error);
        return null;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      message.error(`Failed to upload image: ${error.message}`);
      return null;
    } finally {
      setUploading(false);
    }
  };

  // Handle edit event
  const handleEdit = (event) => {
    setEditingEvent(event);
    setIsEditMode(true);
    setImageUrl(event.logo || "");
    setTags(event.tags || []);
    setButtons(event.buttons || [{ text: "", link: "" }]);
    setIsTbdDate(event.isTbdDate || false);
    form.setFieldsValue({
      name: event.name,
      description: event.info,
      color: event.color,
      endDate: event.isTbdDate ? null : dayjs(event.endDate),
    });
    setIsModalVisible(true);
  };

  // Modified handleAddEvent to handle both add and edit
  const handleAddEvent = async (values) => {
    try {
      setLoading(true);
      const eventData = {
        name: values.name,
        info: values.description,
        logo: imageUrl,
        tags: tags,
        buttons: buttons.filter((btn) => btn.text && btn.link),
        color: values.color || "#4285F4", // Default to Google Blue
        endDate: isTbdDate ? "TBD" : values.endDate.toISOString(),
        createdAt: new Date().toISOString(),
        isTbdDate: isTbdDate,
      };

      if (isEditMode && editingEvent) {
        // Update existing event
        const eventRef = doc(db, "events", editingEvent.id);
        await updateDoc(eventRef, eventData);
        setEventsList(
          eventsList.map((event) =>
            event.id === editingEvent.id
              ? { ...eventData, id: event.id }
              : event
          )
        );
        message.success("Event updated successfully!");
      } else {
        // Add new event
        const docRef = await addDoc(collection(db, "events"), eventData);
        setEventsList([{ ...eventData, id: docRef.id }, ...eventsList]);
        message.success("Event added successfully!");
      }

      // Reset form and state
      setIsModalVisible(false);
      form.resetFields();
      setImageUrl("");
      setTags([]);
      setButtons([{ text: "", link: "" }]);
      setEditingEvent(null);
      setIsEditMode(false);
      setIsTbdDate(false);
    } catch (error) {
      console.error(
        isEditMode ? "Error updating event:" : "Error adding event:",
        error
      );
      message.error(
        isEditMode ? "Failed to update event" : "Failed to add event"
      );
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
    <div className="event-card" key={event.id}>
      <div
        className="event-header"
        style={{ backgroundColor: `${event.color}15` }}
      >
        <img src={event.logo} alt={event.name} className="event-logo" />
        <h3 style={{ color: event.color }}>{event.name}</h3>
      </div>
      <div className="event-content">
        <div className="event-tags">
          {event.tags &&
            event.tags.map((tag, idx) => (
              <span
                key={idx}
                className="event-tag"
                style={{
                  backgroundColor: `${event.color}15`,
                  color: event.color,
                }}
              >
                {tag}
              </span>
            ))}
        </div>
        <p className="event-description">{event.info}</p>
        <div className="event-dates">
          <div className="date-item">
            <span className="date-label">Event Date</span>
            <span className="date-value">
              {event.isTbdDate
                ? "TBD"
                : dayjs(event.endDate).format("MMM D, YYYY")}
            </span>
          </div>
        </div>
        {event.buttons && event.buttons.length > 0 && (
          <div className="event-buttons">
            {event.buttons.map((button, idx) =>
              button.link.startsWith("http") ? (
                <a
                  key={idx}
                  href={button.link}
                  className="event-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: event.color,
                    display: "inline-block",
                    width: "fit-content",
                    margin: "0 8px",
                  }}
                >
                  {button.text}
                </a>
              ) : (
                <Link
                  key={idx}
                  to={button.link}
                  className="event-button"
                  style={{
                    backgroundColor: event.color,
                    display: "inline-block",
                    width: "fit-content",
                    margin: "0 8px",
                  }}
                >
                  {button.text}
                </Link>
              )
            )}
          </div>
        )}
        {isAdmin && (
          <div className="admin-buttons">
            <Button
              type="text"
              icon={<EditOutlined />}
              className="edit-button"
              onClick={(e) => {
                e.stopPropagation();
                handleEdit(event);
              }}
            />
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
          </div>
        )}
      </div>
    </div>
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
    <>
      <SEO seo={seo} />
      <div className="events-page">
        <Animation />
        <Title level={1} style={{ textAlign: "center", marginBottom: "2rem" }}>
          Events
        </Title>

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
              rules={[
                { required: true, message: "Please input the password!" },
              ]}
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

        {/* Add/Edit Event Modal */}
        <Modal
          title={isEditMode ? "Edit Event" : "Add New Event"}
          open={isModalVisible}
          onCancel={() => {
            setIsModalVisible(false);
            form.resetFields();
            setImageUrl("");
            setTags([]);
            setButtons([{ text: "", link: "" }]);
            setEditingEvent(null);
            setIsEditMode(false);
            setIsTbdDate(false);
          }}
          footer={null}
          width={800}
        >
          <Form form={form} onFinish={handleAddEvent} layout="vertical">
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
              label="Description"
              rules={[
                { required: true, message: "Please input the description!" },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item label="Event Logo">
              <Upload
                listType="picture-card"
                showUploadList={false}
                accept="image/*"
                maxCount={1}
                beforeUpload={async (file) => {
                  try {
                    const url = await handleUpload(file);
                    if (url) {
                      setImageUrl(url);
                    }
                  } catch (error) {
                    console.error("Upload error:", error);
                  }
                  return false; // Prevent automatic upload
                }}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="event"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div>
                    {uploading ? <Spin /> : <PlusOutlined />}
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                )}
              </Upload>
            </Form.Item>

            <Form.Item
              name="color"
              label="Theme Color"
              rules={[{ required: true, message: "Please select a color!" }]}
            >
              <Select>
                <Option value="#4285F4">Google Blue</Option>
                <Option value="#DB4437">Google Red</Option>
                <Option value="#F4B400">Google Yellow</Option>
                <Option value="#0F9D58">Google Green</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Tags">
              <Space style={{ marginBottom: 8 }}>
                <Input
                  value={inputTag}
                  onChange={(e) => setInputTag(e.target.value)}
                  placeholder="Enter a tag"
                />
                <Button
                  type="primary"
                  onClick={() => {
                    if (inputTag && !tags.includes(inputTag)) {
                      setTags([...tags, inputTag]);
                      setInputTag("");
                    }
                  }}
                >
                  Add Tag
                </Button>
              </Space>
              <div style={{ marginTop: 8 }}>
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      background: "#f0f0f0",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      margin: "0 8px 8px 0",
                      display: "inline-block",
                    }}
                  >
                    {tag}
                    <DeleteOutlined
                      onClick={() =>
                        setTags(tags.filter((_, i) => i !== index))
                      }
                      style={{ marginLeft: 8, cursor: "pointer" }}
                    />
                  </span>
                ))}
              </div>
            </Form.Item>

            <Form.Item label="Buttons">
              {buttons.map((button, index) => (
                <div
                  key={index}
                  style={{ marginBottom: 16, display: "flex", gap: 8 }}
                >
                  <Input
                    placeholder="Button Text"
                    value={button.text}
                    onChange={(e) =>
                      handleButtonChange(index, "text", e.target.value)
                    }
                    style={{ width: "30%" }}
                  />
                  <Input
                    placeholder="Button Link"
                    value={button.link}
                    onChange={(e) =>
                      handleButtonChange(index, "link", e.target.value)
                    }
                    style={{ width: "50%" }}
                  />
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleRemoveButton(index)}
                    disabled={buttons.length === 1}
                  />
                </div>
              ))}
              <Button
                type="dashed"
                onClick={handleAddButton}
                block
                icon={<PlusOutlined />}
              >
                Add Button
              </Button>
            </Form.Item>

            <Form.Item label="Event Date">
              <Space>
                <Form.Item
                  name="endDate"
                  noStyle
                  rules={[
                    {
                      required: !isTbdDate,
                      message: "Please select the event date or mark as TBD!",
                    },
                  ]}
                >
                  <DatePicker style={{ width: "200px" }} disabled={isTbdDate} />
                </Form.Item>
                <Form.Item noStyle>
                  <Checkbox
                    checked={isTbdDate}
                    onChange={(e) => {
                      setIsTbdDate(e.target.checked);
                      if (e.target.checked) {
                        form.setFieldValue("endDate", null);
                      }
                    }}
                  >
                    TBD
                  </Checkbox>
                </Form.Item>
              </Space>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                {isEditMode ? "Update Event" : "Add Event"}
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
                onClick={handleAddEventClick}
              />
              <FloatButton
                icon={<LockOutlined />}
                tooltip="Sign Out"
                onClick={handleSignOut}
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
}

export default Events;
