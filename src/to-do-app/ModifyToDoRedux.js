import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteToDo, editToDo } from "../redux/todoSlice";
import toDoStyle from "./ToDoStyles.module.css";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const ModifyToDoRedux = ({ id, title }) => {
  const dispatch = useDispatch();

  const [editWork, setEditWork] = useState({ index: "", title: "" });

  function deleteHandle() {
    dispatch(deleteToDo(id));
  }

  function editHandle() {
    setEditWork({ index: id, title: title });
  }

  function editOnChange(e) {
    setEditWork({ ...editWork, title: e.target.value });
  }

  function saveHandle() {
    if (editWork.title) {
      dispatch(editToDo({ id: editWork.index, title: editWork.title }));
      setEditWork({ index: "", title: "" });
    } else {
      return;
    }
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
                {id.slice(-1)}) {title}
              </div>
            ) : (
              <InputGroup>
                <InputGroup.Text>Edit</InputGroup.Text>
                <FormControl
                  aria-label="editToDo"
                  type="text"
                  onChange={(e) => editOnChange(e)}
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
              <Button className={toDoStyle.btn} onClick={() => saveHandle()}>
                <i className="fa-solid fa-floppy-disk"></i>
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ModifyToDoRedux;
