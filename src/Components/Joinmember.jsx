import React, { useState } from "react";
import axios from "axios";
const Joinmember = () => {
  const intial = {
    user_name: "",
    mobile_no: "",
    password: "",
  };
  const messages = {
    _FORM_SUCCESS_: "User added sucessfully",
    _ERROR_: "User not added",
  };
  const requiredFields = {
    required: "This Field is Required",
    user_name: "Please Enter Valid Name",
    mobile_no: "Please Enter a Valid mobile_no Number",
    Password:
      "Password must 3 to 8 characters",
  };
  const failed = {
    user_name: false,
    mobile_no_no: false,
    password: false,
    buttonActive: false,
  };
  const [errors, setErrors] = useState(intial);
  const [validData, setValidData] = useState(failed);
  const [state, setState] = useState(intial);
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const handleLogin = (name, value, errors) => {
    let newFormErrors = errors;
    switch (name) {
      case "user_name":
        if (value === "") {
          newFormErrors.user_name = requiredFields.required;
          validData.user_name = false;
        } else if (!(value.length > 3 && value.length < 12)) {
          newFormErrors.user_name = requiredFields.user_name;
          validData.user_name = false;
        } else {
          newFormErrors.user_name = "";
          validData.user_name = true;
        }
        break;
      case "mobile_no":
        if (value === "") {
          newFormErrors.mobile_no = requiredFields.required;
          validData.mobile_no = false;
        } else if (!(Number(value) > 6000000000 && Number(value) < 9999999999)) {
          newFormErrors.mobile_no = requiredFields.mobile_no;
          validData.mobile_no = false;
        } else {
          newFormErrors.mobile_no = "";
          validData.mobile_no = true;
        }
        break;
      case "password":
        if (value === "") {
          newFormErrors.password = requiredFields.required;
          validData.password = false;
        } else if (!(value.length > 3 && value.length < 8)) {
          newFormErrors.password = requiredFields.Password;
          validData.password = false;
        } else {
          newFormErrors.password = "";
          validData.password = true;
        }
        break;
      default:
        break;
    }
    if (validData.user_name && validData.mobile_no && validData.password) {
      validData.buttonActive = true;
    } else {
      validData.buttonActive = false;
    }
    return newFormErrors;
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleLogin(name, value, errors);
    setState({ ...state, [name]: value });
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/CivilLoan/register", state);
      setSuccessMessage(messages._FORM_SUCCESS_);
      setErrorMessage("");
    } catch {
      setErrorMessage(messages._ERROR_);
      setSuccessMessage("");
    }
    setState(intial);
  };
  return (
    <div
      className="border d-flex justify-content-center align-items-center"
      style={{ height: "87vh" }}
    >
      <form
        className="card d-flex flex-column p-3"
        style={{ backgroundColor: "#eeeded", opacity: "80%" }}
        onSubmit={handleSubmit}
      >
        <h3 style={{ color: "#eeeded" }}>Join as a member</h3>
        <div className="d-flex flex-column">
          <label htmlFor="user_name">UserName</label>
          <input
            type="text"
            name="user_name"
            value={state.user_name}
            style={{ width: "25vw" }}
            onChange={handleChange}
          />
          {errors.user_name && <span>{errors.user_name}</span>}
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="mobile_no">Mobile Number:</label>
          <input
            type="number"
            name="mobile_no"
            value={state.mobile_no}
            id="mobile_no"
            onChange={handleChange}
          />
          {errors.mobile_no && <span>{errors.mobile_no}</span>}
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={state.password}
            id="password"
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <button className="btn btn-warning mt-3" disabled={failed.buttonActive}>SignUp</button>
        </div>
        <div className="text-success">
          {successMessage && <div>{successMessage}</div>}
        </div>
        <div className="text-danger">
          {errorMessage && <div>{errorMessage}</div>}
        </div>
      </form>
    </div>
  );
};

export default Joinmember;
