import React,{useState} from "react";
import Heading from "../common/Heading";
import Sidebar from "../common/SideBar";
import TableRow from "../components/Table/TableRow";
import styles from "./Product.module.css";
import dustbin from "../Assets/🦆 icon _trash_.png";
import redEye from "../Assets/remove_red_eye.png";
import NavBarEx from "../common/NavBarEx";

export default function Product() {
  const row = {
    backgroundColor: "#E8E8E8",
    borderRadius: 12,
    height: 40,
    alignContent: "center",
  };

  const common = {
    padding: 0,
    // minWidth:105,
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
  };
  const image = {
    width: "17px",
    height: "17px",
    alignSelf: "center",
  };
  const [open, setOpen] = useState(0);
  const showPopUp = (value) => {
    setOpen(value);
  };
  const closePopUp = () => {
    setOpen(0);
  };
  return (
    <>
      {/* <NavBar /> */}
      <NavBarEx
        buttonName={"Create New Coupon"}
        buttonFlag={true}
        popUp={showPopUp}
      />
      <div className="container-fluid">
        <div className="row">
          <div className={`col-lg-2 col-md-2 ${styles.left}`}>
            <Sidebar />
          </div>

          <div
            className={`col-lg-10 col-md-10 ${styles.right}`}
            style={{ backgroundColor: "#fff" }}
          >
            <Heading name="Stock Report" fontSize={28} />

            <div className="my-2">
              <TableRow>
                {/* product name div */}
                <div
                  className={`col-lg-2 col-md-2 ${styles.font} `}
                  style={common}
                >
                  {/* {props.productName} */}
                  Product Name
                </div>

                <div
                  className={`col-lg-1 col-md-1 ${styles.font} `}
                  style={common}
                >
                  {/* {props.productId} */}
                  Product Id
                  {/* Product I'd */}
                </div>

                <div
                  className={`col-lg-2 col-md-2 ${styles.font} `}
                  style={common}
                >
                  {/* {props.category} */}
                  Category
                  {/* Category */}
                </div>

                <div
                  className={`col-lg-1 col-md-1 ${styles.font} `}
                  style={common}
                >
                  {/* {props.status}  */}
                  Status
                  {/* Status */}
                </div>

                <div
                  className={`col-lg-2 col-md-2 ${styles.font}`}
                  style={common}
                >
                  {/* {props.dateAdded} */}
                  Date Added
                  {/* Date Added */}
                </div>

                <div
                  className={`col-lg-1 col-md-1 ${styles.font} ${styles.common}`}
                  style={common}
                >
                  {/* {props.price} */}
                  Price
                  {/* Price */}
                </div>

                <div
                  className={`col-lg-1 col-md-1 ${styles.font} ${styles.common}`}
                  style={common}
                >
                  {/* {props.quantity} */}
                  Quantity
                  {/* Price */}
                </div>

                <div
                  className={`col-lg-2 col-md-2 ${styles.common}`}
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <span
                    className={styles.font}
                    style={{ display: "block", alignContent: "center" }}
                  >
                    Edit
                  </span>
                  <img
                    className={styles.iconSize}
                    style={image}
                    src={dustbin}
                    alt="dustbin"
                  />
                  <img style={image} src={redEye} alt="Eye" />
                </div>
              </TableRow>
            </div>
            {/* {[1].map(() => {
                            return (
                                <div  className={`my-2 `} >
                                    <TableRow productName={"Jalaj Gupta"} productId={"#1243"} category={"Pop"}
                                        status={"ordered"} dateAdded={"12/05/2023"} price={"50,000"}
                                        quantity={"20"} />
                                </div>
                            )
                        })} */}
          </div>
        </div>
      </div>
    </>
  );
}
