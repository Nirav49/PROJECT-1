import React from "react";
import "antd/dist/antd.css";
import { Row, Col, List, Divider } from "antd";
import { GitlabOutlined } from "@ant-design/icons";

const MyService_section = () => {
    const developers ="We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.";
    const designers ="We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.";
    const financialexperts ="We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.";
    const projectmanagers ="We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.";
    const productmanagers ="We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.";
    const toptalprojects ="We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.";
 
    return (
    <div className="myservice-section" style={{textAlign: 'center'}}>
    <h1>MyService_section</h1>
      <Row>
        <Col span={8}>
          <GitlabOutlined />
          <h2>Developers..</h2>
          <List>
            <List.Item>{developers}</List.Item>
          </List>
          <a href="">view developers</a>
        </Col>
        <Col span={8}>
          <GitlabOutlined />
          <h2>Designers..</h2>
          <List>
            <List.Item>{designers}</List.Item>
          </List>
          <a href="">view designers</a>
        </Col>
        <Col span={8}>
          <GitlabOutlined />
          <h2>Financial Experts..</h2>
          <List>
            <List.Item>{financialexperts}</List.Item>
          </List>
          <a href="">view financial experts</a>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={8}>
          <GitlabOutlined />
          <h2>Project Managers..</h2>
          <List>
            <List.Item>{projectmanagers}</List.Item>
          </List>
          <a href="">view project managers</a>
        </Col>
        <Col span={8}>
          <GitlabOutlined />
          <h2>Product Managers..</h2>
          <List>
            <List.Item>{productmanagers}</List.Item>
          </List>
          <a href="">view product managers</a>
        </Col>
        <Col span={8}>
          <GitlabOutlined />
          <h2>Toptal® Projects..</h2>
          <List>
            <List.Item>{toptalprojects}</List.Item>
          </List>
          <a href="">view toptal projects</a>
        </Col>
      </Row>
    </div>
  );
};

export default MyService_section;
