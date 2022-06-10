import { Navbar, Nav, Container } from "react-bootstrap";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
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
            <span className="chultake"> #ChulTakesTheHannah</span>
          </div>
          <div className="d-flex justify-content-center">
            <Nav.Link
              className="NavBrand p-0"
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
            >
              <div>Hannah & Chul</div>
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
                      to="/Gallery"
                      onClick={() => setExpanded(false)}
                      className="navbutton"
                    >
                      Gallery
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/WeddingInfo"
                      onClick={() => setExpanded(false)}
                      className="navbutton"
                    >
                      Wedding Info
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
          <div className="d-flex justify-content-center">
            <Nav.Link
              className="NavBrandMobile p-0"
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
            >
              <div>Hannah & Chul</div>
            </Nav.Link>
          </div>
          <div className="d-flex justify-content-center">
            <Navbar
              className="NavbarStyle p-sm-0 p-0 p-md-1 p-lg-1 p-xl-3 p-xxl-3"
              expand="lg"
              expanded={expanded}
            >
              <Container>
                <Navbar.Toggle
                  className="navbar-toggle icon-bar p-sm-0 p-0 p-md-1 p-lg-1"
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
                      to="/Gallery"
                      onClick={() => setExpanded(false)}
                    >
                      Gallery
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/WeddingInfo"
                      onClick={() => setExpanded(false)}
                    >
                      Wedding Info
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
