import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const credentials={
    userid:"",
    password:""
  }
  const messages={
    _SUCCESS_:"Login Successful!!! Please wait Profile Page is Loading",
    _NOT_EXIST_:"Details do not Exist in our Database",
    _ERROR_:"Invalid Credentials"
  }
  const[state,setState]=useState(credentials);

  const[successMessage,setSuccessMessage]=useState();
  const[errorMessage,setErrorMessage]=useState();
  
  const handleChange=(e)=>{
    
    const name=e.target.name;
    const value=e.target.value;
    setState({...state,         
      [name]:value}
    )
  }
  const timeout=(isUserExist)=>{
    localStorage.setItem('user',JSON.stringify(isUserExist))
    console.log(isUserExist)
      localStorage.setItem('authenticated',JSON.stringify(true))
      navigate(`/profile/${isUserExist.id}`)
    
  }
 
  const handleLogin= async (e)=>{ 
    e.preventDefault();
    if(state.userid !=="" && state.password !==""){

      try{
      const res= await axios.get("http://localhost:4000/members")
      const isUserExist = res.data.find((user) => user.userID === state.userid && user.password === state.password)
      // console.log(isUserExist, state, res.data);
      
      if (isUserExist ) {
        setSuccessMessage(messages._SUCCESS_);
        setErrorMessage("");     
        timeout(isUserExist)
        navigate(`/profile/${isUserExist.id}`)

      }
      else{
        setErrorMessage(messages._NOT_EXIST_);
        setSuccessMessage("")
      }
      // setState(res.data)
    }catch{
      setErrorMessage(messages._ERROR_);
      setSuccessMessage("")
    }}
    else{
      setSuccessMessage("");
      setErrorMessage(messages._ERROR_);
    }
   }
  

  return (
    <div className='d-flex flex-row justify-content-center align-items-center' style={{height:"87vh"}} >
      <div className='card  d-flex flex-column p-3' style={{backgroundColor:'#eeeded',opacity:"80%"}}>
      <h2>Login</h2>
      <div className='d-flex flex-column mt-3'>
      <label htmlFor="userid" id="userid">UserId:</label>
      <input type="text" style={{width:"30vw"}} name="userid" value={state.userid} onChange={handleChange} />
      </div>
      <div className='d-flex flex-column mt-3' >
      <label htmlFor="password" id="password">Password:</label>
      <input type="password" name='password' value={state.password} onChange={handleChange}  />
      </div>
     <div className='d-flex mt-3 mb-3' style={{marginLeft:"10%"}}>
      <button className='btn btn-warning' onClick={handleLogin}>Login</button>
      </div>
      <div className='align-items-center text-success'>
        {successMessage && <div>{successMessage}</div>}
      </div>
      <div className='align-items-center text-danger'>
        {errorMessage && <div>{errorMessage}</div> }
      </div>
      </div>
    
    </div>
  )
}

export default Login