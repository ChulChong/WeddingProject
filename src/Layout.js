import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavScript from "./Components/Navbar";
import RSVP from "./Components/RSVP";
import Registry from "./Components/Registry";
import WeddingInfo from "./Components/WeddingInfo";
import Gallery from "./Components/Gallery";
import Videos from "./Components/Videos";
import IsRSVP from "./Components/IsRSVP.js";
import CreateData from "./Components/CreateData.js";

const Layout = () => {
  const DefaultContainer = () => {
    return (
      <div>
        <NavScript />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/RSVP" element={<RSVP />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/WeddingInfo" element={<WeddingInfo />}></Route>
          <Route path="/Videos" element={<Videos />}></Route>
          <Route path="/isRSVP" element={<IsRSVP />}></Route>
          <Route path="/CreateData" element={<CreateData />}></Route>
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
