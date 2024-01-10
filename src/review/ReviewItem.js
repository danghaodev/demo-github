import React, { useReducer } from "react";
import { ReviewData } from "./ReviewData";
import { Col, Container, Figure, Row, Button, Stack } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
const ReviewItem = () => {
  const [index, dispatch] = useReducer(reducer, 0);
  function reducer(index, action) {
    switch (action.type) {
      case "next": {
        if (index < ReviewData.length - 1) {
          index = index + 1;
        }
        return index;
      }
      case "prev": {
        if (index > 0) {
          index = index - 1;
        }
        return index;
      }

      default:
        return 0;
    }
  }
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={5} md={2}>
            <Figure>
              <div
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              >
                <Figure.Image
                  src={ReviewData[index].img}
                  roundedCircle
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <Figure.Caption className="text-center text-primary">
                <h5 className="text-uppercase">{ReviewData[index].name}</h5>
                <h6 className="text-capitalize text-success">
                  {ReviewData[index].job}
                </h6>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <p>{ReviewData[index].text}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 4 }} md={{ span: 2, offset: 5 }}>
            <Stack direction="horizontal" gap={5}>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  dispatch({ type: "prev" });
                }}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </Button>

              <Button
                variant="secondary"
                className="ms-auto"
                size="lg"
                onClick={() => {
                  dispatch({ type: "next" });
                }}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReviewItem;
