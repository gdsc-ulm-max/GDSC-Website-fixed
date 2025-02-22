import React, { useState, useEffect } from "react";
import { 
  Row, 
  Col, 
  Card, 
  Modal, 
  Button, 
  Input, 
  message, 
  Upload, 
  Spin,
  FloatButton,
  Popconfirm 
} from "antd";
import { 
  LockOutlined, 
  DeleteOutlined, 
  PlusOutlined,
  UploadOutlined 
} from "@ant-design/icons";
import { 
  ref, 
  uploadBytes, 
  listAll, 
  getDownloadURL, 
  deleteObject,
  getMetadata 
} from "firebase/storage";
import { storage } from "../firebase";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);

  // Fetch images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const imagesRef = ref(storage, "gallery");
      const imagesList = await listAll(imagesRef);
      
      // Get URLs and metadata for all images
      const imagesData = await Promise.all(
        imagesList.items.map(async (item) => {
          const url = await getDownloadURL(item);
          const metadata = await getMetadata(item);
          return {
            url,
            name: item.name,
            timestamp: metadata.timeCreated,
          };
        })
      );

      // Sort by timestamp, newest first
      const sortedImages = imagesData.sort((a, b) => 
        new Date(b.timestamp) - new Date(a.timestamp)
      );

      setImages(sortedImages);
    } catch (error) {
      console.error("Error fetching images:", error);
      message.error("Failed to load images");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = (password) => {
    if (password === "gdsc123") {
      setIsAdmin(true);
      setIsPasswordModalVisible(false);
      message.success("Admin access granted");
    } else {
      message.error("Incorrect password");
    }
  };

  const handleUpload = async ({ file, onSuccess, onError }) => {
    try {
      setUploadLoading(true);

      // Check if we've reached the 100 image limit
      if (images.length >= 100) {
        // Delete the oldest image
        const oldestImage = images[images.length - 1];
        const oldImageRef = ref(storage, `gallery/${oldestImage.name}`);
        await deleteObject(oldImageRef);
      }

      // Upload new image
      const imageRef = ref(storage, `gallery/${Date.now()}_${file.name}`);
      await uploadBytes(imageRef, file);

      // Refresh the gallery
      await fetchImages();
      message.success(`${file.name} uploaded successfully`);
      onSuccess("ok");
    } catch (error) {
      console.error("Error uploading image:", error);
      message.error(`Failed to upload ${file.name}`);
      onError(error);
    } finally {
      setUploadLoading(false);
    }
  };

  const handleDelete = async (imageName) => {
    try {
      setLoading(true);
      const imageRef = ref(storage, `gallery/${imageName}`);
      await deleteObject(imageRef);
      await fetchImages();
      message.success("Image deleted successfully");
    } catch (error) {
      console.error("Error deleting image:", error);
      message.error("Failed to delete image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gallery-page">
      <h1>GDSC ULM Gallery</h1>

      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[16, 16]} className="gallery-grid">
          {images.map((image, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                cover={<img alt="gallery" src={image.url} />}
                className="gallery-card"
                actions={
                  isAdmin
                    ? [
                        <Popconfirm
                          title="Delete Image"
                          description="Are you sure you want to delete this image?"
                          onConfirm={() => handleDelete(image.name)}
                          okText="Yes"
                          cancelText="No"
                        >
                          <DeleteOutlined key="delete" />
                        </Popconfirm>,
                      ]
                    : undefined
                }
              />
            </Col>
          ))}
        </Row>
      )}

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
        title="Upload Images"
        open={isUploadModalVisible}
        onCancel={() => setIsUploadModalVisible(false)}
        footer={null}
      >
        <Upload.Dragger
          name="file"
          multiple
          customRequest={handleUpload}
          accept="image/*"
          showUploadList={true}
          disabled={uploadLoading}
        >
          <p className="ant-upload-drag-icon">
            <UploadOutlined />
          </p>
          <p className="ant-upload-text">Click or drag images to upload</p>
          {uploadLoading && <Spin />}
        </Upload.Dragger>
      </Modal>

      {/* Admin Buttons */}
      <FloatButton.Group
        trigger="hover"
        style={{ right: 24, bottom: 24 }}
      >
        {isAdmin ? (
          <>
            <FloatButton
              icon={<PlusOutlined />}
              tooltip="Upload Images"
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
  );
};

export default Gallery; 