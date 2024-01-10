import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import timeLineStyles from "./timeLineStyles.module.css";

const TimeLineItemLeft = (props) => {
  return (
    <Container>
      <Row>
        <Col
          xs={1}
          sm={{ order: "second" }}
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ maxWidth: "60px" }}
        >
          <div className={timeLineStyles.timeLineIcon}>
            <i className={props.data.class}></i>
          </div>
          <div
            style={{
              width: "3.5px",
              height: "85%",
              backgroundColor: "#ee4d4d",
            }}
          ></div>
        </Col>
        <Col
          className="pb-4"
          xs={11}
          sm={{ span: 5, offset: 1, order: "first" }}
          lg={{ span: 4, offset: 2, order: "first" }}
        >
          <h5 className={timeLineStyles.timeLineTitleLeft}>
            {props.data.title}
          </h5>
          <div className={timeLineStyles.timeLineConainer}>
            <p>{props.data.text}</p>
            <button className={timeLineStyles.timeLineButton}>button</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TimeLineItemLeft;
