import React from "react";
import Backicon from "../../Assets/backicon.png";
import Button from "../../common/Button";
import Heading from "../../common/Heading";

const ShopForm = () => {
  return (
    <div style={{backgroundColor:"#fff"}}>
      <div className="container-fluid px-3 py-3 ">
        <div className="d-flex align-items-center">
          <div>
            <img src={Backicon} className="pe-3" />
          </div>
          <Heading name="Tradersxxxxxx" />
        </div>
        <div className="row pt-4">
          <div className="col-12 col-md-6 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Owner name</label>
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
          <div className="col-12 col-md-6 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>
              Owner contact
            </label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2"
              type="number"
            />
          </div>
          <div className="col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Email id</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2"
              type="email"
            />
          </div>
          <div className="col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Shop name</label>
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
          <div className="col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Contact</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2"
              type="number"
            />
          </div>
          <div className="col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Logo</label>
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
          <div className="col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Tagline</label>
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
          <div className="col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>
              No. of category
            </label>
            <div className="row align-items-end justify-content-between">
              <div className="col-12 col-md-7">
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
              <div className="col-12 col-md-5 mt-3 mt-md-0">
                <Button
                  name="Add new category"
                  width="100%"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
          <div className="col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>
              No. of agents
            </label>
            <div className="row align-items-end justify-content-between">
              <div className="col-12 col-md-7">
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
              <div className="col-12 col-md-5 mt-3 mt-md-0">
                <Button
                  name="Add new category"
                  width="100%"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <Button name="Update" width="20%" borderRadius="10px" />
        </div>
      </div>
    </div>
  );
};

export default ShopForm;
