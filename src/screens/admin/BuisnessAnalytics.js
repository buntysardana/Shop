import React ,{useState}from "react";
import NavBar from "../../common/NavBar";
import Sidebar from "../../common/SideBar";
import Card from "../../common/Card";
import Heading from "../../common/Heading";
import NavBarEx from "../../common/NavBarEx";
import Button from "../../common/Button";
import styles from "./BuisnessAnalytics.module.css";
import { CustomCircularChart } from "../../common/CircularChart";
import { BarChart } from "../../common/BarChart";

const BuisnessAnalytics = () => {
  const image = {
    width: "17px",
    height: "17px",
    display: "flex",
    alignSelf: "center",
  };
  const border = {
    borderColor: "#D9D9D9",
    borderStyle: "solid",
    borderWidth: "12px",
  };
  const tableHead = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
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
      <div className="container-fluid">
        <div className="row">
          <div className={` col-lg-2 col-md-3  ${styles.left}`}>
            <Sidebar />
          </div>
          <div className="col-lg-10 col-md-9">
            <div className="row ">
              <div className="col-lg-5 col-md-6 col-sm-6">
                <Card height="100%">
                  <div className="px-3 py-3">
                    <div className="d-flex">
                      <Heading name="Sales revenue" />
                      <Button name="Weekly" width="fit-content" />
                    </div>
                    <div className="pt-4">
                      <BarChart />
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 pt-4 pt-sm-0">
                <Card backgroundColor="#EDEDED" width="100%" height="100%">
                  <div className="px-3 py-3">
                    <Heading name="Sales by region" />
                    <div className=" row justify-content-center pt-2">
                      <div className=" col-4">
                        <p>Region</p>
                      </div>
                      <div className=" col-4">
                        <p>No. of orders</p>
                      </div>
                      <div className=" col-4">
                        <p>Sale amount</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>Pune</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>100</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>1,20,000</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>Pune</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>100</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>1,20,000</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>Pune</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>100</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>1,20,000</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>Pune</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>100</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>1,20,000</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>Pune</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>100</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>1,20,000</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>Pune</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>100</p>
                      </div>
                      <div className=" col-4 text-center ">
                        <p>1,20,000</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 pt-4 pt-lg-0">
                <Card height="100%">
                  <div className="px-3 py-3">
                    <Heading name="Sales by channels" />
                    <div>
                      <CustomCircularChart />
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 pt-4 ">
                <Card height="100%">
                  <div className="px-3 row">
                    <div className={`col-lg-12  ${styles.table}`}>
                      <div className="mt-2" style={tableHead}>
                        <Heading name="Inventory levels" />
                      </div>
                      <div  style={{ overflowX: "auto", maxHeight:"330px" }}>
                      <table className="table table-borderless ">
                        <thead>
                          <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Storage name</th>
                            <th scope="col">Location </th>
                            <th scope="col">Stock</th>{" "}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">xxxxx</th>
                            <td scope="row">xwarehouse</td>
                            <td scope="row">Pune</td>
                            <td scope="row">1200</td>
                          </tr>
                          <tr>
                            <th scope="row">xxxxx</th>
                            <td scope="row">xwarehouse</td>
                            <td scope="row">Pune</td>
                            <td scope="row">1200</td>
                          </tr>
                          <tr>
                            <th scope="row">xxxxx</th>
                            <td scope="row">xwarehouse</td>
                            <td scope="row">Pune</td>
                            <td scope="row">1200</td>
                          </tr>
                          <tr>
                            <th scope="row">xxxxx</th>
                            <td scope="row">xwarehouse</td>
                            <td scope="row">Pune</td>
                            <td scope="row">1200</td>
                          </tr>
                          <tr>
                            <th scope="row">xxxxx</th>
                            <td scope="row">xwarehouse</td>
                            <td scope="row">Pune</td>
                            <td scope="row">1200</td>
                          </tr>
                          <tr>
                            <th scope="row">xxxxx</th>
                            <td scope="row">xwarehouse</td>
                            <td scope="row">Pune</td>
                            <td scope="row">1200</td>
                          </tr>
                          <tr>
                            <th scope="row">xxxxx</th>
                            <td scope="row">xwarehouse</td>
                            <td scope="row">Pune</td>
                            <td scope="row">1200</td>
                          </tr>
                          <tr>
                            <th scope="row">xxxxx</th>
                            <td scope="row">xwarehouse</td>
                            <td scope="row">Pune</td>
                            <td scope="row">1200</td>
                          </tr>
                          <tr>
                            <th scope="row">xxxxx</th>
                            <td scope="row">xwarehouse</td>
                            <td scope="row">Pune</td>
                            <td scope="row">1200</td>
                          </tr>
                          <tr>
                            <th scope="row">xxxxx</th>
                            <td scope="row">xwarehouse</td>
                            <td scope="row">Pune</td>
                            <td scope="row">1200</td>
                          </tr>
                        </tbody>
                      </table>
                      </div> 
                      {/* <div style={{ padding: '4%' }}>
                                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <div>
                                                <div style={{ fontSize: '18px', fontWeight: '500px' }}>Name</div>
                                                <div style={tableColumnData}>Bunty Don</div>
                                                <div style={tableColumnData}>Shivam</div>
                                                <div style={tableColumnData}>Ninja</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '18px', fontWeight: '500px' }}>Contact</div>
                                                <div style={tableColumnData}>Bunty Don</div>
                                                <div style={tableColumnData}>Shivam</div>
                                                <div style={tableColumnData}>Ninja</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '18px', fontWeight: '500px' }}>Shop Name</div>
                                                <div style={tableColumnData}>Bunty Don</div>
                                                <div style={tableColumnData}>Shivam</div>
                                                <div style={tableColumnData}>Ninja</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '18px', fontWeight: '500px' }}>Category</div>
                                                <div style={tableColumnData}>Bunty Don</div>
                                                <div style={tableColumnData}>Shivam</div>
                                                <div style={tableColumnData}>Ninja</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '18px', fontWeight: '500px' }}>Total Sales</div>
                                                <div style={tableColumnData}>Bunty Don</div>
                                                <div style={tableColumnData}>Shivam</div>
                                                <div style={tableColumnData}>Ninja</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '18px', fontWeight: '500px' }}> Identification</div>
                                                <div style={tableColumnData}>Bunty Don</div>
                                                <div style={tableColumnData}>Shivam</div>
                                                <div style={tableColumnData}>Ninja</div>
                                            </div>

                                        </div>
                                    </div> */}
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 pt-4 " style={{overflowX:"auto"}}>
                <Heading name="Transactions" fontSize="24px" />
                <div className="table-responsive pt-2" >
                  <table className="table">
                    <thead>
                      <tr
                        style={{
                          ...border,
                          backgroundColor: "#F0F0F0",
                          borderRadius: "12px",
                          textAlign: "center",
                        }}
                      >
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Withdrawals</th>
                        <th scope="col">Deposit</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Bill</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style={{
                          backgroundColor: "#E8E8E8",
                          ...border,
                          textAlign: "center",
                        }}
                      >
                        <td>10/01/2023</td>
                        <td>xxxxxxxxxx</td>
                        <td>500</td>
                        <td>3500</td>
                        <td>6000</td>
                        <td>view</td>
                        <td>view</td>
                      </tr>
                      <tr
                        style={{
                          backgroundColor: "#E8E8E8",
                          ...border,
                          textAlign: "center",
                        }}
                      >
                        <td>10/01/2023</td>
                        <td>xxxxxxxxxx</td>
                        <td>500</td>
                        <td>3500</td>
                        <td>6000</td>
                        <td>view</td>
                        <td>view</td>
                      </tr>
                      <tr
                        style={{
                          backgroundColor: "#E8E8E8",
                          ...border,
                          textAlign: "center",
                        }}
                      >
                        <td>10/01/2023</td>
                        <td>xxxxxxxxxx</td>
                        <td>500</td>
                        <td>3500</td>
                        <td>6000</td>
                        <td>view</td>
                        <td>view</td>
                      </tr>
                      <tr
                        style={{
                          backgroundColor: "#E8E8E8",
                          ...border,
                          textAlign: "center",
                        }}
                      >
                        <td>10/01/2023</td>
                        <td>xxxxxxxxxx</td>
                        <td>500</td>
                        <td>3500</td>
                        <td>6000</td>
                        <td>view</td>
                        <td>view</td>
                      </tr>
                      <tr
                        style={{
                          backgroundColor: "#E8E8E8",
                          ...border,
                          textAlign: "center",
                        }}
                      >
                        <td>10/01/2023</td>
                        <td>xxxxxxxxxx</td>
                        <td>500</td>
                        <td>3500</td>
                        <td>6000</td>
                        <td>view</td>
                        <td>view</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuisnessAnalytics;