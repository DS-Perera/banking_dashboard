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
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <span className="fw-bold">ABC</span> | Banking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">ABC</Nav.Link> */}
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
          </Nav>
          <div className="d-flex">
            <Nav.Link href="#action1" className="text-white righr_link">
              <i class="fa fa-location-arrow" aria-hidden="true"></i> Branch
              Location
            </Nav.Link>
            <Nav.Link href="#action1" className="text-white righr_link">
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </Nav.Link>
            <Nav.Link href="#action1" className="text-white righr_link">
              <i class="fa fa-bell" aria-hidden="true"></i>
            </Nav.Link>
            <div>
              <Nav.Link href="#action1" className="text-white righr_link">
                <i class="fa fa-user-circle" aria-hidden="true"></i> Welcome
                User
              </Nav.Link>

              {/* <Nav.Link href="#action1" className="text-white righr_link">
                Logout
              </Nav.Link> */}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
