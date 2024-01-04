import React from "react";
import { all, category, title } from "../redux/menuSlice";
import {
  Stack,
  Button,
  Row,
  Container,
  InputGroup,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import menuStyles from "./menuStyles.module.css";
const MenuList = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  function menuOnChange(e) {
    dispatch(title(e.target.value.toLowerCase()));
  }

  function darkTheme() {
    document
      .getElementsByTagName("BODY")[0]
      .classList.toggle(`${menuStyles.darkTheme}`);
  }

  return (
    <div className={menuStyles.menuContainer}>
      <Container fluid>
        <Row className="justify-content-center">
          <h1 className="text-center" style={{ letterSpacing: "0.25rem" }}>
            Our Menu
          </h1>
          <div
            style={{
              background: "#c59d5f",
              width: "100px",
              height: "5px",
              minWidth: "15px",
            }}
          ></div>
        </Row>
        <Row className="my-3" style={{ margin: "0 auto" }}>
          <InputGroup
            style={{
              width: "50%",
              height: "15px",
              fontSize: "12px",
              margin: "0 auto",
            }}
          >
            <Form.Control
              placeholder="ex: buttermilk..."
              aria-label="name"
              value={menu.title}
              onChange={(e) => menuOnChange(e)}
            />
          </InputGroup>
        </Row>
        <Row className="justify-content-md-center" style={{ height: "100px" }}>
          <Stack
            direction="horizontal"
            gap={3}
            className="justify-content-center"
            style={{ width: "100%" }}
          >
            <Button
              className={menuStyles.menuBtn}
              onClick={() => dispatch(all())}
            >
              All
            </Button>
            <Button
              className={menuStyles.menuBtn}
              onClick={() => dispatch(category("breakfast"))}
            >
              Breakfast
            </Button>
            <Button
              className={menuStyles.menuBtn}
              onClick={() => dispatch(category("lunch"))}
            >
              Lunch
            </Button>
            <Button
              className={menuStyles.menuBtn}
              onClick={() => dispatch(category("shakes"))}
            >
              Shakes
            </Button>
            <Button
              className={menuStyles.menuBtn}
              onClick={() => dispatch(category("dinner"))}
            >
              Dinner
            </Button>
            <Button
              className={menuStyles.menuBtn}
              style={{ fontSize: "8px" }}
              onClick={darkTheme}
            >
              Dark Theme
            </Button>
          </Stack>
        </Row>
        <Row className="justify-content-center">
          <Container>
            <Row lg={2} style={{ maxHeight: "300px" }}>
              {menu.list.map((item) => {
                return (
                  <div key={item.id}>
                    <MenuItem
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      img={item.img}
                      desc={item.desc}
                    />
                  </div>
                );
              })}
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  );
};

export default MenuList;
