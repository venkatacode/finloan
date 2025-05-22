import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const initialData = {
  userID: "",
  mobile: "",
  password: "",
  fullName: ""
};
const messages={
  _SUCCESS_:"Profile updated Successfully",
  _ERROR_:"Profile Not Updated"
}
const Updateprofile = () => {
  const { id } = useParams();
  const [state, setState] = useState(initialData);
  const[successmessage,setSuccessMessage]=useState();
  const[errormessage,setErrorMessage]=useState();
  const getdata = async () => {
    // e.preventDefault();
    const res = await axios.get(`http://localhost:4000/members/${id}`);
    setState(res.data);
  };
  const handleChange=(e)=>{
  const name=e.target.name
  const value=e.target.value
  setState({...state,
    [name]:value
  })
  }
  const update = async (e) => {
    e.preventDefault();
try {
  await axios.put(`http://localhost:4000/members/${id}`, state);
  setSuccessMessage(messages._SUCCESS_);
  setErrorMessage("")
} catch (error) {
  setErrorMessage(messages._ERROR_)
  setSuccessMessage("")
}
};
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div
      className="border d-flex justify-content-center align-items-center"
      style={{ height: "87vh" }}
    >
      <form
        className="card d-flex flex-column p-3"
        style={{ backgroundColor: "#eeeded", opacity: "80%" }}
        onSubmit={update}
      >
        <div className="d-flex flex-column ">
          <label htmlFor="userID" id="userID">
            UserID
          </label>
          <input
            type="text"
            style={{ width: "30vw" }}
            disabled
            name="userID"
            value={state.userID}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-column ">
          <label htmlFor="mobile" id="mobile">
            Mobile Number
          </label>
          <input type="number" name="mobile" value={state.mobile} onChange={handleChange} />
        </div>
        <div className="d-flex flex-column ">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={state.password} onChange={handleChange} />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="FullName" id="fullName">Full Name</label>
          <input type="text" name="fullName" value={state.fullName} onChange={handleChange}/>
        </div>
        <div>
          <button className=" d-flex btn btn-warning mt-1" >
            Update
          </button>
        </div>
        <div className="text-success">
            {successmessage && <div>{successmessage}</div>}
        </div>
        <div>
          {errormessage && <div>{errormessage}</div>}
        </div>
      </form>
    </div>
  );
};

export default Updateprofile
