import React,{useState} from "react";
import NavBarEx from "../../common/NavBarEx";
import Sidebar from "../../common/SideBar";
import Styles from "./SpecificShop.module.css";
import Card from "../../common/Card";
import Heading from "../../common/Heading";
import Button from "../../common/Button";
// import CustomLineChart  from "../../common/CustomLineChart";
// import CustomCircularChart  from "../../common/CircularChart";
import { CustomLineChart } from "../../common/CustomLineChart";
import { CustomCircularChart } from "../../common/CircularChart";
import TotalCatagries from "../../components/Shop/TotalCatagries";
const SpecificShop = () => {
    const [open, setOpen] = useState(0);
    const showPopUp = (value) => {
        setOpen(value)
    }
    const closePopUp = () => {
        setOpen(0)
    }
  return (
    <div>
      <div>
        <div>
          {/* <NavBar /> */}
          <NavBarEx
            buttonName={"Create New Coupon"}
            buttonFlag={true}
            popUp={showPopUp}
          />
        </div>
        <div className="container-fluid position-relative">
          <div className="row">
            <div className={` col-lg-2  ${Styles.left}`}>
              <Sidebar />
            </div>
            <div className="col-lg-10 col-md-12 col-sm-12">
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
              <div className="col-4 pt-3">
                   <TotalCatagries/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificShop;
