import React, { useState, useEffect } from 'react';
import { Card, Modal, Input, Button, message, Select, Spin, Typography } from 'antd';
import { PlusOutlined, LockOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './Forms.css';

const { Title, Text } = Typography;
const { Option } = Select;

const colorOptions = [
  { label: 'Google Blue', value: '#4285f4' },
  { label: 'Google Red', value: '#db4437' },
  { label: 'Google Green', value: '#0f9d58' },
  { label: 'Google Yellow', value: '#f4b400' }
];

const Forms = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [isFormModalVisible, setIsFormModalVisible] = useState(false);
  const [editingForm, setEditingForm] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    link: '',
    color: '#4285f4'
  });

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const formsCollection = collection(db, 'forms');
      const formsSnapshot = await getDocs(formsCollection);
      const formsList = formsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setForms(formsList);
    } catch (error) {
      console.error('Error fetching forms:', error);
      message.error('Failed to load forms');
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

  const showFormModal = (form = null) => {
    if (form) {
      setEditingForm(form);
      setFormData({
        name: form.name,
        link: form.link,
        color: form.color
      });
    } else {
      setEditingForm(null);
      setFormData({
        name: '',
        link: '',
        color: '#4285f4'
      });
    }
    setIsFormModalVisible(true);
  };

  const handleFormSubmit = async () => {
    try {
      if (!formData.name || !formData.link) {
        message.error('Please fill in all fields');
        return;
      }

      const formItem = {
        name: formData.name,
        link: formData.link,
        color: formData.color,
        createdAt: new Date().toISOString()
      };

      if (editingForm) {
        // Update existing form
        const formRef = doc(db, 'forms', editingForm.id);
        await updateDoc(formRef, formItem);
        message.success('Form updated successfully');
      } else {
        // Add new form
        await addDoc(collection(db, 'forms'), formItem);
        message.success('Form added successfully');
      }

      setIsFormModalVisible(false);
      fetchForms();
    } catch (error) {
      console.error('Error saving form:', error);
      message.error('Failed to save form');
    }
  };

  const handleDeleteForm = async (formId) => {
    try {
      await deleteDoc(doc(db, 'forms', formId));
      message.success('Form deleted successfully');
      fetchForms();
    } catch (error) {
      console.error('Error deleting form:', error);
      message.error('Failed to delete form');
    }
  };

  const renderFormCard = (form) => (
    <Card
      key={form.id}
      className="form-card"
      style={{ borderColor: form.color }}
    >
      {isAdmin && (
        <div className="admin-buttons">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => showFormModal(form)}
          />
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteForm(form.id)}
          />
        </div>
      )}
      <Title level={4} style={{ color: form.color }}>{form.name}</Title>
      <a
        href={form.link}
        target="_blank"
        rel="noopener noreferrer"
        className="form-link"
        style={{ backgroundColor: form.color }}
      >
        Open Form
      </a>
    </Card>
  );

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="forms-page">
      <Title level={1} className="page-title">Forms</Title>
      
      {isAdmin && (
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => showFormModal()}
          className="add-form-button"
        >
          Add New Form
        </Button>
      )}

      <div className="forms-grid">
        {forms.map(renderFormCard)}
      </div>

      {!isAdmin && (
        <Button
          icon={<LockOutlined />}
          onClick={() => setIsPasswordModalVisible(true)}
          className="admin-login-button"
        >
          Admin Login
        </Button>
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

      {/* Form Modal */}
      <Modal
        title={editingForm ? "Edit Form" : "Add New Form"}
        open={isFormModalVisible}
        onOk={handleFormSubmit}
        onCancel={() => setIsFormModalVisible(false)}
      >
        <div className="form-input-group">
          <Input
            placeholder="Form Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="form-input-group">
          <Input
            placeholder="Form Link"
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          />
        </div>
        <div className="form-input-group">
          <Select
            value={formData.color}
            onChange={(color) => setFormData({ ...formData, color })}
            style={{ width: '100%' }}
          >
            {colorOptions.map(option => (
              <Option key={option.value} value={option.value}>
                <div className="color-option">
                  <div className="color-preview" style={{ backgroundColor: option.value }} />
                  {option.label}
                </div>
              </Option>
            ))}
          </Select>
        </div>
      </Modal>
    </div>
  );
};

export default Forms; 