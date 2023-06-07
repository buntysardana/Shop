import React from "react";
import BackIcon from "../Assets/backicon.png";
import Button from "../common/Button";

const ProductForm = () => {
  return (
    <>
      <div className="px-5 py-3" style={{backgroundColor:"#fff" ,border:"2px solid black" ,paddingTop:"40px"}}>
        <img src={BackIcon} />
        <div className="row">
          <div className="col-12 pt-4">
            <label style={{ fontWeight: 500, fontSize: 15 }}>
              Product name
            </label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "50%",
                display: "block",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2"
            />
          </div>
          <div className="col-4 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Colour</label>
            <input
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
          <div className="col-4 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Size</label>
            <input
              style={{
                backgroundColor: "#F3F1F1",
                width: "100%",
                display: "block",
                border: "none",
                borderRadius: 10,
              }}
              className="mt-2 ps-3 py-2 "
            />
          </div>
          <div className="col-4 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Quantity</label>
            <input
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
          <div className="col-4 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>Amount</label>
            <input
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
          <div className="col-4 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>GST</label>
            <input
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
          <div className="col-4 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>
              Company discount
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
            />
          </div>
          <div className="col-6 pt-3">
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
            />
          </div>
          <div className="col-6 pt-3">
            <label style={{ fontWeight: 500, fontSize: 15 }}>
              Sub category
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
            />
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-6">
                <div className="col-12 pt-3">
                  <label style={{ fontWeight: 500, fontSize: 15 }}>
                    Sub sub category
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
                  />
                </div>
                <div className="col-12 pt-3">
                  <label style={{ fontWeight: 500, fontSize: 15 }}>
                    Cover photo
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
                    placeholder="Upload image"
                    type="file"
                  />
                </div>
                <div className="col-12 pt-3">
                  <label style={{ fontWeight: 500, fontSize: 15 }}>
                    Attach link
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
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="col-12 pt-3">
                  <label style={{ fontWeight: 500, fontSize: 15 }}>
                    Product description
                  </label>
                  <textarea
                    style={{
                      backgroundColor: "#F3F1F1",
                      width: "100%",
                      display: "block",
                      border: "none",
                      borderRadius: 10,
                    }}
                    className="mt-2 ps-3 py-2"
                    placeholder="Write a description....."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <Button name="submit" />
        </div>
      </div>
    </>
  );
};

export default ProductForm;
