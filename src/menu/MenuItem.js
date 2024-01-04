import React from "react";
import { Container, Row, Col, Stack, Image } from "react-bootstrap";
import menuStyles from "./menuStyles.module.css";

const MenuItem = ({ id, title, price, img, desc }) => {
  return (
    <Container fluid>
      <Row
        lg={2}
        style={{ maxHeight: "max-content", minHeight: "180px", height: "auto" }}
      >
        <Col className="d-flex d-column justify-content-center">
          <div className={menuStyles.menuFrame}>
            <Image
              // src={require(`./images/item-${id}.jpeg`)}
              src={require(`${img}`)}
              className={menuStyles.menuImg}
            />
          </div>
        </Col>
        <Col>
          <Container fluid>
            <Row>
              <Stack direction="horizontal">
                <div>
                  <p className={menuStyles.menuTitle}>{title}</p>
                </div>

                <div className="ms-auto">
                  <p className={menuStyles.menuPrice}>${price}</p>
                </div>
              </Stack>
              <hr
                style={{
                  borderTop: "2px dotted",
                  width: "95%",
                  margin: "0 auto",
                }}
              ></hr>
            </Row>
            <Row>
              <p style={{ textAlign: "justify" }}>{desc}</p>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuItem;
