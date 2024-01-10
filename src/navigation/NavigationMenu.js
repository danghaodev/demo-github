import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/">Game</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/calculator">Calculator</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/listtodo">List To Do</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/listtodoRedux">List To Do REDUX</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/grocery">Grocery</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/groceryRedux">Grocery REDUX</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/randomQuote">Random Quote</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/menu">Menu List</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/tab">Tab</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/review">Review</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/timeline">Timeline</NavLink>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationMenu;
