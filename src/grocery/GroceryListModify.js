import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Button, Col, FormControl } from "react-bootstrap";

const GroceryListModify = ({ showGroceryItem, deleteItem, editItem }) => {
  const [groceryItem, setGroceryItem] = useState({ id: "", title: "" });

  function deleteHandle() {
    deleteItem(showGroceryItem.item);
  }

  function editHandle() {
    setGroceryItem({
      id: showGroceryItem.id,
      title: showGroceryItem.item,
    });
  }

  function editHandleOnChange(e) {
    setGroceryItem({
      ...groceryItem,
      title: e.target.value,
    });
  }

  function saveEditItem() {
    if (groceryItem.title === "") {
      return;
    } else {
      editItem(groceryItem);
      setGroceryItem({ id: "", title: "" });
    }
  }

  return (
    <>
      {!groceryItem.id ? (
        showGroceryItem.item && (
          <Container fluid>
            <Row style={{ marginTop: "15px" }}>
              <Col>
                <div className="text-uppercase">{showGroceryItem.item}</div>
              </Col>
              <Col className="d-flex justify-content-between">
                <Button onClick={deleteHandle}>
                  <i className="fa-solid fa-trash"></i>
                </Button>
                <Button onClick={editHandle}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </Button>
              </Col>
            </Row>
          </Container>
        )
      ) : (
        <Container fluid>
          <Row>
            <Col>
              <FormControl
                type="text"
                aria-label="editGrocery"
                value={groceryItem.title}
                onChange={(e) => editHandleOnChange(e)}
              />
            </Col>
            <Col>
              <Button>
                <i
                  className="fa-solid fa-floppy-disk"
                  onClick={saveEditItem}
                ></i>
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default GroceryListModify;
