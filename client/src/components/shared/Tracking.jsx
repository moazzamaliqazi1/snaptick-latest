import axios from "axios";
import React, { useState } from "react";
import {useLocation} from "react-router-dom";
const Tracking = () => {
    const search = useLocation().search;
  const name = new URLSearchParams(search).get('tracking_id');
  const [ transactionId, setTransactionId ] = useState("")
  const [status, setStatus] = useState("")
  const fetchDetails = async()=>{
    try {
        if(transactionId){
            const response = await axios.get(`/api/v1/public/orders/transaction_id?transaction_id=${transactionId}`)
            if(response.status === 200 && response.data.is_success){
                setStatus(response.data.data[0] ? response.data.data[0].status: "")
            }
        }
    } catch (error){
        console.log(error)
    }
  }
  return (
    <>
      <div style={{ display: "inline" }}>
        {name ? `Your tracking id is ${name}`: ""}
        {status ? `Your tracking id is ${status}`: ""}
        <center>
          <h4 style={{ fontFamily: "georgia" }}>Track your Order:</h4>

          <div className="container mt-4">
            <div className="row">
              <div className="col-md-4"></div>

              <div className="col-md-4">
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="text"
                    name="transactionId"
                    placeholder="**********"
                    value={transactionId}
                    onChange={(event)=>{
                        setTransactionId(event.target.value)
                    }}
                  />

                  <button
                    id=""
                    className="input100"
                    type="button"
                    name=""
                    onClick={fetchDetails}
                  >
                    submit
                </button>
                  <span className="focus-input100"></span>
                </div>
              </div>

              <div className="col-md-4"></div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};
export default Tracking;
