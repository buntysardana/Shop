import React from "react";
import NavBar from "../../common/NavBar";
import Sidebar from "../../common/SideBar";
import styles from "./ShopProduct.module.css";
import Heading from "../../common/Heading";
import Button from "../../common/Button";
import SimilarProduct from "../Supllier/SimilarProduct"
const ShopProduct = () => {
  return (
    <div>
        <div>
          <NavBar />
        </div>
        <div className=" container-fluid">
          <div className="row pt-3">
            <div className={` col-lg-2  ${styles.left}`}>
              <Sidebar />
            </div>
            <div className="col-lg-10 col-md- 12 col-12">
              <div className="row">
                <div
                  className="col-lg-6 col-md-6 col-ssm-12 col-12"
                  style={{ backgroundColor: "#D9D9D9" }}
                ></div>
                <div className="col-lg-6 col-md-6 col-ssm-12 col-12">
                  <Heading fontSize="32px" fontWeight="400" name="Top" />
                  <p
                    style={{ fontSize: "15px", fontWeight: "400" }}
                    className="pt-3"
                  >
                    Rs. 2000
                  </p>
                  <p style={{ fontSize: "15px", fontWeight: "400" }}>20% off</p>
                  <p style={{ fontSize: "20px", fontWeight: "400" }}>Colors</p>
                  <div className="d-flex justify-content-between">
                    <input type="radio" />
                    <input type="radio" />
                    <input type="radio" />
                    <input type="radio" />
                    <input type="radio" />
                    <input type="radio" />
                    <input type="radio" />
                  </div>
                  <p
                    style={{ fontSize: "20px", fontWeight: "400" }}
                    className="pt-3"
                  >
                    Select Size
                  </p>
                  <div className="pt-3 d-flex justify-content-between">
                    <Button
                      name="xs"
                      width="40px"
                      marginRight="0"
                      marginLeft="0"
                    />
                    <Button
                      name="s"
                      width="40px"
                      marginRight="0"
                      marginLeft="0"
                    />
                    <Button
                      name="M"
                      width="40px"
                      marginRight="0"
                      marginLeft="0"
                    />
                    <Button
                      name="L"
                      width="40px"
                      marginRight="0"
                      marginLeft="0"
                    />
                    <Button
                      name="xL"
                      width="40px"
                      marginRight="0"
                      marginLeft="0"
                    />
                  </div>
                  <div className="pt-5" style={{ width: "80%" }}>
                    <Heading
                      fontSize="48px"
                      fontWeight="400"
                      name="Product Information"
                    />
                    <p
                      style={{ fontSize: "20px", fontWeight: "400" }}
                      className="pt-3"
                    >
                      Product details Care instructions, Pack contains
                    </p>
                    <hr></hr>
                    <p
                      style={{ fontSize: "20px", fontWeight: "400" }}
                      className="pt-3"
                    >
                      Know your product Description{" "}
                    </p>
                    <hr></hr>
                    <p
                      style={{ fontSize: "20px", fontWeight: "400" }}
                      className="pt-3"
                    >
                      Vendor details Manufacturer details, Country of origin{" "}
                    </p>
                    <hr></hr>
                    <p
                      style={{ fontSize: "20px", fontWeight: "400" }}
                      className="pt-3"
                    >
                      Return and exchange policy Know more about return and
                      exchange
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 pt-4">
                   <SimilarProduct/>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ShopProduct;
