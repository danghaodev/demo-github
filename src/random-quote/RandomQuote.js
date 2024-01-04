import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeColor, changeQuote, getQuoteAnsync } from "../redux/quoteSlice";

const RandomQuote = () => {
  const dispatch = useDispatch();
  const randomQuote = useSelector((state) => state.randomQuote);

  useEffect(() => {
    dispatch(getQuoteAnsync());
  }, [dispatch]);

  return (
    <div
      style={{ background: `${randomQuote.color}` }}
      className="w-100 min-vh-100 d-flex justify-content-center align-items-center"
    >
      <div
        className=" d-flex justify-content-center align-items-center border rounded-4"
        style={{
          maxWidth: "600px",
          minWidth: "550px",
          background: "white",
          height: "350px",
        }}
      >
        <Container className=" text-center justify-content-md-center">
          <Row
            style={{ color: `${randomQuote.color}` }}
            className="justify-content-md-center"
          >
            <span className="text-start">
              <i className="fa-solid fa-quote-left"></i>
            </span>
            <p>{randomQuote.content}</p>
            <span className="text-end">
              <i className="fa-solid fa-quote-right"></i>
            </span>
          </Row>
          <Row style={{ color: `${randomQuote.color}` }}>
            <p className="text-end">-{randomQuote.author}</p>
          </Row>
          <Row style={{ color: `${randomQuote.color}` }}>
            <Col>
              <Stack direction="horizontal" gap={2}>
                <Button
                  style={{ background: `${randomQuote.color}`, border: "none" }}
                >
                  <i className="fa-brands fa-twitter"></i>
                </Button>
                <Button
                  style={{ background: `${randomQuote.color}`, border: "none" }}
                >
                  <i className="fa-brands fa-facebook"></i>
                </Button>
              </Stack>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={3}
                className="justify-content-end"
              >
                <Button
                  style={{ background: `${randomQuote.color}`, border: "none" }}
                  onClick={() => dispatch(changeColor())}
                >
                  Change Color
                </Button>
                <Button
                  style={{ background: `${randomQuote.color}`, border: "none" }}
                  onClick={() => dispatch(changeQuote())}
                >
                  New Quote
                </Button>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default RandomQuote;
