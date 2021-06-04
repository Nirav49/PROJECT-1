import React from "react";
import "antd/dist/antd.css";
import { YoutubePlayer } from "reactjs-media";
import { Row, Col, Divider } from "antd";
import { RadarChartOutlined, TagsOutlined } from "@ant-design/icons";

const Expertise_section = () => {
  return (
    <div className="expertise-section" style={{ textAlign: "center" }}>
      <h2>Technology Overview</h2>
      <Row>
        <Col span={12}>
          <div className="left-grid">
            <RadarChartOutlined />
            <Divider type="vertical">
              <h2>Road understanding AI in real time</h2>
            </Divider>
            <Divider></Divider>
            <p>Fast and powerful AIs powered by our ground-breaking</p>
            <p>efficient deep learning technologies, enables our road</p>
            <p>understanding AI to distinguish and detect lanes, semantic</p>
            <p>
              categories, object categories, distance, and tracking, as well
            </p>
            <p>as 3d building geometry and dense depth estimation, all in</p>
            <p>real-time.</p>
          </div>
        </Col>
        <Col span={12}>
          <div className='grid-video' >
          <YoutubePlayer
                src="https://www.youtube.com/watch?v=4jmsHaJ7xEA"
                width={500}
                height={300}
            />
          </div>
        </Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col span={12}>
          <div className='grid-video'>
          <YoutubePlayer
                src="https://www.youtube.com/watch?v=4jmsHaJ7xEA"
                width={500}
                height={300}
            />
          </div>
        </Col>
        <Col span={12}>
          <div className="right-grid">
            <TagsOutlined />
            <Divider type="vertical">
              <h2>On-the-edge automotive computation</h2>
            </Divider>
            <Divider></Divider>
            <p>Fast and powerful AIs powered by our ground-breaking</p>
            <p>efficient deep learning technologies, enables our road</p>
            <p>understanding AI to distinguish and detect lanes, semantic</p>
            <p>
              categories, object categories, distance, and tracking, as well
            </p>
            <p>as 3d building geometry and dense depth estimation, all in</p>
            <p>real-time.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Expertise_section;
