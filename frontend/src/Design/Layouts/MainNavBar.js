import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MainNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mainNavBar">
      <Container>
        <Navbar.Brand href="/home" className="productName">
          <span className="CompanyName">ABC</span> | iBanking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <div className="d-flex">
            <Nav
              className="me-auto my-2 my-lg-0 right-nav-items"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="Single-item">
                <i class="fa fa-location-arrow" aria-hidden="true"></i> Branch
                Locator
              </Nav.Link>
              <Nav.Link href="#action2" className="Single-item">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
              </Nav.Link>
              <Nav.Link href="#action3" className="Single-item">
                <i class="fa fa-bell" aria-hidden="true"></i>
              </Nav.Link>
              <div className="d-flex userProfile">
                <div className="userIcon">
                  <i class="fa fa-user-circle" aria-hidden="true"></i>
                </div>
                <div>
                  <Nav.Link href="#action4" className="userName"> Welcome UserName</Nav.Link>
                  <Nav.Link href="#action5" className="logoutbtn"> Proceed to Logout</Nav.Link>
                </div>
              </div>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavBar;
