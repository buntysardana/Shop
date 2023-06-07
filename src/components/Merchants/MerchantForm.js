import React from "react";
import Backicon from "../../Assets/backicon.png";
import Heading from "../../common/Heading";
import Button from "../../common/Button";

const MerchantForm = () => {
  return (
    <div style={{backgroundColor:"#fff" ,border:"2px solid black" ,paddingTop:"40px"}}>
      <div className="px-5 py-4 ">
        <div className="row align-items-center">
          <div className="col-lg-9 col-md-8">
            <div className="d-flex align-items-center">
              <img className="pe-3" src={Backicon} />
              <Heading name="Rahul Sharma" />
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <Button
              name="Upgrade as shop owner"
              width="fit-content"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-lg-6  pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Log id</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2"
              type="text"
            />
          </div>
          <div className="col-lg-6 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Name</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2"
              type="text"
            />
          </div>
          <div className="col-12 pt-4">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Email id</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                display: "block",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2"
              type="email"
            />
          </div>
          <div className="col-12 pt-4">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Contactd</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                display: "block",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2"
              type="number"
            />
          </div>
          <div className="col-12 pt-4">
            <label style={{ fontWeight: 500, fontSize: 15 }}>
              Shop allotted
            </label>
            <select
              style={{
                display: "block",
                backgroundColor: "#F3F1F1",
                width: "100%",
                display: "block",
                border: "none",
                borderRadius: 10,
              }}
              className="py-2"
            ></select>
          </div>
          <div className="col-12 pt-4">
            <label style={{ fontWeight: 500, fontSize: 15 }}>
              Category allotted
            </label>
            <select
              style={{
                display: "block",
                backgroundColor: "#F3F1F1",
                width: "100%",
                display: "block",
                border: "none",
                borderRadius: 10,
              }}
              className="py-2 px-5"
            ></select>
          </div>
          <div className="mt-5 text-center " style={{paddingBottom:"60px"}}>
            <Button name="Update" width="15%" borderRadius="10px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantForm;
