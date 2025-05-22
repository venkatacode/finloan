import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ServiceChild = () => {
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
        {service?.detail?.map((serviceDetail) => {
          const {type, min, max, tenure} = serviceDetail
          return (
            <React.Fragment key={type}>
              <p>Type:{type}</p>
              <ul>
                <li>Minimum Amount:{min}</li>
                <li>Maximum Amount:{max}</li>
                <li>Tenure:{tenure}(days/Month)</li>
              </ul>

            </React.Fragment>
          );
        })}
      </div>
    )
  );
};

export default ServiceChild;
