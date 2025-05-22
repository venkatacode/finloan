import React from 'react'
import { Link } from 'react-router-dom'

const Aboutus = () => {
  return (
    <div  style={{height:"87vh"}}>
      <div>
        <div className='d-flex flex-column mt-3 p-5'>
      <h2>About Us</h2>
      <p>
        Civil-Finloan is a Finance management company Which is providing the extensive<br/> 
        array of services by providing loans to citizens ,Money Transfer,wealth <br/>
        Management and also lending on providing micro loans to agriculture and small<br/>
        business in the rural regions.</p>
        </div>
      </div>
      <Link to="/home" className="btn btn-warning " style={{marginLeft:"4%"}}>Explore Home</Link>
    </div>
  )
}

export default Aboutus