import React,{useState} from "react";
import NavBarEx from "../../common/NavBarEx";
import Sidebar from "../../common/SideBar";
import Heading from "../../common/Heading";
import Card from "../../common/Card";
import { CustomLineChart } from "../../common/CustomLineChart";
import TopAgent from "../../components/Merchants/TopAgent";
import MerchantListTable from "../../components/Merchants/MerchantListTable";
import Styles from "./Merchant.module.css"
import MerchantForm from "../../components/Merchants/MerchantForm";

const Merchant = () => {
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
    left:"30%",
    // borderColor: 'red'
    // backgroundColor: "#fff",
  };
  
  return (
    <div>
      <div>
        {/* <NavBar /> */}
        <NavBarEx buttonName={"Create New Coupon"} buttonFlag={true} popUp={showPopUp} />
      </div>
      <div className="container-fluid position-relative">
        <div className="row">
        <div className={` col-lg-2 col-md-3  ${Styles.left}`}>
            <Sidebar />
          </div>
          <div className="col-lg-10 col-md-9">
            <div className="row pt-3">
              <div className="col-lg-6 col-md-6">
                <Card height="100%">
                  <div className="px-2 py-3">
                    <Heading fontSize="20px" fontWeight="600" name="No. of agents vs sales" />
                    <div className="d-flex align-items-center justify-content-center">
                      <CustomLineChart />
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-lg-6 col-md-6 pt-3 pt-md-0">
                <Card height="100%">
                  <div className="px-2 py-3">
                    <TopAgent />
                  </div>
                </Card>
              </div>
              <div className="col-lg-12 col-md-12 pt-3">
                <MerchantListTable />
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

export default Merchant;
