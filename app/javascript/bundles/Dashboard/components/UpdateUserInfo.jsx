import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const UpdateUserInfoModal = ({ visible, onCancel, onUpdate }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      onUpdate(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Update User Information"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="update" type="primary" onClick={handleOk}>
          Update
        </Button>,
      ]}
    >
      <Form form={form}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
          <Input />
        </Form.Item>
        <Form.Item 
					label="Email" 
					name="email" 
					rules={[
						{ required: true, message: 'Please enter your email' },
						{ type: 'email', message: 'Please enter a valid email'}
					]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateUserInfoModal;