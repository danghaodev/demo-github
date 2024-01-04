import React from "react";
import AddGroceryItem from "./AddGroceryItem";
import { useSelector } from "react-redux";
import ModifyGroceryItem from "./ModifyGroceryItem";
import { Container, Row } from "react-bootstrap";

const GroceryListRedux = () => {
  const groceryList = useSelector((state) => state.grocery);

  return (
    <div className="d-flex justify-content-center align-items-center w-100 min-vh-100">
      <Container style={{ maxWidth: "420px" }}>
        <Row>
          <p className="fs-1">Grocery using Redux</p>
        </Row>
        <Row>
          <AddGroceryItem />
        </Row>
        <Row className="justify-content-center">
          <div className="w-75">
            {groceryList.map((item, index) => {
              return (
                <>
                  <ModifyGroceryItem showGroceryItem={item} key={index} />
                </>
              );
            })}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default GroceryListRedux;
