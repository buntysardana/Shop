import React, { useState, useEffect } from "react";
import Sidebar from "../../../common/SideBar";
import NavBar from "../../../common/NavBar";
import NavBarEx from "../../../common/NavBarEx";
import Card from "../../../common/Card";
import Heading from "../../../common/Heading";
import Button from "../../../common/Button";
import styles from "../catalog/Catalog.module.css";
import dustbin from "../../../Assets/🦆 icon _trash_.png";
import { CustomLineChart } from "../../../common/CustomLineChart";
const Dashboard = () => {
  const [open, setOpen] = useState(0);
    const showPopUp = (value) => {
        setOpen(value)
    }
    const closePopUp = () => {
        setOpen(0)
    }
  const flagForSideNav=true;
  const data = [1, 2, 3,4,5,6,7,8,9,10,11,12];
  // return <CardList data={cardData} />;
  return (
    <div>
      <div>
        {/* <NavBar buttonFlag="true" /> */}
        <NavBarEx buttonName={"Create Notification"} buttonFlag={false} popUp={showPopUp} />
      </div>
      <div className=" container-fluid">
        <div className=" row">
          <div className={` col-lg-2 col-md-3  ${styles.left}`}>
            <Sidebar flag={flagForSideNav} />
          </div>
          <div className="col-lg-10 col-md-9 col-12 mt-1" style={{ overflowY: 'auto', height: '91vh' }}>
            <div className="row">
              <div className="col-lg-8 col-md-7 col-sm-7 ">
                <Card height="100%">
                  <div className="px-3 py-3">
                    <div className="d-flex align-items-center">
                      <Heading
                        name="Product sales"
                        fontSize="26px"
                        fontWeight="600"
                      />
                      <div className="ps-3">
                        <Button
                          name="Weekly"
                          width="fit-content"
                          borderRadius="12px"
                        />
                      </div>
                    </div>
                    <div>
                      <CustomLineChart />
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-5 pt-4 pt-sm-0">
                <Card height="100%">
                  <div className="px-3 py-3">
                    <Heading
                      name="Top products"
                      fontSize="26px"
                      fontWeight="600"
                    />
                    <div
                      style={{
                        paddingTop: "20px",
                        overflowY: "auto",
                        maxHeight: "250px",
                      }}
                    >
                      <div className="d-flex justify-content-around">
                        <div
                          style={{
                            width: "29px",
                            height: "29px",
                            borderRadius: "100px",
                            backgroundColor: "#C6BDBD",
                          }}
                        ></div>
                        <p>Lehenga</p>
                        <p>2,78,000</p>
                      </div>
                      <div className="d-flex justify-content-around">
                        <div
                          style={{
                            width: "29px",
                            height: "29px",
                            borderRadius: "100px",
                            backgroundColor: "#C6BDBD",
                          }}
                        ></div>
                        <p>Lehenga</p>
                        <p>2,78,000</p>
                      </div>
                      <div className="d-flex justify-content-around">
                        <div
                          style={{
                            width: "29px",
                            height: "29px",
                            borderRadius: "100px",
                            backgroundColor: "#C6BDBD",
                          }}
                        ></div>
                        <p>Lehenga</p>
                        <p>2,78,000</p>
                      </div>
                      <div className="d-flex justify-content-around">
                        <div
                          style={{
                            width: "29px",
                            height: "29px",
                            borderRadius: "100px",
                            backgroundColor: "#C6BDBD",
                          }}
                        ></div>
                        <p>Lehenga</p>
                        <p>2,78,000</p>
                      </div>
                      <div className="d-flex justify-content-around">
                        <div
                          style={{
                            width: "29px",
                            height: "29px",
                            borderRadius: "100px",
                            backgroundColor: "#C6BDBD",
                          }}
                        ></div>
                        <p>Lehenga</p>
                        <p>2,78,000</p>
                      </div>
                      <div className="d-flex justify-content-around">
                        <div
                          style={{
                            width: "29px",
                            height: "29px",
                            borderRadius: "100px",
                            backgroundColor: "#C6BDBD",
                          }}
                        ></div>
                        <p>Lehenga</p>
                        <p>2,78,000</p>
                      </div>
                      <div className="d-flex justify-content-around">
                        <div
                          style={{
                            width: "29px",
                            height: "29px",
                            borderRadius: "100px",
                            backgroundColor: "#C6BDBD",
                          }}
                        ></div>
                        <p>Lehenga</p>
                        <p>2,78,000</p>
                      </div>
                      <div className="d-flex justify-content-around">
                        <div
                          style={{
                            width: "29px",
                            height: "29px",
                            borderRadius: "100px",
                            backgroundColor: "#C6BDBD",
                          }}
                        ></div>
                        <p>Lehenga</p>
                        <p>2,78,000</p>
                      </div>{" "}
                      <div className="d-flex justify-content-around">
                        <div
                          style={{
                            width: "29px",
                            height: "29px",
                            borderRadius: "100px",
                            backgroundColor: "#C6BDBD",
                          }}
                        ></div>
                        <p>Lehenga</p>
                        <p>2,78,000</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-12 pt-4">
                <div className="row">
                  {data.map((item, index) => {
                    return (
                      <div key={index} className="col-lg-2 col-md-3 col-sm-6 mt-2">
                        <Card
                          bgColor="#fff"
                          width="100%"
                          paddingLeft="2%"
                          paddingRight="2%"
                        >
                          <div className={`${styles.container}`}>
                            <div style={{ backgroundColor: "red" }}>don</div>
                            <div
                              style={{
                                backgroundColor: "yellow",
                                height: "70px",
                              }}
                            >
                              hello
                            </div>
                          </div>
                        </Card>
                        <div
                          className="mt-1 px-1"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>Edit</p>
                          <img
                            width={15}
                            height={20}
                            src={dustbin}
                            alt="Trash Icon"
                          />
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
