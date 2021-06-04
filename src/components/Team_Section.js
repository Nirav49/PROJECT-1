import React, { Fragment, useState } from "react";
import "antd/dist/antd.css";
import { Row, Col, Drawer, Button } from "antd";

const Team_Section = () => {
  const [show, setShow] = useState({ visible: false, placement: "right" });

  const showDrawer = () => {
    setShow({
      visible: true,
    });
  };

  const onClose = () => {
    setShow({
      visible: false,
    });
  };
  return (
    <Fragment>
      <h1>Team Section.</h1>
      <Row>
        <Col span={6}>
          Team Member 1
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
          <Drawer
        title="Team Member 1"
        placement={show.placement}
        closable={false}
        onClose={onClose}
        visible={show.visible}
        key={show.placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
        </Col>
        <Col span={6}>
          Team Member2
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
          <Drawer
        title="Team Member 2"
        placement={show.placement}
        closable={false}
        onClose={onClose}
        visible={show.visible}
        key={show.placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
        </Col>
        <Col span={6}>
          Team Member3
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
        </Col>
        <Col span={6}>
          Team Member4
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
        </Col>
      </Row>

    </Fragment>
  );
};

export default Team_Section;
