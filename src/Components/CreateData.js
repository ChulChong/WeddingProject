import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CreateData = () => {
  const [name, setName] = useState("");
  const [menu] = useState("");
  const [yesorno] = useState("");

  const handleToChange = (e) => {
    setName(e.target.value);
  };

  //handle submit function
  const CreateDatafunction = () => {
    if (name === "") {
      alert("name is null");
      return;
    }
    const guest = { name, menu, yesorno };
    console.log(guest);
    fetch("https://api.hannahandchul.com:8080/addGuests", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(guest),
    }).then(console.log("new guest added"));
    setName("");
  };

  return (
    <div
      style={{
        fontSize: "1.5rem",
        textAlign: "center",
        fontFamily: "JesofinSans",
        margin: 30,
      }}
    >
      <Form>
        <div>This is a secret system page to create RSVP data.</div>
        <Form.Control
          type={"text"}
          onChange={handleToChange}
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            fontFamily: "JesofinSans",
            margin: 30,
          }}
        ></Form.Control>
        <Button
          onClick={CreateDatafunction}
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            fontFamily: "JesofinSans",
            margin: 30,
          }}
        >
          submit
        </Button>
      </Form>
    </div>
  );
};
export default CreateData;
