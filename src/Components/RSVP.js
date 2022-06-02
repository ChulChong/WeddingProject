import React, { useState, useRef } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { db } from "../util/config";
import { ref, set } from "firebase/database";

const RSVP = () => {
  const [doesHeCome, setRSVP] = useState(false);
  const [disabledSetting, setDisabled] = useState(false);
  const [submitData, updateSubmitData] = useState({
    name: "",
    yesorno: "",
    menu: "",
  });

  const form = useRef();

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

  const handleChange = (event) => {
    updateSubmitData({
      ...submitData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(submitData);
    sendEmail(submitData);
    const RSVPREF = ref(db, "RSVP/" + submitData.name);
    set(RSVPREF, submitData);
    updateSubmitData({ name: "", yesorno: "", menu: "" });
  };

  React.useEffect(() => {
    if (doesHeCome === false) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [doesHeCome]);

  return (
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
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="First and Last Name"
              name="name"
              onChange={handleChange}
              sm={2}
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
          <Form.Label as="legend" column sm={2}>
            can you come?
          </Form.Label>
          <Col className="radiobutton" sm={10}>
            <Form.Check
              inline
              type="radio"
              label="Yes"
              name="yesorno"
              id="yes"
              onClick={() => setRSVP(true)}
              value="I WILL COME"
            />
            <Form.Check
              inline
              type="radio"
              label="No"
              id="no"
              name="yesorno"
              value="NO I WILL NOT COME"
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
          <Form.Label as="legend" column sm={2}>
            Choose your Main dish
          </Form.Label>
          <Col className="radiobutton" sm={10}>
            <Form.Check
              inline
              disabled={disabledSetting}
              type="radio"
              label="Steak"
              name="menu"
              id="forSteak"
              value="Steak"
            />
            <Form.Check
              inline
              disabled={disabledSetting}
              type="radio"
              label="Salmon"
              name="menu"
              id="forSalmon"
              value="salmon"
            />
            <Form.Check
              inline
              disabled={disabledSetting}
              type="radio"
              label="Chicken"
              name="menu"
              id="forChicken"
              value="chicken"
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RSVP;
