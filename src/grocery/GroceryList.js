import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import GroceryListModify from "./GroceryListModify";
import { Button, FormControl, InputGroup, Stack } from "react-bootstrap";

const GroceryList = () => {
  // const [groceryList, setGoceryList] = useState({
  //   list: [{ id: "", item: "" }],
  //   addItem: "",
  // });
  const [groceryList, setGoceryList] = useState(() => {
    //getting stored value
    const list = JSON.parse(localStorage.getItem("list"));
    if (list) {
      return list;
    } else {
      const initialList = {
        list: [{ id: "", item: "" }],
        addItem: "",
      };
      return initialList;
    }
  });

  function addItem() {
    if (groceryList.addItem === "") {
      return alert("Please add new item!");
    } else {
      let item = {
        id: `${groceryList.list.length + 1}`,
        item: groceryList.addItem,
      };
      setGoceryList({
        ...groceryList,
        list: [...groceryList.list, item],
        addItem: "",
      });
    }
  }

  function addItemOnChange(e) {
    setGoceryList({
      ...groceryList,
      addItem: e.target.value,
    });
  }

  function deleteItem(groceryItem) {
    setGoceryList({
      ...groceryList,
      list: [...groceryList.list].filter((item) => item.item !== groceryItem),
    });
  }

  function editItem(editItem) {
    let index = groceryList.list.findIndex((item) => item.id === editItem.id);
    if (!index) {
      return;
    } else {
      let replaceItem = [...groceryList.list];
      replaceItem[index].item = editItem.title;
      setGoceryList({
        ...groceryList,
        list: replaceItem,
      });
    }
  }

  // loacal storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(groceryList));
  }, [groceryList]);
  return (
    <div className="d-flex justify-content-center align-items-center w-100 min-vh-100">
      <Container style={{ maxWidth: "420px" }}>
        <Row>
          <Stack direction="horizontal" gap={1}>
            <InputGroup className="p-2">
              <InputGroup.Text>Add</InputGroup.Text>
              <FormControl
                type="text"
                name="addItem"
                placeholder="e.g: bread..."
                onChange={(e) => addItemOnChange(e)}
                value={groceryList.addItem}
              />
            </InputGroup>
            <Button variant="info" onClick={() => addItem()}>
              Submit
            </Button>
          </Stack>
        </Row>
        <Row className="justify-content-center">
          <div className="w-75">
            {groceryList.list.map((item, index) => {
              return (
                <div key={index}>
                  <GroceryListModify
                    showGroceryItem={item}
                    deleteItem={deleteItem}
                    editItem={editItem}
                  />
                </div>
              );
            })}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default GroceryList;
