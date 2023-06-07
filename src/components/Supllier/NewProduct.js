import React from "react";
import Backicon from "../../Assets/backicon.png";
import Button from "../../common/Button";

const NewProduct = () => {
  return (
    <div>
      <div className=" container-fluid pt-3">
        <img src={Backicon} />
        <div className="row">
          <div className="col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>
              Product name
            </label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "50%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2 d-block"
              type="text"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Colour</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2 d-block"
              type="text"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Size</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2 d-block"
              type="text"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Quantity</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2 d-block"
              type="text"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Amount</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2 d-block"
              type="text"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>GST</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2 d-block"
              type="text"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>
              Company discount
            </label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2 d-block"
              type="text"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Category</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2 d-block"
              type="text"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>
              Sub category
            </label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2 d-block"
              type="text"
            />
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
                <label style={{ fontWeight: 500, fontSize: 15 }}>
                  Sub sub category
                </label>
                <input
                  style={{
                    backgroundColor: "#F3F1F1",
                    width: "100%",
                    border: "none",
                    borderRadius: 10,
                  }}
                  className="mt-2 ps-3 py-2 d-block"
                  type="text"
                />
                <label style={{ fontWeight: 500, fontSize: 15 }}>
                  Cover photo
                </label>
                <input
                  style={{
                    backgroundColor: "#F3F1F1",
                    width: "100%",
                    border: "none",
                    borderRadius: 10,
                  }}
                  className="mt-2 ps-3 py-2 d-block"
                  type="file"
                />
                <label style={{ fontWeight: 500, fontSize: 15 }}>
                  Attach link
                </label>
                <input
                  style={{
                    backgroundColor: "#F3F1F1",
                    width: "100%",
                    border: "none",
                    borderRadius: 10,
                  }}
                  className="mt-2 ps-3 py-2 d-block"
                  type="text"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
                <label style={{ fontWeight: 500, fontSize: 15 }}>
                  Product description
                </label>
                <textarea
                  style={{
                    backgroundColor: "#F3F1F1",
                    width: "100%",
                    border: "none",
                    borderRadius: 10,
                  }}
                  className="mt-2 ps-3 py-2 d-block"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 text-center">
          <Button name="Submit" width="fit-content" borderRadius="12px"/>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
