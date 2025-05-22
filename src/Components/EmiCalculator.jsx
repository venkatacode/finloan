import React from 'react'
import { useState } from 'react'
import axios from 'axios';
const EmiCalculator = () => {
  const intial={
    loanType: "",
    code: "",
    amount: "",
    tenure: ""
  }

  const messages={
    required:"This field is required",
    DILoan:"minimum amount should be 15000 and maximum should be 100000 ",
    MILoan:"minimum amount should be 100000 and maximum should be 300000",
    Domestic:"minimum amount should be 2500 and maximum should be 25000",
    Inward:"minimum amount should be 5000 and maximum should be 10000",
    NA:"minimum amount should be 1000 and maximum should be 3500"
  }
  const [loanType, setLoanType] = useState(null)
  const [loanDetail, setLoanDetail] = useState(null)
  const [detail, setDetail] = useState(null)
  const[successMessage,setSuccessMessage]=useState()
  const[amount,setAmount]=useState(null)
  const[tenure,setTenure]=useState(null)
  const[errors,setErrors]=useState(intial)
  const[valid,setValid]=useState({
    loanType: false,
    code: false,
    amount: false,
    tenure: false
  })

  const handleLoanType = async (e) => {
    const value = e.target.value
    const name = e.target.name
    setLoanType(e.target.value);
    const res = await axios.get(`http://localhost:4000/allservices/?code=${e.target.value}`)
    setLoanDetail(res?.data[0]?.detail) 
  
  }
  const handleDetail = (e) => {
    setDetail(e.target.value);
    console.log(e.target.value);
  }
  const handletenure=(e)=>{
   const name=e.target.name
    const value=e.target.value
    setTenure(value)  
  }
  const handleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value

    setAmount(value)
    const {newErrors, newvalid} = validate(name, value, errors, valid)
    setErrors({...errors, [name]: newErrors.amount })
    setValid({...valid, [name]: newvalid.amount})
    // console.log(errors, valid);
    
  }
  const calculate=(e)=>{
    e.preventDefault();
    const total=Number(amount)*Number(tenure)
    setSuccessMessage(`The estimate emi amount was: ${total}`)
  }
  const validate=(name,value, errors, valid)=>{
    let newErrors = errors;
    let newvalid = valid;
    switch(name){
    case "amount":
      if(value===""){
        newErrors.amount=messages.required
        newvalid.amount=false
      }else if(!(Number(value) >= 15000 && Number(value) <= 100000 )){
        newErrors.amount=messages.DILoan 
        newvalid.amount=false
      }else
      {
        newErrors.amount=""
        newvalid.amount=true
      }
      break;
      default:
        break;
  }
  return { newErrors, newvalid}

  }
  return (
    <div>
       
    <div
      className="border d-flex justify-content-center align-items-center"
      style={{ height: "87vh" }}
    >
      <form
        className="card d-flex flex-column p-3"
        style={{ backgroundColor: "#eeeded", opacity: "80%" }} 
      >
        <h4 style={{color:"blue"}} className='d-flex justify-content-center'>EMI Calculator</h4>
        <p style={{fontSize:"12px", marginTop:"5%"}}>(please check maximum and minimum loan amount before checking)</p>
        <div className="d-flex flex-column ">
          <label htmlFor="LoanType">Loan Type:</label>
         <select name="dropdown"  value={loanType} onChange={handleLoanType}>
          <option value="">--SELECT--</option>
          <option value="SCB">Small Scale Business</option>
          <option value="MR">Money Remittance</option>
          <option value="WM">Wealth Management</option>
          <option value="MF">Micro Finance</option>
         </select>
        </div>
        <div className="d-flex flex-column ">
          <label htmlFor="code" id="mobile">
            Code:
          </label>
        
         <select name="detail"  value={detail} onChange={handleDetail}>
          <option value="">--SELECT--</option>
          {loanDetail?.map((detail, index) => {
            return(
              <option key={index} value={detail.rate}>{detail.type}</option>
            )
          })}
         </select>
        </div>
        <div className="d-flex flex-column ">
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" value={amount} onChange={handleChange}  />
          <div className='text-danger'>
          {errors.amount && <span>{errors.amount}</span>}
          </div>
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="tenure" id="tenure">Tenure</label>
          <input type="number" name="tenure" value={tenure} onChange={handletenure}/>
        </div>
        <div>
          <button className=" d-flex btn btn-warning mt-1" onClick={calculate} >
            Submit
          </button>
        </div>
        {successMessage && <div className='text-success'>{successMessage}</div>}
      </form>
    </div>
  

    </div>
  )
}

export default EmiCalculator



  // const typeexists=res.data.find(type=>type.value===state.value)
    // console.log(res.data)
    // if(typeexists){
    //   setSuccessMessage(amount*tenure)
    // }