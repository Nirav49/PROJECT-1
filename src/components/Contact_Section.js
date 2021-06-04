import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Row, Col, Image } from "antd";

const Contact_Section = () => {
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 8,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 8,
      },
      sm: {
        span: 8,
      },
    },
  };

  const validateMessages = {
    required: "${label} is required!",
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const onFinish = (inputs) => {
    console.log(inputs);
  };

  return (
    <div className="contact-form">
      <h1>Contact Form</h1>
      <Row>
        <Col span={12}>
          <div className="image">
            <Image
              width={400}
              hight={200}
              src="https://dd7tel2830j4w.cloudfront.net/f1505468260832x993779528886079700/letter.svg"
            />
          </div>
        </Col>
        <Col span={12}>
          <div className="form">
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
              validateMessages={validateMessages}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input placeholder="E-mail" />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Phone Number"
                />
              </Form.Item>
              <Form.Item
                name="subject"
                label="Subject"
                rules={[
                  {
                    required: true,
                    message: "Please input your Subject!",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Subject" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[
                  {
                    required: true,
                    message: "Please input your Message!",
                    whitespace: true,
                  },
                ]}
              >
                <Input.TextArea placeholder="Message" />
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: "50px" }}
                >
                  Contact us
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact_Section;
