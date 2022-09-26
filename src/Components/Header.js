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
            <div className="centered">
              <div className="Textstyling">We're getting</div>
              <div className="Textstyling">married !</div>
            </div>
          </div>
          <div className="weddingwho">
            <div className="ourname">Hannah Bae</div>
            <div style={{ fontSize: "1.5rem", marginBottom: 11 }}>and</div>
            <div className="ourname">Chul Chong</div>
          </div>
          <hr className="hrhorizantal"></hr>
          <div className="headerNext">
            <div className="row">
              <div className="column">
                <div
                  className="paddingleft"
                  style={{ padding: 10, fontSize: "1.3rem" }}
                >
                  Dahlonega, GA
                </div>
                <div
                  className="paddingleft"
                  style={{
                    padding: 10,
                    fontSize: 120,
                    fontFamily: "JesofinSansThin",
                  }}
                >
                  H
                </div>
                <div
                  className="paddingleft"
                  style={{ padding: 10, fontSize: "1.3rem" }}
                >
                  and
                </div>
                <div
                  className="paddingleft"
                  style={{
                    padding: 10,
                    fontSize: 120,
                    fontFamily: "JesofinSansThin",
                  }}
                >
                  C
                </div>
                <div
                  className="paddingleft"
                  style={{ padding: 10, fontSize: "1.3rem" }}
                >
                  #hyunjungchul
                </div>
              </div>

              <div className="hrvertical" />

              <div className="column">
                <div
                  className="paddingright"
                  style={{ padding: 10, fontSize: "1.3rem" }}
                >
                  Saturday
                </div>
                <div
                  className="paddingright"
                  style={{
                    padding: 10,
                    fontSize: 120,
                    fontFamily: "JesofinSansThin",
                  }}
                >
                  1
                </div>
                <div
                  className="paddingright"
                  style={{ padding: 10, fontSize: "1.3rem" }}
                >
                  /
                </div>
                <div
                  className="paddingright"
                  style={{
                    padding: 10,
                    fontSize: 120,
                    fontFamily: "JesofinSansThin",
                  }}
                >
                  21
                </div>
                <div
                  className="paddingright"
                  style={{ padding: 10, fontSize: "1.3rem" }}
                >
                  2023
                </div>
              </div>
            </div>
          </div>
          <hr className="hrhorizantal" />
          <div className="footer">
            <div>Copyright© 2022 Chul Chong</div>
            <div>Designed by Hannah Bae</div>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div>
          <div>
            <img id="WeddingPicMobile" src={imgMobile} alt="ourpicture" />
            <div className="centeredMobile">We're getting</div>
            <div className="centeredMobile">married!</div>
          </div>
          <div className="weddingwhoMobile">
            <div className="ournameMobile" style={{ marginTop: -30 }}>
              Hannah Bae
            </div>
            <div style={{ fontSize: "1.3rem", marginBottom: 10 }}>and</div>
            <div className="ournameMobile" style={{ marginBottom: -30 }}>
              Chul Chong
            </div>
          </div>
          <hr className="hrhorizantalMobile"></hr>
          <div className="headerNext">
            <div className="rowMobile">
              <div className="columnMobile">
                <div style={{ fontSize: 15 }}>Dahlonega, GA</div>
                <div style={{ fontSize: 70, fontFamily: "JesofinSansThin" }}>
                  H
                </div>
                <div style={{ fontSize: 15, marginBottom: 10 }}>and</div>
                <div style={{ fontSize: 70, fontFamily: "JesofinSansThin" }}>
                  C
                </div>
                <div style={{ fontSize: 13, marginTop: -10 }}>
                  #hyunjungchul
                </div>
              </div>

              <div className="hrverticalMobile" />

              <div className="columnMobile">
                <div style={{ fontSize: 15 }}>Saturday</div>
                <div style={{ fontSize: 70, fontFamily: "JesofinSansThin" }}>
                  1
                </div>
                <div style={{ fontSize: 15, marginBottom: 10 }}>/</div>
                <div style={{ fontSize: 70, fontFamily: "JesofinSansThin" }}>
                  21
                </div>
                <div style={{ fontSize: 15, marginTop: -10 }}>2023</div>
              </div>
            </div>
          </div>
          <hr
            style={{ marginBottom: 30, marginTop: 30 }}
            className="hrhorizantalMobile"
          />
          <div className="footermobile" style={{ marginTop: -20 }}>
            <div>Copyright© 2022 Chul Chong</div>
            <div>Designed by Hannah Bae</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
