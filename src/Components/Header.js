import React from "react";
import headerImage from "/Users/chulchong/cs/wedding/src/util/IMG_2399.jpg";
import "./Header.css";
import { useMediaQuery } from "react-responsive";
const Header = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "01/21/",
      D_Day = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > D_Day) {
      D_Day = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(D_Day).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        );
        document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        );
        document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        );

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's the D-Day!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0);
  })();

  return (
    <div>
      {isDesktopOrLaptop && (
        <div>
          <img id="WeddingPic" src={headerImage} alt="ourpicture" />
          <div className="container">
            <div id="countdown">
              <ul>
                <li>
                  <span id="days"></span>days
                </li>
                <li>
                  <span id="hours"></span>Hours
                </li>
                <li>
                  <span id="minutes"></span>Minutes
                </li>
                <li>
                  <span id="seconds"></span>Seconds
                </li>
              </ul>
            </div>
            <div id="content" className="emoji">
              <span>🥳</span>
              <span>🎉</span>
              <span>🎂</span>
            </div>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div>
          <img id="WeddingPicMobile" src={headerImage} alt="ourpicture" />
          <div className="container">
            <div id="countdown">
              <ul>
                <li>
                  <span id="days"></span>days
                </li>
                <li>
                  <span id="hours"></span>Hours
                </li>
                <li>
                  <span id="minutes"></span>Minutes
                </li>
                <li>
                  <span id="seconds"></span>Seconds
                </li>
              </ul>
            </div>
            <div id="content" className="emoji">
              <span>🥳</span>
              <span>🎉</span>
              <span>🎂</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
