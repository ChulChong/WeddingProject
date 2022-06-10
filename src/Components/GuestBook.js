import { React } from "react";
import GuestBookReader from "./GuesBookReader";
import GuestBookWriter from "./GuestBookWriter";
import "./GuestBook.css";
const GuestBook = () => {
  return (
    <div>
      <div>
        <GuestBookWriter />
      </div>
      <div>
        <GuestBookReader />
      </div>
    </div>
  );
};

export default GuestBook;
