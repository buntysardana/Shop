import React, { useState } from "react";
import Sidebar from "../common/SideBar";
import { CustomLineChart } from "../common/CustomLineChart";
import { CustomCircularChart } from "../common/CircularChart";
import Card from "../common/Card";
import Heading from "../common/Heading";
import Styles from "./Shop.module.css";

import NavBarEx from "../common/NavBarEx";
import Button from "../common/Button";
import ShopListTable from "../components/Shop/ShopListTable";
import ShopForm from "../components/Shop/ShopForm";
import TotalCatagries from "../components/Shop/TotalCatagries"

export default function Shop() {
  const border = {
    borderColor: "#D9D9D9",
    borderStyle: "solid",
    borderWidth: "12px",
  };
  const [open, setOpen] = useState(0);
  const showPopUp = (value) => {
      setOpen(value)
  }
  const closePopUp = () => {
      setOpen(0)
  }

  const popcontainer = {
    height: "100%",
    width: "40%",
    position: "absolute",
    top: "0%",
    // right: "50%",
    left:"30%"
    // borderColor: 'red'
    // backgroundColor: "#fff",
  };

  return (
    <div >
      <div className="pb-4">
        {/* <Navbar /> */}
        <NavBarEx
        buttonName={"Create New Coupon"}
        buttonFlag={true}
        popUp={showPopUp}
      />
      </div>
      <div className="container-fluid  position-relative">
        <div className="row">
          <div className={` col-lg-2 col-md-3  ${Styles.left}`}>
            <Sidebar />
          </div>
          <div className="col-lg-10 col-md-9 col-12 mt-2">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <Card width="100%" height="100%">
                  <div className="d-flex pt-3">
                    <Heading
                      paddingLeft={"4%"}
                      fontSize={"20px"}
                      fontWeight={600}
                      name="No. of shops vs sales"
                    />
                    <Button name="Last month" width="fit-content" />
                  </div>
                  <CustomLineChart />          
                </Card>
              </div>
              <div className={`col-lg-6 col-md-6 col-sm-6 col-12 pt-3 pt-sm-0`}>
                
                <Card width="100%" height={"100%"}>
                  <Heading
                    paddingLeft={"4%"}
                    fontSize={"20px"}
                    fontWeight={600}
                    name="Top shops with maximum sales"
                  />
                  
                  <CustomCircularChart outerWidth={'65%'} width={'100%'} left={"40%"} aspectRatio={1.70}  />
                </Card>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-2">
                <Heading fontSize={"24px"} fontWeight={600} name="Shop list" />
                {/* <div style={{ overflowX: 'auto' }}> */}
                <ShopListTable />
              </div>
            </div>
          </div>
        </div>
        <div style={popcontainer}>
          <div>{open && <ShopForm />}</div>
        </div>
      </div>
    </div>
  );
}
