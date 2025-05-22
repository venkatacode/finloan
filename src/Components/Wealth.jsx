import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Wealth = () => {
    const { code } = useParams();
    const [service, setService] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:4000/allservices`);
          const service = res.data.find((service) => service.code === code)
          setService(service);
        } catch (error) {
          console.log(error)
        }
      }
      fetchData();
    }, [code])
  
    return (
      service !== null && (
        <div style={{height:"87vh"}}>
          <h1>{service.type}</h1>
          <p>{service.description}</p>
          <hr />
          {service.detail.map((serviceDetail,index) => {
            // const {type, min, max, tenure} = serviceDetail
            return (
              <React.Fragment key={index}>
                <ul>
                    <li>{serviceDetail}</li>
                </ul>
  
              </React.Fragment>
            );
          })}
        </div>
      )
    );
  };

export default Wealth