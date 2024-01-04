import React, { useReducer } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import toDoStyle from "./ToDoStyles.module.css";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";

const ToDoItemReducer = ({ id, toDoItem, deleteToDo, editToDo }) => {
  const [editWork, dispatch] = useReducer(editHandle, { index: "", title: "" });

  function editHandle(editWork, action) {
    switch (action.type) {
      case "edit": {
        return {
          ...editWork,
          index: id,
          title: toDoItem,
        };
      }
      case "edit_onChange": {
        return {
          ...editWork,
          title: action.editOnChange,
        };
      }
      case "save": {
        let val = editWork.title;
        console.log(val);
        if (editWork.title === "") {
          return editWork;
        } else {
          editToDo({
            id: id,
            title: editWork.title,
          });
          return {
            ...editWork,
            index: "",
            title: "",
          };
        }
      }

      default: {
        return editWork;
      }
    }
  }

  function deleteHandle() {
    deleteToDo(toDoItem);
  }

  function onChangeEditHandle(e) {
    dispatch({
      type: "edit_onChange",
      editOnChange: e.target.value,
    });
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <InputGroup>
              <InputGroup.Checkbox></InputGroup.Checkbox>
            </InputGroup>
          </Col>
          <Col>
            {!editWork.index ? (
              <p className="fs-3 text-start">
                {id.slice(-1)} {toDoItem}
              </p>
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
          <Col>
            {!editWork.index ? (
              <>
                <button
                  className={toDoStyle.btn}
                  onClick={() => deleteHandle()}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  className={toDoStyle.btn}
                  onClick={() => dispatch({ type: "edit" })}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </>
            ) : (
              <button
                className={toDoStyle.btn}
                onClick={() => dispatch({ type: "save" })}
              >
                <i className="fa-solid fa-floppy-disk"></i>
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ToDoItemReducer;
