import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CreateData = () => {
  const [name, setName] = useState("");
  const [menu] = useState("");
  const [yesorno] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    // 👇 Uploading the file using the fetch API to the server
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: file,
      // 👇 Set headers manually for single file upload
      headers: {
        "content-type": "application/json",
        "content-length": `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => {
        fetch("");
      })
      .catch((err) => console.error(err));
  };

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
    fetch("http://localhost:8080/addGuests", {
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
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Or Import your JSON file</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />

          <Button
            onClick={handleUploadClick}
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
              fontFamily: "JesofinSans",
              margin: 30,
            }}
          >
            file submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
export default CreateData;
