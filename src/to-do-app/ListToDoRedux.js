import React from "react";
import { useSelector } from "react-redux";
import { Container, Stack } from "react-bootstrap";
import AddToDoRedux from "./AddToDoRedux";
import ModifyToDoRedux from "./ModifyToDoRedux";

const ListToDoRedux = () => {
  const listToDo = useSelector((state) => state.toDo);

  return (
    <div className="d-flex row justify-content-center align-items-center w-100 min-vh-100">
      <Container className="bg-secondary" style={{ maxWidth: "600px" }}>
        <Stack gap={3}>
          <h1 style={{ fontSize: "45px", textAlign: "center" }}>
            REACT SIMPLE TO DO LIST USING REDUX
          </h1>
          <AddToDoRedux />
        </Stack>
        {listToDo.map((item, index) => {
          return (
            <div key={index}>
              <ModifyToDoRedux id={item.id} title={item.title} />
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default ListToDoRedux;
