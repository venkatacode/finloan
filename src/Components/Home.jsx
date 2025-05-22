import React from "react";
// import loanimage from "../assets/loan.jpg";
import "./Home.css";
{/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
const Home = () => {
  return (
    <div style={{height:"87vh"}} >
    <div className="img">
      <div>
        <div>
          {/* <img src={loanimage} alt="" /> */}
          <p className=" text-white fs-3 fw-Light">
            If you're not making mistakes,then
            <br />
             you're not doing anything
          </p>
        </div>
        <div
          className="container text-center "
          style={{ color: "darkcyan", marginTop: "17%" }}
        >
          <div>
          <p className="d-flex flex-row justify-content-center fs-3">
            An Hub For Your Financial Needs
          </p>
          <p>
            we offer the extensive array of services by providing loans to
            citizens,MoneyTransfer,
          </p>
          <p className="d-flex flex-row justify-content-center">
            wealth management and also leading on Providing micro loans to
            agriculture and 
          </p>
          <p className="d-flex flex-row justify-content-center">
            small business in the rural regions.
          </p>
          </div>
        </div>
      </div>
    
    </div>
    </div>
  );
};

export default Home;
