import { Navbar, Nav, Container } from "react-bootstrap";
import { React } from "react";
import { Link } from "react-router-dom";
let navName = "Chul and Hannah's Wedding";
//Gallery, RSVP, Registry, GuestBook, Wedding info

const NavScript = () => {
  return (
    <div className="d-flex justify-content-center">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {navName}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/RSVP">
                RSVP
              </Nav.Link>
              <Nav.Link as={Link} to="/Registry" target="_blank">
                Registry
              </Nav.Link>
              <Nav.Link as={Link} to="/Gallery">
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to="/GuestBook">
                GuestBook
              </Nav.Link>
              <Nav.Link as={Link} to="/WeddingInfo">
                Wedding Info
              </Nav.Link>
              <Nav.Link as={Link} to="/Videos">
                Videos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavScript;
