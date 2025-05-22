import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Aboutus from "./Components/Aboutus";
// import Services from './Components/Services'
import EmiCalculator from "./Components/EmiCalculator";
import Updateprofile from "./Components/Updateprofile";
import Joinmember from "./Components/Joinmember";
import Login from "./Components/Login";
// import SmallBusiness from './Components/SmallBusiness'
import ServiceChild from "./Components/SmallBusiness";
import Wealth from "./Components/Wealth";
// import MoneyRemittance from './Components/MoneyRemittance'
// import WealthManagement from './Components/WealthManagement'
// import MicroFinance from './Components/MicroFinance'

const App = () => {
  return (
    <Router>
      {<Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/wealth/:code" element={<Wealth />} />
        <Route path="/services/:code" element={<ServiceChild />} />

        <Route path="/emical" element={<EmiCalculator />} />
        <Route path="/profile/:id" element={<Updateprofile />} />
        <Route path="/member" element={<Joinmember />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div
        className="d-flex justify-content-center align-items-center fs-6 text-light"
        style={{ background: "darkcyan", height: "7vh" }}
      >
        <footer>
          Copyright &copy; 2022 Civil-FinLoan All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
