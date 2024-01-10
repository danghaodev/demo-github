import React from "react";
import { Container, Row } from "react-bootstrap";
import { TimeLineData } from "./TimeLineData";
import TimeLineItemLeft from "./TimeLineItemLeft";
import TimeLineItemRight from "./TimeLineItemRight";

const Timeline = () => {
  return (
    <Container className="mt-5">
      {/* case 1 */}
      {/* <Row key={TimeLineData[0].id}>
        <Col
          xs={1}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className={timeLineStyles.timeLineIcon}>
            <i className={TimeLineData[0].class}></i>
          </div>
          <div
            style={{
              width: "3.5px",
              height: "85%",
              backgroundColor: "#ee4d4d",
            }}
          ></div>
        </Col>
        <Col className="pb-4">
          <h5 className={timeLineStyles.timeLineTitle}>
            {TimeLineData[0].title}
          </h5>
          <p>{TimeLineData[0].text}</p>
          <button className={timeLineStyles.timeLineButton}>button</button>
        </Col>
      </Row> */}
      {/* end case 1 */}
      {/* case 2 */}
      {/* <Row key={TimeLineData[1].id}>
        <Col
          className="d-flex flex-column justify-content-center align-items-center"
          xs={1}
        >
          <div className={timeLineStyles.timeLineIcon}>
            <i className={TimeLineData[1].class}></i>
          </div>
          <div
            style={{
              width: "3.5px",
              height: "85%",
              backgroundColor: "#ee4d4d",
            }}
          ></div>
        </Col>
        <Col className="pb-4">
          <h5 className={timeLineStyles.timeLineTitle}>
            {TimeLineData[1].title}
          </h5>
          <p>{TimeLineData[1].text}</p>
          <button className={timeLineStyles.timeLineButton}>button</button>
        </Col>
      </Row> */}
      {/* end case 2 */}
      {/* case 3 */}
      {/* <Row key={TimeLineData[2].id}>
        <Col
          className="d-flex flex-column justify-content-center align-items-center"
          xs={1}
        >
          <div className={timeLineStyles.timeLineIcon}>
            <i className={TimeLineData[2].class}></i>
          </div>
          <div
            style={{
              width: "3.5px",
              height: "85%",
              backgroundColor: "#ee4d4d",
            }}
          ></div>
        </Col>
        <Col className="pb-4">
          <h5 className={timeLineStyles.timeLineTitle}>
            {TimeLineData[2].title}
          </h5>
          <p>{TimeLineData[2].text}</p>
          <button className={timeLineStyles.timeLineButton}>button</button>
        </Col>
      </Row> */}
      {/* end case 3 */}
      {TimeLineData.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <Row key={item.id}>
              <TimeLineItemLeft data={item} />
            </Row>
          );
        } else {
          return (
            <Row key={item.id}>
              <TimeLineItemRight data={item} />
            </Row>
          );
        }
      })}
    </Container>
  );
};

export default Timeline;
