import React, { useState, useRef, useEffect } from "react";
import { Row, Form, Col, Button, Modal } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { db } from "../util/config";
import { ref, update } from "firebase/database";
import { useMediaQuery } from "react-responsive";
import "./RSVP.css";

const RSVP = ({ namedata }) => {
  const location = useLocation();
  const namedatabase = location.state.namedata;
  const [doesHeCome, setRSVP] = useState(false);
  const [disabledSetting, setDisabled] = useState(false);
  const [Modalshow, setModalShow] = useState(false);
  const [submitData, updateSubmitData] = useState({
    name: namedatabase,
    yesorno: "",
    menu: "",
  });
  const form = useRef();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  //modal control
  const handleClose = () => {
    setModalShow(false);
  };
  const handleShow = () => setModalShow(true);

  //sendEmail function
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_a2fnmcp",
        "template_bgqnqyf",
        form.current,
        "fx2d6LDOMEEW1KFM7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //handle change function
  const handleChange = (event) => {
    updateSubmitData({
      ...submitData,
      [event.target.name]: event.target.value,
    });
  };

  //handle submit function
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(submitData);
    sendEmail(submitData);
    const RSVPREF = ref(db, "RSVP/" + submitData.name);
    update(RSVPREF, submitData);
    handleShow();
  };

  //fucntion for boolean change
  useEffect(() => {
    if (doesHeCome === false) {
      setDisabled(true);
      updateSubmitData({
        name: namedatabase,
        yesorno: "Declines with Regret",
        menu: "",
      });
    } else {
      setDisabled(false);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doesHeCome]);

  return (
    <div>
      {isDesktopOrLaptop && (
        <div className="RSVP">
          <Form ref={form} onSubmit={handleSubmit}>
            <Row className="mb-3">
              {/* Name */}
              <Form.Group
                as={Col}
                controlId="forName"
                className="mb-3"
                value={submitData.name}
                onChange={handleChange}
              >
                <Form.Label style={{ marginBottom: 20 }}></Form.Label>
                <Form.Control
                  type="name"
                  placeholder={location.state.namedata}
                  name="name"
                  value={location.state.namedata}
                  readOnly
                  sm={2}
                  style={{
                    textAlign: "center",
                    width: "50%",
                  }}
                  className="formcontrol"
                />
              </Form.Group>
            </Row>
            {/* Yes Or No */}
            <Form.Group
              as={Row}
              className="mb-3"
              value={submitData.yesorno}
              onChange={handleChange}
            >
              <Col className="radiobutton" sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="Accepts with Pleasure"
                  name="yesorno"
                  id="yes"
                  onClick={() => setRSVP(true)}
                  value="Accepts with Pleasure"
                  className="eachbutton"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Declines with Regret"
                  id="no"
                  name="yesorno"
                  className="eachbutton"
                  value="Declines with Regret"
                  onClick={() => setRSVP(false)}
                />
              </Col>
            </Form.Group>
            {/*Main DISH */}
            <Form.Group
              as={Row}
              className="mb-3"
              value={submitData.menu}
              onChange={handleChange}
            >
              <div style={{ marginBottom: 20 }}>
                <Form.Label as="legend" column sm={10}>
                  Please select your main dish.
                </Form.Label>
              </div>
              <Col className="menuradiobutton" sm={10}>
                <Form.Check
                  inline
                  disabled={disabledSetting}
                  type="radio"
                  label="Steak"
                  name="menu"
                  id="forSteak"
                  className="eachbutton"
                  value="Steak"
                />
                <Form.Check
                  inline
                  disabled={disabledSetting}
                  type="radio"
                  label="Salmon"
                  name="menu"
                  id="forSalmon"
                  className="eachbutton"
                  value="salmon"
                />
                <Form.Check
                  inline
                  disabled={disabledSetting}
                  type="radio"
                  label="Chicken"
                  name="menu"
                  id="forChicken"
                  className="eachbutton"
                  value="chicken"
                />
              </Col>
            </Form.Group>
            <div style={{ marginLeft: -20 }}>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
          <Modal show={Modalshow} onHide={handleClose} className="modal">
            <Modal.Header closeButton>
              <Modal.Title>RSVP submitted!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Thank You!</Modal.Body>
            <Modal.Footer>
              <Button
                as={Link}
                to="/"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="RSVPMobile">
          <Form ref={form} onSubmit={handleSubmit}>
            <Row className="mb-3">
              {/* Name */}
              <Form.Group
                as={Col}
                controlId="forName"
                className="mb-3"
                value={submitData.name}
                onChange={handleChange}
              >
                <Form.Label style={{ marginBottom: 20 }}></Form.Label>
                <Form.Control
                  type="name"
                  placeholder={location.state.namedata}
                  name="name"
                  value={location.state.namedata}
                  readOnly
                  sm={2}
                  style={{
                    textAlign: "center",
                    width: "100%",
                  }}
                  className="formcontrolMobile"
                />
              </Form.Group>
            </Row>
            {/* Yes Or No */}
            <Form.Group
              as={Row}
              className="mb-3"
              value={submitData.yesorno}
              onChange={handleChange}
            >
              <Col className="radiobuttonMobile" sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="Accepts with Pleasure"
                  name="yesorno"
                  id="yes"
                  onClick={() => setRSVP(true)}
                  value="Accepts with Pleasure"
                  className="eachbuttonMobile"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Declines with Regret"
                  id="no"
                  name="yesorno"
                  className="eachbuttonMobile"
                  value="Declines with Regret"
                  onClick={() => setRSVP(false)}
                />
              </Col>
            </Form.Group>
            {/*Main DISH */}
            <Form.Group
              as={Row}
              className="mb-3"
              value={submitData.menu}
              onChange={handleChange}
            >
              <div style={{ marginBottom: 20 }}>
                <Form.Label as="legend" column sm={10}>
                  Please select your main dish.
                </Form.Label>
              </div>
              <Col className="menuradiobuttonMobile" sm={10}>
                <Form.Check
                  inline
                  disabled={disabledSetting}
                  type="radio"
                  label="Steak"
                  name="menu"
                  id="forSteak"
                  className="eachbuttonMobile"
                  value="Steak"
                />
                <Form.Check
                  inline
                  disabled={disabledSetting}
                  type="radio"
                  label="Salmon"
                  name="menu"
                  id="forSalmon"
                  className="eachbuttonMobile"
                  value="salmon"
                />
                <Form.Check
                  inline
                  disabled={disabledSetting}
                  type="radio"
                  label="Chicken"
                  name="menu"
                  id="forChicken"
                  className="eachbuttonMobile"
                  value="chicken"
                />
              </Col>
            </Form.Group>
            <div style={{ marginLeft: 0 }}>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
          <Modal show={Modalshow} onHide={handleClose} className="modal">
            <Modal.Header closeButton>
              <Modal.Title>RSVP submitted!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Thank You!</Modal.Body>
            <Modal.Footer>
              <Button
                as={Link}
                to="/"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default RSVP;
