import { Navbar, Nav, Container } from "react-bootstrap";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { VscListFlat } from "react-icons/vsc";
import "./Navbar.css";

//Gallery, RSVP, Registry, GuestBook, Wedding info

const NavScript = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 576, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 575 });
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      {isDesktop && (
        <div>
          <div className="headerheader">
            Jan 21, 2023
            <span className="chultake"> #hyunjungchul</span>
          </div>
          <div className="d-flex justify-content-center">
            <Nav.Link
              className="NavBrand p-0"
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
            >
              <div>H A N N A H + C H U L</div>
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
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <hr className="hr" />
        </div>
      )}
      {isTablet && (
        <div>
          <div className="d-flex justify-content-center">
            <Nav.Link
              className="NavBrandTablet p-0"
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
            >
              <div>H A N N A H + C H U L</div>
            </Nav.Link>
            <VscListFlat
              className="menubtnTablet"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Navbar
              className="NavbarStyle p-sm-0 p-0"
              expand="lg"
              expanded={expanded}
            >
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
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <hr className="hr" />
        </div>
      )}
      {isMobile && (
        <div>
          <div style={{ textAlign: "center", verticalAlign: "middle" }}>
            <Nav.Link
              className="NavBrandMobile"
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
            >
              H A N N A H + C H U L
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
            <Navbar className="NavbarStyle p-0" expand="sm" expanded={expanded}>
              <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Nav.Link
                      as={Link}
                      to="/"
                      onClick={() => setExpanded(false)}
                      className="navbuttonMobile"
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/WeddingInfo"
                      onClick={() => setExpanded(false)}
                      className="navbuttonMobile"
                    >
                      Information
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/Gallery"
                      onClick={() => setExpanded(false)}
                      className="navbuttonMobile"
                    >
                      Gallery
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/IsRSVP"
                      onClick={() => setExpanded(false)}
                      className="navbuttonMobile"
                    >
                      RSVP
                    </Nav.Link>
                    <Nav.Link
                      target="_blank"
                      as={Link}
                      to="/Registry"
                      rel="noreferrer noopener"
                      onClick={() => setExpanded(false)}
                      className="navbuttonMobile"
                    >
                      Registry
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
