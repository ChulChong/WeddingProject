import { React, useEffect, useState } from "react";
import { db } from "../util/firestoreconfig";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const GuestBookReader = () => {
  //setting User Data
  const [User, SetUserName] = useState([]);
  //call the function
  useEffect(() => {
    getData();
  });
  //getting data function from database
  function getData() {
    const guestbookCollRef = collection(db, "GuestBook");
    const q = query(guestbookCollRef, orderBy("timestamp", "desc"));
    getDocs(q)
      .then((response) => {
        const UserData = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        SetUserName(UserData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div>
      <div>
        <ul>
          {User.map((usersdata) => (
            <li key={usersdata.id}>
              <div>name: {usersdata.data.name}</div>
              <div>message: {usersdata.data.message}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GuestBookReader;
