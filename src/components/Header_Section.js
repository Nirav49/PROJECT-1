import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Anchor } from "antd";

function Header_Section() {
  const { Link } = Anchor;
  return (
    <div className="navigation">
      <div className="background-image">
          
      </div>
      <Layout>
        <Anchor>
          <Menu mode="horizontal">
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
      </Layout>
    </div>
  );
}

export default Header_Section;
