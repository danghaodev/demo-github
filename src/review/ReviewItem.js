import React from "react";
import { ReviewData } from "./ReviewData";
import { Carousel } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
const ReviewItem = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
};

export default ReviewItem;
