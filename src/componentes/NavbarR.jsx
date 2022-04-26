import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function NavbarR() {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="false">
        <Container fluid>
          <Navbar.Brand href="#"><h1>LA GACETA</h1></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 pt-2 px-1"
              style={{ minHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
              <Nav.Link as={NavLink} to="news">Actualidad</Nav.Link>
              <Nav.Link as={NavLink} to="news">Deportes</Nav.Link>


            </Nav>
            <Form className="d-flex p-2">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Nav className="nav-secondary" defaultActiveKey="/home" as="ul">
        <div className="nav-second">
        <Nav.Item as="li">
          <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link  as={NavLink} to="news">Actualidad</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Deportes</Nav.Link>
        </Nav.Item>
        </div>
        <Button className="btn-login mx-2" variant="outline-primary" as={NavLink} to="login">Login</Button>
      </Nav>
    </div>
  );
}
