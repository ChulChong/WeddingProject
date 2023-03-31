import { React, useState, useEffect, useRef } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./RSVP.css";

const IsRSVP = () => {
  const [guesswho, setguesswho] = useState({ name: "" });
  const [datawho, setdatawho] = useState([]);
  const [failmessage, setfailmessage] = useState();
  const form = useRef();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 576, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 575 });

  useEffect(() => {
    fetch("http://localhost:8080/getAllGuests", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        JSON.stringify(data);
        setdatawho([]);
        if (data !== null) {
          Object.values(data).forEach((userdata) => {
            setdatawho((oldArray) => [...oldArray, userdata]);
          });
        }
      });
  }, []);

  const isMatched = () => {
    if (datawho.name === "" || guesswho === "") {
      console.log("null submitted.");
      return;
    }

    fetch("http://localhost:8080/IsGuestIntheList", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(guesswho),
    })
      .then(console.log(guesswho.name + " has been sent to Spring."))
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          fetch("http://localhost:8080/GuestFormatting", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(guesswho.name),
          })
            .then((response) => response.text())
            .then((data) => {
              const namedata = data;
              navigate("/RSVP", { state: { namedata } });
            });
        } else {
          console.log("the name is not in the list.");
          setfailmessage(
            <div>
              <div style={{ color: "#B62C41" }}>
                Hmm... We can't find your name. Make sure you enter your name
                exactly as it appears on your invitation.
              </div>
              <div>
                Still having trouble? Reach out to the Hannah and Chul and
                request access to their RSVP page.
              </div>
            </div>
          );
        }
      });
  };

  const handleChange = (event) => {
    setguesswho({
      ...guesswho,
      [event.target.name]: event.target.value,
    });
  };

  //handle submit function
  const handleSubmit = (event) => {
    event.preventDefault();
    isMatched();
  };
  return (
    <div>
      {isDesktop && (
        <div className="IsRSVP">
          <div
            style={{
              marginTop: 50,
              fontSize: "3rem",
              fontFamily: "JesofinSans",
            }}
          >
            RSVP
          </div>
          <div style={{ marginTop: 40, fontSize: "1.3rem" }}>
            Please let us know your plans here by entering your name as it
            appears on your invitation.
          </div>
          <div style={{ fontSize: "1.3rem" }}>
            We hope we get to celebrate together!
          </div>
          <Form ref={form} onSubmit={handleSubmit}>
            <hr className="hrhorizantalRSVP"></hr>
            <Row className="mb-3">
              {/* Name */}
              <Form.Group
                as={Col}
                controlId="forName"
                className="mb-3"
                value={guesswho}
                onChange={handleChange}
              >
                <Form.Label>
                  <div style={{ padding: 3 }}>
                    Please enter the first and last name of one member of your
                    party below.
                  </div>
                </Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Ex. James Kim (not The Kim Family or Mr. & Mrs. Kim)"
                  name="name"
                  onChange={handleChange}
                  sm={2}
                  style={{
                    backgroundColor: "#f7f5f2",
                    textAlign: "center",
                  }}
                  className="inputbox"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  style={{ marginLeft: 20 }}
                >
                  Submit
                </Button>
              </Form.Group>
            </Row>
          </Form>
          <div>{failmessage}</div>
          <div className="footer" style={{ marginTop: 20 }}>
            <div>Copyright© 2022 Chul Chong</div>
            <div>Designed by Hannah Bae</div>
          </div>
        </div>
      )}
      {isTablet && (
        <div className="IsRSVPMobile">
          <div
            style={{
              marginTop: 30,
              fontSize: "1.3rem",
              fontFamily: "JesofinSans",
            }}
          >
            RSVP
          </div>
          <div style={{ marginTop: 30, fontSize: 18 }}>
            Please let us know your plans here by entering
          </div>
          <div style={{ fontSize: 18 }}>
            your name as it appears on your invitation.
          </div>
          <div style={{ fontSize: 18 }}>
            We hope we get to celebrate together!
          </div>
          <hr className="hrhorizantalMobile"></hr>
          <Form ref={form} onSubmit={handleSubmit} className="IsRSVPMobile">
            <Row>
              {/* Name */}
              <Form.Group
                as={Col}
                controlId="forName"
                value={guesswho}
                onChange={handleChange}
              >
                <Form.Label>
                  <div className="formlabel">
                    <div style={{ paddingBottom: 5 }}>
                      Please enter the first and last name of one member
                    </div>
                    <div style={{ paddingBottom: 5 }}>of your party below.</div>
                  </div>
                </Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Ex. James Kim (not the Kim Family or Mr. & Mrs. Kim)"
                  name="name"
                  onChange={handleChange}
                  sm={2}
                  style={{
                    backgroundColor: "#f7f5f2",
                    textAlign: "center",
                  }}
                  className="inputboxMobile"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  style={{ marginLeft: 20 }}
                >
                  Submit
                </Button>
              </Form.Group>
            </Row>
          </Form>
          <div>{failmessage}</div>
          <div className="footermobile" style={{ marginTop: 20 }}>
            <div>Copyright© 2022 Chul Chong</div>
            <div>Designed by Hannah Bae</div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="IsRSVPMobile">
          <div
            style={{
              marginTop: 30,
              fontSize: "1.3rem",
              fontFamily: "JesofinSans",
            }}
          >
            RSVP
          </div>
          <div style={{ marginTop: 30, fontSize: 18 }}>
            Please let us know your plans here by entering
          </div>
          <div style={{ fontSize: 18 }}>
            your name as it appears on your invitation.
          </div>
          <div style={{ fontSize: 18 }}>
            We hope we get to celebrate together!
          </div>
          <hr className="hrhorizantalMobile"></hr>
          <Form ref={form} onSubmit={handleSubmit} className="IsRSVPMobile">
            <Row>
              {/* Name */}
              <Form.Group
                as={Col}
                controlId="forName"
                value={guesswho}
                onChange={handleChange}
              >
                <Form.Label>
                  <div className="formlabel">
                    <div style={{ paddingBottom: 5 }}>
                      Please enter the first and last name of one member
                    </div>
                    <div style={{ paddingBottom: 5 }}>of your party below.</div>
                  </div>
                </Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Ex. James Kim (not the Kim Family or Mr. & Mrs. Kim)"
                  name="name"
                  onChange={handleChange}
                  sm={2}
                  style={{
                    backgroundColor: "#f7f5f2",
                    textAlign: "center",
                    fontSize: "0.8rem",
                  }}
                  className="inputboxMobile"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  style={{ marginLeft: 20 }}
                >
                  Submit
                </Button>
              </Form.Group>
            </Row>
          </Form>
          <div>{failmessage}</div>
          <div className="footermobile" style={{ marginTop: 20 }}>
            <div>Copyright© 2022 Chul Chong</div>
            <div>Designed by Hannah Bae</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IsRSVP;
