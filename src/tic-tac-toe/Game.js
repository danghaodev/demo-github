import React from "react";
import Board from "./Board";
import BoardUseReducer from "./BoardUseReducer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BoardRedux from "./BoardRedux";

const Game = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={5}>
          <Board />
        </Col>
        <Col>
          <BoardUseReducer />
        </Col>
        <Col>
          <BoardRedux />
        </Col>
      </Row>
    </Container>
    // <div style={{ display: "grid", gridAutoColumns: "1 1" }}>
    //   <div style={{ gridColumn: "1 /span 2" }}>
    //     <Board />
    //   </div>
    //   <div style={{ gridColumn: "2 /span 3" }}>
    //     <BoardUseReducer />
    //   </div>
    // </div>
  );
};

export default Game;
