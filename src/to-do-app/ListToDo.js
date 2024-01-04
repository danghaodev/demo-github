import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import AddToDo from "./AddToDo";
import ToDoItemReducer from "./ToDoItemReducer";
import { Container, Stack } from "react-bootstrap";

const ListToDo = () => {
  const initialList = [
    { id: "work1", title: "Doing homework" },
    { id: "work2", title: "Coding react" },
    { id: "work3", title: "Fixing bugs" },
  ];
  const [toDoList, setToDoList] = useState({
    workList: initialList,
  });

  function addToDo(todo) {
    setToDoList({ workList: [...toDoList.workList, todo] });
  }

  function deleteToDo(todoItem) {
    setToDoList({
      workList: [...toDoList.workList].filter(
        (item) => item.title !== todoItem
      ),
    });
  }

  function editToDo(todoItem) {
    let index = toDoList.workList.findIndex((item) => item.id === todoItem.id);
    let editList = [...toDoList.workList];
    editList[index].title = todoItem.title;
    setToDoList({ workList: editList });
  }

  return (
    <div className="d-flex row justify-content-center align-items-center w-100 min-vh-100">
      <Container className="bg-secondary" style={{ maxWidth: "600px" }}>
        <Stack gap={3}>
          <h1 style={{ fontSize: "45px", textAlign: "center" }}>
            REACT SIMPLE TO DO LIST USING USE-REDUCER
          </h1>
          <AddToDo workList={toDoList.workList} addToDo={addToDo} />
        </Stack>
        {toDoList.workList.map((item, index) => {
          return (
            <div key={index}>
              <ToDoItemReducer
                id={item.id}
                toDoItem={item.title}
                deleteToDo={deleteToDo}
                editToDo={editToDo}
              />
            </div>
          );
        })}
      </Container>
      <Container className="bg-secondary" style={{ maxWidth: "600px" }}>
        <Stack gap={3}>
          <h1 style={{ fontSize: "45px", textAlign: "center" }}>
            REACT SIMPLE TO DO LIST
          </h1>
          <AddToDo workList={toDoList.workList} addToDo={addToDo} />
        </Stack>
        {toDoList.workList.map((item, index) => {
          return (
            <div key={index}>
              <ToDoItem
                id={item.id}
                toDoItem={item.title}
                deleteToDo={deleteToDo}
                editToDo={editToDo}
              />
            </div>
          );
        })}
      </Container>
    </div>
  );
};
export default ListToDo;
