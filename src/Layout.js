import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavScript from "./Components/Navbar";
import RSVP from "./Components/RSVP";
import Registry from "./Components/Registry";
import GuestBook from "./Components/GuestBook";
import WeddingInfo from "./Components/WeddingInfo";
import Gallery from "./Components/Gallery";
import Videos from "./Components/Videos";
import ReactPlayer from "react-player";

const Layout = () => {
  const DefaultContainer = () => {
    return (
      <div>
        <NavScript />
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=lgs6Tbs6fXE&t=2s"}
          playing={true}
          width={"0px"}
          height={"0px"}
          volume={0.2}
        ></ReactPlayer>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/RSVP" element={<RSVP />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/GuestBook" element={<GuestBook />}></Route>
          <Route path="/WeddingInfo" element={<WeddingInfo />}></Route>
          <Route path="/Videos" element={<Videos />}></Route>
        </Routes>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="*" element={<DefaultContainer />}></Route>
        <Route exact path="/Registry" element={<Registry />}></Route>
      </Routes>
    </Router>
  );
};

export default Layout;
