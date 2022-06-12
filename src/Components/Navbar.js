import { Navbar, Nav, Container } from "react-bootstrap";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { VscListFlat } from "react-icons/vsc";
import "./Navbar.css";

//Gallery, RSVP, Registry, GuestBook, Wedding info

const NavScript = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      {isDesktopOrLaptop && (
        <div>
          <div className="headerheader">
            Jan 21, 2023 Dahlonega, GA
            <span className="chultake"> #hyunjungchul</span>
          </div>
          <div className="d-flex justify-content-center">
            <Nav.Link
              className="NavBrand p-0"
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
            >
              <div>H a n n a h & C h u l</div>
            </Nav.Link>
          </div>
          <div className="d-flex justify-content-center">
            <Navbar
              className="NavbarStyle p-sm-0 p-0"
              expand="lg"
              expanded={expanded}
            >
              <Container>
                <Navbar.Toggle
                  className="navbar-toggle icon-bar p-0 "
                  aria-controls="basic-navbar-nav"
                  onClick={() => setExpanded(expanded ? false : "expanded")}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Nav.Link
                      as={Link}
                      to="/"
                      onClick={() => setExpanded(false)}
                      className="navbutton"
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/WeddingInfo"
                      onClick={() => setExpanded(false)}
                      className="navbutton"
                    >
                      Information
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/Gallery"
                      onClick={() => setExpanded(false)}
                      className="navbutton"
                    >
                      Gallery
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/IsRSVP"
                      onClick={() => setExpanded(false)}
                      className="navbutton"
                    >
                      RSVP
                    </Nav.Link>
                    <Nav.Link
                      target="_blank"
                      as={Link}
                      to="/Registry"
                      rel="noreferrer noopener"
                      onClick={() => setExpanded(false)}
                      className="navbutton"
                    >
                      Registry
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/Videos"
                      onClick={() => setExpanded(false)}
                      className="navbutton"
                    >
                      Videos
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <hr className="hr" />
        </div>
      )}
      {isTabletOrMobile && (
        <div>
          <div style={{ textAlign: "center", verticalAlign: "middle" }}>
            <Nav.Link
              className="NavBrandMobile"
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
            >
              H a n n a h & C h u l
            </Nav.Link>
            <VscListFlat
              className="menubtn"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />
          </div>
          <div>
            <hr className="hr"></hr>
          </div>
          <div className="container">
            <Navbar className="NavbarStyle p-0" expand="lg" expanded={expanded}>
              <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Nav.Link
                      as={Link}
                      to="/"
                      onClick={() => setExpanded(false)}
                      className="navbutton"
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/WeddingInfo"
                      onClick={() => setExpanded(false)}
                    >
                      Information
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/Gallery"
                      onClick={() => setExpanded(false)}
                    >
                      Gallery
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/IsRSVP"
                      onClick={() => setExpanded(false)}
                    >
                      RSVP
                    </Nav.Link>
                    <Nav.Link
                      target="_blank"
                      as={Link}
                      to="/Registry"
                      rel="noreferrer noopener"
                      onClick={() => setExpanded(false)}
                    >
                      Registry
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/Videos"
                      onClick={() => setExpanded(false)}
                    >
                      Videos
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavScript;
