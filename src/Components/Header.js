import React from "react";
import img from "/Users/chulchong/cs/wedding/src/util/weddingimg/CCB03002.jpg";
import imgMobile from "/Users/chulchong/cs/wedding/src/util/weddingimg/CCB03002.jpg";
import "./Header.css";
import { useMediaQuery } from "react-responsive";
const Header = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      {isDesktopOrLaptop && (
        <div>
          <div>
            <img id="WeddingPic" src={img} alt="ourpicture" />
            <div className="centered">WE'RE GETTING MARRIED!</div>
          </div>
          <div className="weddingwho">
            <div className="ourname">Hannah Bae</div>
            <div style={{ fontSize: 30 }}>and</div>
            <div className="ourname">Chul Chong</div>
          </div>
          <hr className="hrhorizantal"></hr>
          <div className="headerNext">
            <div className="row">
              <div className="column">
                <div style={{ padding: 20, fontSize: 30 }}>Dahlonega, GA</div>
                <div style={{ padding: 20, fontSize: 140 }}>H</div>
                <div style={{ padding: 20, fontSize: 30 }}>and</div>
                <div style={{ padding: 20, fontSize: 140 }}>C</div>
                <div style={{ padding: 20, fontSize: 30 }}>#hyunjungchul</div>
              </div>

              <div className="hrvertical" />

              <div className="column">
                <div style={{ padding: 20, fontSize: 30 }}>Saturday</div>
                <div style={{ padding: 20, fontSize: 140 }}>1</div>
                <div style={{ padding: 20, fontSize: 30 }}>/</div>
                <div style={{ padding: 20, fontSize: 140 }}>21</div>
                <div style={{ padding: 20, fontSize: 30 }}>2023</div>
              </div>
            </div>
          </div>
          <hr style={{ marginBottom: 30 }} className="hrhorizantal" />
        </div>
      )}
      {isTabletOrMobile && (
        <div>
          <div>
            <img id="WeddingPicMobile" src={imgMobile} alt="ourpicture" />
            <div className="centeredMobile">WE'RE GETTING MARRIED!</div>
          </div>
          <div className="weddingwhoMobile">
            <div className="ournameMobile">Hannah Bae</div>
            <div className={{ fontSize: 20 }}>and</div>
            <div className="ournameMobile">Chul Chong</div>
          </div>
          <hr className="hrhorizantalMobile"></hr>
          <div className="headerNext">
            <div className="rowMobile">
              <div className="columnMobile">
                <div style={{ fontSize: 15 }}>Dahlonega, GA</div>
                <div style={{ fontSize: 70 }}>H</div>
                <div style={{ fontSize: 15 }}>and</div>
                <div style={{ fontSize: 70 }}>C</div>
                <div style={{ fontSize: 13 }}>#hyunjungchul</div>
              </div>

              <div className="hrverticalMobile" />

              <div className="columnMobile">
                <div style={{ fontSize: 15 }}>Saturday</div>
                <div style={{ fontSize: 70 }}>1</div>
                <div style={{ fontSize: 15 }}>/</div>
                <div style={{ fontSize: 70 }}>21</div>
                <div style={{ fontSize: 15 }}>2023</div>
              </div>
            </div>
          </div>
          <hr
            style={{ marginBottom: 30, marginTop: 30 }}
            className="hrhorizantalMobile"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
