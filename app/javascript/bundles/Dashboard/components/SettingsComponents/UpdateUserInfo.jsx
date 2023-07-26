import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const UpdateUserInfoModal = ({ visible, onCancel, onUpdate, type }) => {
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
			{type === 'name' ? (
      <Form form={form}>
        <Form.Item label="Password" name="current_password" rules={[{ required: true, message: 'Please enter your password'}]}>
          <Input type='password'/>
        </Form.Item>
        <Form.Item 
					label="Name" 
					name="name" 
					rules={[
						{ required: true, message: 'Please enter your email' }
					]}>
          <Input />
        </Form.Item>
      </Form>
			) : type === 'email' ? (
      <Form form={form}>
        <Form.Item label="Password" name="current_password" rules={[{ required: true, message: 'Please enter your password' }]}>
          <Input type='password'/>
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
			) : type === 'password' ? (
			<Form form={form}>
			<Form.Item 
				label="Current Password" 
				name="current_password"
				rules={[
					{ required: true, message: 'Please enter your password' }
					]}>
				<Input type='password'/>
			</Form.Item>
			<Form.Item 
				label="New Password" 
				name="new_password" 
				rules={[
					{ required: true, message: 'Please enter your password' }
					]}>
				<Input type='password'/>
			</Form.Item>
			<Form.Item 
				label="New Password Comfirmation" 
				name="new_password_confirmation" 
				rules={[
					{ required: true, message: 'Please enter your password' }
					]}>
				<Input type='password'/>
			</Form.Item>
		</Form>
			) : null }
    </Modal>
  );
};

export default UpdateUserInfoModal;