import React from "react";
import { Button, FormControl, InputGroup, Stack } from "react-bootstrap";
import { addItem } from "../redux/grocerySlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddGroceryItem = () => {
  const dispatch = useDispatch();
  const [groceryItem, setGroceryItem] = useState("");

  function addOnChange(e) {
    setGroceryItem(e.target.value);
  }

  function submit() {
    dispatch(addItem(groceryItem));
    setGroceryItem("");
  }
  return (
    <Stack direction="horizontal" gap={1}>
      <InputGroup>
        <InputGroup.Text>+</InputGroup.Text>
        <FormControl
          aria-label="addgroceryItem"
          placeholder="add item..."
          onChange={(e) => addOnChange(e)}
          value={groceryItem}
        />
      </InputGroup>
      <Button variant="info" onClick={() => submit()}>
        SUBMIT
      </Button>
    </Stack>
  );
};

export default AddGroceryItem;
