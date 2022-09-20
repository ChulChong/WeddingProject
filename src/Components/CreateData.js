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
        fontSize: "2.5rem",
        textAlign: "center",
      }}
    >
      <Form>
        <Form.Control type={"text"} onChange={handleToChange}></Form.Control>
        <Button onClick={CreateDatafunction}>submit</Button>
      </Form>
    </div>
  );
};
export default CreateData;
