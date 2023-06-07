import React from "react";
import Backicon from "../Assets/backicon.png";
import Button from "../common/Button";

const CreateCouponform = (props) => {

  const clickHandler=()=>{
    props.closePopUp()
  }
  
  return (
    <div className="px-5 py-3" style={{backgroundColor:"#fff" ,border:"2px solid black" ,paddingTop:"40px"}}>
      <img src={Backicon} onClick={clickHandler} />
      <div className="row">
        <div className="col-12 pt-4">
          <label style={{ fontWeight: 500, fontSize: 15 }}>Code name</label>
          <input
            style={{
              backgroundColor: "#F3F1F1",
              width: "100%",
              display: "block",
              border: "none",
              borderRadius: 10,
            }}
            className="mt-2 ps-3 py-2"
            type="text"
          />
        </div>
        <div className="col-12 col-md-6 pt-4">
          <label style={{ fontWeight: 500, fontSize: 15 }}>Product</label>
          <input
            style={{
              backgroundColor: "#F3F1F1",
              width: "100%",
              display: "block",
              border: "none",
              borderRadius: 10,
            }}
            className="mt-2 ps-3 py-2"
            type="text"
          />
        </div>
        <div className="col-12 col-md-6 pt-4">
          <label style={{ fontWeight: 500, fontSize: 15 }}>Category</label>
          <input
            style={{
              backgroundColor: "#F3F1F1",
              width: "100%",
              display: "block",
              border: "none",
              borderRadius: 10,
            }}
            className="mt-2 ps-3 py-2"
            type="text"
          />
        </div>
        <div className="col-12 pt-4">
          <label style={{ fontWeight: 500, fontSize: 15 }}>
            Discount percentage
          </label>
          <input
            style={{
              backgroundColor: "#F3F1F1",
              width: "100%",
              display: "block",
              border: "none",
              borderRadius: 10,
            }}
            className="mt-2 ps-3 py-2"
            type="text"
          />
        </div>
        <div className="col-12 pt-4">
          <label style={{ fontWeight: 500, fontSize: 15 }}>Validity</label>
          <input
            style={{
              backgroundColor: "#F3F1F1",
              width: "100%",
              display: "block",
              border: "none",
              borderRadius: 10,
            }}
            className="mt-2 ps-3 py-2"
            type="text"
          />
        </div>
        <div className="col-12 pt-4">
          <label style={{ fontWeight: 500, fontSize: 15 }}>Conditions</label>
          <textarea
            style={{
              backgroundColor: "#F3F1F1",
              width: "100%",
              display: "block",
              border: "none",
              borderRadius: 10,
            }}
            className="mt-2 ps-3 py-2"
          />
        </div>
      </div>
      <div className="mt-5 text-center">
        <Button name="submit" width="20%" />
      </div>
    </div>
  );
};

export default CreateCouponform;
