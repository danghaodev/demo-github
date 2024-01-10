import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import timeLineStyles from "./timeLineStyles.module.css";

const TimeLineItemRight = (props) => {
  return (
    <Container>
      <Row>
        <Col
          xs={1}
          sm={{ span: 1, offset: 6 }}
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
        <Col className="pb-4" xs={10} sm={5} lg={4}>
          <h5 className={timeLineStyles.timeLineTitleRight}>
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

export default TimeLineItemRight;
