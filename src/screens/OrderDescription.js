import React from "react";
import NavBar from "../common/NavBar";
import NavBarEx from "../common/NavBarEx";
import Sidebar from "../common/SideBar";
import Backicon from "../Assets/backicon.png";
import Heading from "../common/Heading";
import Bellicon from "../Assets/notifications.png";
import Questionicon from "../Assets/Questionicon.png";
import Button from "../common/Button";
import Card from "../common/Card";
import Xicon from "../Assets/x.png"
import styles from "./Coupon.module.css"

const OrderDescription = () => {
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
        <NavBarEx buttonName={"Create New Coupon"} buttonFlag={true} popUp={showPopUp} />
      </div>
      <div className="container-fluid">
        <div className=" row">
          <div className={` col-lg-2 col-md-3  ${styles.left}`}>
            <Sidebar />
          </div>
          <div className="col-lg-10 col-md-9 pt-3">
            <div className="row">
              <div className='col-lg-8 col-md-8 col-sm-8 col-8' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ alignSelf: 'center' }}>
                  <img width={30} height={30} src={Backicon} />
                </div>
                <Heading paddingLeft={'4%'} fontSize={"24px"} fontWeight={600} name="Neha Patil" />
              </div>

              <div className='col-lg-4 col-md-4 col-sm-4 col-4' >
                <div style={{
                  display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',
                  paddingLeft: '12%', paddingRight: '12%'
                }}>
                  <div style={{ alignSelf: 'center', }}>
                    <img width={30} height={30} src={Bellicon} />
                  </div>
                  <div style={{ alignSelf: 'center' }}>
                    <img width={30} height={30} src={Questionicon} />
                  </div>
                  <Button width={'29%'} marginLeft={'2%'} marginRight={'0px'} borderRadius={10} name="Block" />
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="pt-4">
                  <Card bgColor="#F0F0F0">
                    <div className="px-4 py-3">
                      <p>Order #1021</p>
                      <div className="d-flex ">
                        <div className="me-4">
                          <Button name="Paid" width="fit-content" />
                        </div>
                        <div>
                          <Button name="Delivered" width="fit-content" />
                        </div>
                      </div>
                      <div className="pt-3">
                        <Card bgColor="#fff">
                          <div className="px-4 py-3">
                            <div className="row align-items-center">
                              <div className="col-5 pt-4">
                                <p>Product Details</p>
                              </div>
                              <div className="col-2">
                                <p>Price</p>
                              </div>
                              <div className="col-2">
                                <p>Quantity</p>
                              </div>
                              <div className="col-2">
                                <p>Subtotal</p>
                              </div>
                              <hr></hr>
                              <div className="col-5 pt-4">
                                <div className="d-flex align-items-center">
                                  <div>
                                    <img src={Bellicon} />
                                  </div>
                                  <p
                                    className="ps-3 mb-0"
                                    style={{ fontSize: "10px", width: "168px" }}
                                  >
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                  </p>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="d-flex justify-content-between">
                                  <input style={{ width: "45%" }} />
                                  <div style={{ width: "10%", textAlign: "center" }} >
                                    <img src={Xicon} />
                                  </div>
                                  <input style={{ width: "45%" }} />
                                </div>

                              </div>
                              <div className="col-3">
                                <p className="mb-0"> 11,500</p>
                              </div>
                              <div className="col-5 pt-4">
                                <div className="d-flex align-items-center">
                                  <div>
                                    <img src={Bellicon} />
                                  </div>
                                  <p
                                    className="ps-3 mb-0"
                                    style={{ fontSize: "10px", width: "168px" }}
                                  >
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                  </p>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="d-flex justify-content-between">
                                  <input style={{ width: "45%" }} />
                                  <div style={{ width: "10%", textAlign: "center" }} >
                                    <img src={Xicon} />
                                  </div>
                                  <input style={{ width: "45%" }} />
                                </div>

                              </div>
                              <div className="col-3">
                                <p className="mb-0"> 11,500</p>
                              </div>

                              <div className="col-5 pt-4">
                                <div className="d-flex align-items-center">
                                  <div>
                                    <img src={Bellicon} />
                                  </div>
                                  <p
                                    className="ps-3 mb-0"
                                    style={{ fontSize: "10px", width: "168px" }}
                                  >
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                  </p>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="d-flex justify-content-between">
                                  <input style={{ width: "45%" }} />
                                  <div style={{ width: "10%", textAlign: "center" }} >
                                    <img src={Xicon} />
                                  </div>
                                  <input style={{ width: "45%" }} />
                                </div>

                              </div>
                              <div className="col-3">
                                <p className="mb-0"> 11,500</p>
                              </div>

                              <div className="col-5 pt-4">
                                <div className="d-flex align-items-center">
                                  <div>
                                    <img src={Bellicon} />
                                  </div>
                                  <p
                                    className="ps-3 mb-0"
                                    style={{ fontSize: "10px", width: "168px" }}
                                  >
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                  </p>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="d-flex justify-content-between">
                                  <input style={{ width: "45%" }} />
                                  <div style={{ width: "10%", textAlign: "center" }} >
                                    <img src={Xicon} />
                                  </div>
                                  <input style={{ width: "45%" }} />
                                </div>

                              </div>
                              <div className="col-3">
                                <p className="mb-0"> 11,500</p>
                              </div>

                              <div className="col-5 pt-4">
                                <div className="d-flex align-items-center">
                                  <div>
                                    <img src={Bellicon} />
                                  </div>
                                  <p
                                    className="ps-3 mb-0"
                                    style={{ fontSize: "10px", width: "168px" }}
                                  >
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                  </p>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="d-flex justify-content-between">
                                  <input style={{ width: "45%" }} />
                                  <div style={{ width: "10%", textAlign: "center" }} >
                                    <img src={Xicon} />
                                  </div>
                                  <input style={{ width: "45%" }} />
                                </div>

                              </div>
                              <div className="col-3">
                                <p className="mb-0"> 11,500</p>
                              </div>

                              <div className="col-5 pt-4">
                                <div className="d-flex align-items-center">
                                  <div>
                                    <img src={Bellicon} />
                                  </div>
                                  <p
                                    className="ps-3 mb-0"
                                    style={{ fontSize: "10px", width: "168px" }}
                                  >
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                  </p>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="d-flex justify-content-between">
                                  <input style={{ width: "45%" }} />
                                  <div style={{ width: "10%", textAlign: "center" }} >
                                    <img src={Xicon} />
                                  </div>
                                  <input style={{ width: "45%" }} />
                                </div>

                              </div>
                              <div className="col-3">
                                <p className="mb-0"> 11,500</p>
                              </div>

                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="col-lg-4 pt-4">
                <Card>
                  <div className="px-4 py-3">
                    <p>Shipping address</p>
                    <p className="mx-auto" style={{ fontSize: "10px" }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry.
                    </p>
                  </div>
                </Card>
                <div className="pt-4">
                  <Card>
                    <div className="px-4 py-3">
                      <p>Bill details</p>
                      <div className="d-flex justify-content-between">
                        <p>Subtotal</p>
                        <p>23,00</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p>Taxes</p>
                        <p>720</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p>Total amount</p>
                        <p>95,000</p>
                      </div>
                      <p>Delivered on 01/02/2023</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderDescription;