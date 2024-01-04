import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../redux/todoSlice";
import { Stack, Button, InputGroup, FormControl } from "react-bootstrap";

const AddToDoRedux = () => {
  const [todo, setToDo] = useState("");
  const dispatch = useDispatch();

  function addHandle() {
    dispatch(addToDo(todo));
    setToDo("");
  }

  function addOnChange(e) {
    setToDo(e.target.value);
  }

  return (
    <Stack direction="horizontal" gap={2}>
      <InputGroup className="p-2">
        <InputGroup.Text>Add</InputGroup.Text>
        <FormControl
          aria-label="addToDo"
          placeholder="..."
          type="text"
          onChange={(e) => addOnChange(e)}
          value={todo.title}
        />
      </InputGroup>

      <Button variant="info" className="fs-6" onClick={() => addHandle()}>
        SUBMIT
      </Button>
    </Stack>
  );
};

export default AddToDoRedux;
