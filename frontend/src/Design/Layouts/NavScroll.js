// Your React component file

import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScroll() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ background: "var(--navbar-bg-color)" }}
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "var(--navbar-link-color)" }}>
          Navbar scroll
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              style={{ color: "var(--navbar-link-color)" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#action2"
              style={{ color: "var(--navbar-link-color)" }}
            >
              Link
            </Nav.Link>
            <NavDropdown
              title="Link"
              id="navbarScrollingDropdown"
              style={{ color: "var(--navbar-link-color)" }}
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="#"
              disabled
              style={{ color: "var(--navbar-link-color)" }}
            >
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
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
  );
}

export default NavScroll;
