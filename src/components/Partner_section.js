import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Image } from "antd";

const Partner_section = () => {
  return (
    <div className="partner-section" style={{ textAlign: "center" }}>
      <h1>Partner Section</h1>
      <Row>
        <Col span={12}>
          <h2>Partner</h2>
          <p>Fast and powerful AIs powered by our ground-breaking</p>
          <p>efficient deep learning technologies, enables our road</p>
          <p>understanding AI to distinguish and detect lanes, semantic</p>
        </Col>
        <Col span={12}>
          <div className="partner-circle">
            <Image
              width={500}
              height={300}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Partner_section;
