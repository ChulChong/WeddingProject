import React from "react";
import headerImage from "/Users/chulchong/cs/wedding/src/util/IMG_2399.jpg";
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
          <img id="WeddingPic" src={headerImage} alt="ourpicture" />
        </div>
      )}
      {isTabletOrMobile && (
        <div>
          <img id="WeddingPicMobile" src={headerImage} alt="ourpicture" />
        </div>
      )}
    </div>
  );
};

export default Header;
