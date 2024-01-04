import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import toDoStyle from "./ToDoStyles.module.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const ToDoItem = ({ id, toDoItem, deleteToDo, editToDo }) => {
  const [editWork, setEditWork] = useState({ index: "", title: "" });

  function deleteHandle() {
    deleteToDo(toDoItem);
  }

  function editHandle() {
    setEditWork({ ...editWork, index: id, title: toDoItem });
  }

  function saveEditHandle() {
    if (editWork.title === "") {
      return;
    } else {
      editToDo({ id: id, title: editWork.title });
      setEditWork({ ...editWork, index: "", title: "" });
    }
  }

  function onChangeEditHandle(e) {
    setEditWork({ ...editWork, title: e.target.value });
  }
  return (
    <>
      <Container>
        <Row className="align-items-center" style={{ marginTop: "25px" }}>
          <Col className="align-items-center justify-content-center" xs={1}>
            <Form>
              <Form.Check aria-label="option 1" className="fs-1" />
            </Form>
          </Col>
          <Col className=" align-items-center ">
            {!editWork.index ? (
              <div className=" fs-2 text-start">
                {id.slice(-1)}) {toDoItem}
              </div>
            ) : (
              <InputGroup>
                <InputGroup.Text>Edit</InputGroup.Text>
                <FormControl
                  aria-label="editToDo"
                  type="text"
                  onChange={(e) => onChangeEditHandle(e)}
                  value={editWork.title}
                />
              </InputGroup>
            )}
          </Col>
          <Col
            lg={3}
            className="d-flex justify-content-between"
            style={{ maxWidth: "120px" }}
          >
            {!editWork.index ? (
              <>
                <Button
                  className={toDoStyle.btn}
                  onClick={() => deleteHandle()}
                >
                  <i className="fa-solid fa-trash"></i>
                </Button>
                <Button className={toDoStyle.btn} onClick={() => editHandle()}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </Button>
              </>
            ) : (
              <Button
                className={toDoStyle.btn}
                onClick={() => saveEditHandle()}
              >
                <i className="fa-solid fa-floppy-disk"></i>
              </Button>
            )}
          </Col>
        </Row>
      </Container>
      {/* <div className={toDoStyle.toDoItemGrid1}>
        <div className={toDoStyle.toDoItemContent}>
          <input style={{ width: "25px", height: "25px" }} type="checkbox" />
        </div>
      </div>
      {!editWork.index ? (
        <>
          <div className={toDoStyle.toDoItemGrid2}>
            <div className={toDoStyle.toDoItemContent}>
              {id.slice(-1)}) {toDoItem}
            </div>
          </div>
          <div className={toDoStyle.toDoItemGrid3}>
            <div className={toDoStyle.toDoItemContent}>
              <button className={toDoStyle.btn} onClick={() => deleteHandle()}>
                <i className="fa-solid fa-trash"></i>
              </button>
              <button className={toDoStyle.btn} onClick={() => editHandle()}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={toDoStyle.toDoItemGrid2}>
            <div className={toDoStyle.toDoItemContent}>
              <input
                className={toDoStyle.toDoItemInput}
                name="editToDo"
                type="text"
                value={editWork.title}
                onChange={(e) => onChangeEditHandle(e)}
              />
            </div>
          </div>
          <div className={toDoStyle.toDoItemGrid3}>
            <div className={toDoStyle.toDoItemContent}>
              <button
                className={toDoStyle.btn}
                onClick={() => saveEditHandle()}
              >
                <i className="fa-solid fa-floppy-disk"></i>
              </button>
            </div>
          </div>
        </>
      )} */}
    </>
  );
};

export default ToDoItem;
