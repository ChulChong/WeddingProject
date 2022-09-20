import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { db } from "../util/config";
import { set, ref } from "firebase/database";

const CreateData = () => {
  const [name, setName] = useState("");

  const handleToChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  //handle submit function
  const CreateDatafunction = () => {
    if (name === "") {
      alert("name is null");
      return;
    }
    set(ref(db, "RSVP/" + name), {
      name: name,
      yesorno: "",
      menu: "",
    });
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
