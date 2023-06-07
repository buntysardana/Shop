import React,{useState} from "react";
// import NavBar from "../../../common/NavBar";
import NavBarEx from "../../../common/NavBarEx";
import SideBar from "../../../common/SideBar";
import Heading from "../../../common/Heading";
import Button from "../../../common/Button";
import styles from "../supplier/Product.module.css"
import StockReport from "../../../components/Supllier/StockReport";
import AllProductList from "../../../components/Supllier/AllProductList";

const Product = () => {
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
        {/* <NavBar /> */}
        <NavBarEx buttonName={"Create Notification"} buttonFlag={false} popUp={showPopUp} />
      </div>
      <div className=" container-fluid">
        <div className=" row ">
          <div className={` col-lg-2 col-md-3  ${styles.left}`}>
            <SideBar flag={true} />
          </div>
          <div className="col-lg-10 col-md-9 col-12 mt-2" style={{ overflowY: 'auto', height: '91vh' }}>
             <div>
              <StockReport/>
             </div>
             <div>
              <AllProductList/>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
