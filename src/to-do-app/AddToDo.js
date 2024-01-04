import React, { useState } from "react";
import { Button, FormControl, InputGroup, Stack } from "react-bootstrap";

const AddToDo = ({ workList, addToDo }) => {
  const [todo, setToDo] = useState({ title: "" });
  const listLength = workList.length;
  function onChangeHandle(e) {
    setToDo({ ...todo, title: e.target.value });
  }
  function addHandle() {
    if (!todo.title) {
      return;
    } else {
      addToDo({ id: `work${listLength + 1}`, title: todo.title });
      setToDo({ title: "" });
    }
  }
  return (
    <Stack direction="horizontal" gap={2}>
      <InputGroup className="p-2">
        <InputGroup.Text>Add</InputGroup.Text>
        <FormControl
          aria-label="addToDo"
          placeholder="..."
          type="text"
          onChange={(e) => onChangeHandle(e)}
          value={todo.title}
        />
      </InputGroup>

      <Button variant="info" className="fs-6" onClick={() => addHandle()}>
        SUBMIT
      </Button>
    </Stack>
  );
};

export default AddToDo;
