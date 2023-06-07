import React from "react";
import Backicon from "../Assets/backicon.png";
import Button from "../common/Button";



const SubAdminPopup = (props) => {
  const clickHandler=()=>{
    props.closePopUp()
  }
  return (
    <div className="px-5 py-3" style={{backgroundColor:"#fff" ,border:"2px solid black" ,paddingTop:"40px"}}>
      <img src={Backicon} onClick={clickHandler} />
      <div className="row">
        <div className="col-12 pt-4">
          <label style={{ fontWeight: 500, fontSize: 15 }}>Name</label>
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
          <label style={{ fontWeight: 500, fontSize: 15 }}>Email address</label>
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
      </div>
      <div className="mt-5 text-center">
        <Button borderRadius={10} name="submit" width="20%" />
      </div>
    </div>
  );
};

export default SubAdminPopup;
