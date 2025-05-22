import React, { useState, useEffect } from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(null);
  const [log, setLog] = useState();

  let authenticated;
  const handleLogout = () => {
    localStorage.setItem("authenticated", JSON.stringify(false));
    navigate("/login");
  };
  const handleProfile = () => {
    localStorage.setItem("authenticated", JSON.stringify(false));
    navigate("/login");
  };
  useEffect(() => {
    setLog(JSON.parse(localStorage.getItem("authenticated")));
  }, [JSON.parse(localStorage.getItem("authenticated"))]);
  useEffect(() => {
    // setLog(JSON.parse(localStorage.getItem('authenticated')))
    if (code === "SmallScaleBusiness") {
      navigate(`/services/SCB`);
    } else if (code === "MoneyRemittance") {
      navigate(`/services/MR`);
    } else if (code === "WealthManagement") {
      navigate(`/wealth/WM`);
    } else if (code === "MicroFinance") {
      navigate(`/services/MF`);
    }
  }, [code]);

  const small = (e) => {
    setCode(e.target.value);
    //  const value=e.target.value
    //
  };
  return (
    <>
      <div>
        <nav
          className="navbar  navbar-expand-lg "
          style={{ backgroundColor: "darkcyan", opacity: "100px" }}
        >
          <a className="navbar-brand text-white " href="/Home">
            CivilLoan
          </a>
          <a className="navbar-brand text-white fs-6" href="/aboutus">
            About Us
          </a>

          <select
            name="Services"
            id="services"
            style={{
              backgroundColor: "transparent",
              outline: "none",
              border: "0px",
              width: "7%",
              color: "white",
            }}
            onChange={small}
          >
            <option value="Services">Services</option>
            <option value="SmallScaleBusiness">Small Scale Business</option>
            <option value="MoneyRemittance">Money Remittance</option>
            <option value="WealthManagement">Wealth Management</option>
            <option value="MicroFinance">Micro Finance</option>
          </select>
          <div className="nav navbar-collapse justify-content-end">
            <a className="navbar-brand text-white fs-6" href="/emical">
              Emi Calculator
            </a>
            <a className="navbar-brand text-white fs-6" href="/member">
              Join as a member
            </a>
            {log === false && (
              <a className="navbar-brand text-white fs-6" href="/login">
                Update Profile
              </a>
            )}
            {log === true && (
              <a
                className="navbar-brand text-white fs-6"
                style={{ cursor: "pointer" }}
                onClick={handleProfile}
              >
                Update Profile
              </a>
            )}

            {log === false && (
              <a className="navbar-brand text-white fs-6" href="/login">
                Login
              </a>
            )}
            {log === true && (
              <a
                className="navbar-brand text-white fs-6 "
                style={{ cursor: "pointer" }}
                onClick={handleLogout}
              >
                Logout
              </a>
            )}
          </div>
          <div></div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
