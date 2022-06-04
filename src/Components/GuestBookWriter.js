import { React, useState } from "react";
import { db } from "../util/firestoreconfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const GuestBookWriter = () => {
  const [User, SetUserName] = useState({
    name: "",
    message: "",
    timestamp: serverTimestamp(),
  });

  const handleChange = (event) => {
    SetUserName({
      ...User,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(User);
    if (User.name === "" || User.message === "") {
      return;
    }
    const guestbookCollRef = collection(db, "GuestBook");
    addDoc(guestbookCollRef, User)
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlform="name">name</label>
        <input
          placeholder="First and Last Name"
          name="name"
          onChange={handleChange}
        />
        <label htmlform="message">message</label>
        <input placeholder="Message" name="message" onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default GuestBookWriter;
