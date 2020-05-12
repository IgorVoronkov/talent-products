/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Button, Form, Input } from 'antd';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
};

const tailLayout = {
  wrapperCol: { offset: 2, span: 8 },
};

export default function AddProductForm() {
  const onFinish = (values: any) => {
    axios
      .post('https://talent-products.firebaseio.com/products.json', values)
      .then((res: AxiosResponse<any>) => {
        console.log(res.data);
      });
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error('Failed:', errorInfo);
  };

  return (
    <Form {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'required' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: 'required' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'required' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Add new product
        </Button>
      </Form.Item>
    </Form>
  );
}
