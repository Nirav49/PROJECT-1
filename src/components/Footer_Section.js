import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Anchor, Menu, Typography, Input, Button, Form } from "antd";

const Footer_Section = () => {
  const { Title } = Typography;
  const { Link } = Anchor;

  const emailHandler = (email) => {
    console.log(email);
  };

  const validateMessages = {
    required: "${label} is required!",
  };

  return (
    <div className="footer">
      <Row>
        <Col span={8}>
          <div className="footer-left">
            <Title level={3}>Navigate</Title>
            <Anchor>
              <Menu mode="vertical">
                <Menu.Item>
                  <Link href="#home" title="Home" />
                </Menu.Item>
                <Menu.Item>
                  <Link href="#our services" title="Our Services" />
                </Menu.Item>
                <Menu.Item>
                  <Link href="#our expertise" title="Our Expertise" />
                </Menu.Item>
                <Menu.Item>
                  <Link href="#our team" title="Our Team" />
                </Menu.Item>
                <Menu.Item>
                  <Link href="#contact us" title="Contact Us" />
                </Menu.Item>
              </Menu>
            </Anchor>
          </div>
        </Col>
        <Col span={8}>
          <div className="footer-middle">
            <Title style={{ textAlign: "center" }} level={3}>
              Subscribe for Updates.
            </Title>
            <Form onFinish={emailHandler} validateMessages={validateMessages}>
              <Form.Item
                name="email"
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
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: "50px" }}
              >
                Subscribe
              </Button>
            </Form>
          </div>
        </Col>
        <Col span={8}>
          <div className="footer-right" style={{ textAlign: "center" }}>
            <h3>Address</h3>
            <p>1741 Broadway St,</p>
            <p> Fl 3 Redwood City,</p>
            <p> CA 94063 (650) 241-8635</p>
            <a href="#">Twitter-</a>
            <a href="#">LinkedIn</a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="footer-link" style={{ textAlign: "center" }}>
            <a href="#">Terms Of Service.-</a>
            <a href="#">Privacy Policy-</a>
            <a href="#">License-</a>
            <h3>© 2020 Pihar Tecnologies,Inc.</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer_Section;
