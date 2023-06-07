import React,{useState} from "react";
import NavBarEx from "../../common/NavBarEx";
import Sidebar from "../../common/SideBar";
import Styles from "./SpecificMerchant.module.css"
import AgentOrdereSummary from "../../components/Merchants/AgentOrdereSummary";
import ProfileDetails from "../../components/Merchants/ProfileDetails";
import SalesGraph from "../../components/Merchants/SalesGraph";
import TopOrderTable from "../../components/Merchants/TopOrderTable"
import MerchantForm from "../../components/Merchants/MerchantForm";
import Button from "../../common/Button";

const SpecificMerchant = () => {
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
        right:"0%",
        // borderColor: 'red'
        // backgroundColor: "#fff",
      };
  return (
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
                <div className="col-12">
                    <AgentOrdereSummary/>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12 pt-4 h-100">
                    <ProfileDetails/>
                    <div>
                        <Button/>
                        <Button/>
                    </div>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-12 pt-4 h-100" style={{overflowY:"auto", maxHeight:'600px'}}>
                      <SalesGraph/>
                      <div className="pt-3">
                           <TopOrderTable/>
                      </div>
                </div>
            </div>
          </div>
        </div>
        <div style={popcontainer}>
          <div>{open && <MerchantForm />}</div>
        </div>
      </div>
    </div>
  );
};

export default SpecificMerchant;
