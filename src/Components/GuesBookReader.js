import { React, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { db } from "../util/firestoreconfig";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const GuestBookReader = () => {
  //setting User Data
  const [User, SetUserName] = useState([]);

  //call the function
  useEffect(() => {
    getData();
  }, []);

  //getting data function from database
  const getData = () => {
    const guestbookCollRef = collection(db, "GuestBook");
    const q = query(guestbookCollRef, orderBy("timestamp", "desc"));
    getDocs(q)
      .then((response) => {
        console.log(response);
        const UserData = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        SetUserName(UserData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div>
        <ul className="GuesbookReader">
          {User.map((usersdata) => (
            <li key={usersdata.id}>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>
                    <div>name: {usersdata.data.name}</div>
                  </Card.Title>
                  <Card.Text>
                    <div>message: {usersdata.data.message}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GuestBookReader;
