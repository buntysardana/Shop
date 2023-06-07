import React,{useState} from "react";
import Card from "../../common/Card";
import Heading from "../../common/Heading";
import Button from "../../common/Button";

const OtpForm = () => {
  return (
    <div>
      <Card>
        <div className="px-3 py-3">
          <div className="text-center">
            <Heading name="Enter OTP" />
          </div>
          <p className="text-center pt-2" style={{fontSize:"12px"}}>
            Please enter the 4 digit OTP which you received on your email
            ********31@gmail.com
          </p>
          <div className="d-flex justify-content-around pb-2" >
            <input style={{ width: "20%" , height:"50px"}} />
            <input style={{ width: "20%" , height:"50px"}} />
            <input style={{ width: "20%" , height:"50px"}} />
            <input style={{ width: "20%" , height:"50px"}} />
          </div>
          <p style={{fontSize:"12px" , textAlign:"center"}}>Didn’t received the OTP? Resend</p>
         <div className="text-center ">
         <Button name="Verify" bgColor="#fff" width="fit-content" borderRadius="10px"/>
         </div>
        </div>
      </Card>
    </div>
  );
};

export default OtpForm;
