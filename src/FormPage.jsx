import { Button, Form, Input, Checkbox } from "antd";
import axios from "axios";
import React from "react";

function FormPage() {
  const onFinish = async(values) => {
    const res = await axios.post('https://northwind.vercel.app/api/suppliers' ,values)
    console.log("Success:", res);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Company name"
        name="companyName"
        rules={[
          {
            required: true,
            message: "Please input your cpmpany name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contact name"
        name="contactName"
        rules={[
          {
            required: true,
            message: "Please input your contact name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contact title"
        name="contactTitle"
        rules={[
          {
            required: true,
            message: "Please input your contact title!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormPage;
