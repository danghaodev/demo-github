import React, { useState } from "react";
import { Container, Row, Col, Button, FormControl } from "react-bootstrap";
import { deleteItem, editItem } from "../redux/grocerySlice";
import { useDispatch } from "react-redux";

const ModifyGroceryItem = ({ showGroceryItem }) => {
  const dispatch = useDispatch();
  const [groceryItem, setGroceryItem] = useState({ id: "", item: "" });

  function deleteHandle() {
    dispatch(deleteItem(showGroceryItem.id));
  }
  function editHandle() {
    setGroceryItem({
      ...groceryItem,
      id: showGroceryItem.id,
      item: showGroceryItem.item,
    });
  }

  function editHandleOnChange(e) {
    setGroceryItem({
      ...groceryItem,
      item: e.target.value,
    });
  }

  function saveEditItem() {
    if (!groceryItem.item) {
      return;
    } else {
      dispatch(editItem({ id: groceryItem.id, item: groceryItem.item }));
      setGroceryItem({ id: "", item: "" });
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
                value={groceryItem.item}
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
export default ModifyGroceryItem;
