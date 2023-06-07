import React, {useState} from "react";
import NavBarEx from "../../common/NavBarEx";
import Sidebar from "../../common/SideBar";
import Heading from "../../common/Heading";
import Backicon from "../../Assets/backicon.png";
import Button from "../../common/Button";
import styles from "./Settings.module.css"

const Settings = () => {
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
        <div className="row justify-content-center">
          <div className={` col-2 ${styles.left}`}>
            <Sidebar />
          </div>
          <div className="col-10">
            <div style={{ display: "flex", alignItems: "end" }}>
              <img width={30} height={30} src={Backicon} />
              <div className="ps-4">
                <p>Back to customers</p>
                <Heading
                  paddingLeft={"4%"}
                  fontSize={"24px"}
                  fontWeight={600}
                  name="Neha Patil"
                />
              </div>
            </div>
            <div className="ps-4 pt-4">
              <div
                style={{
                  width: "166px",
                  height: "166px",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "100px",
                }}></div>
              <div className="row">
                <div className="col-lg-6 col-md-6 pt-3">
                  <label style={{ fontWeight: 500, fontSize: 15 }}>Name</label>
                  <input
                    style={{
                      backgroundColor: "#F3F1F1",
                      width: "100%",
                      display: "block",
                      border: "none",
                      borderRadius: 10,
                    }}
                    className="mt-2 ps-3 py-2 "
                  />
                </div>
                <div className="col-lg-6 col-md-6 pt-3">
                  <label style={{ fontWeight: 500, fontSize: 15 }}>
                    Log id
                  </label>
                  <input
                    style={{
                      backgroundColor: "#F3F1F1",
                      width: "100%",
                      display: "block",
                      border: "none",
                      borderRadius: 10,
                    }}
                    className="mt-2 ps-3 py-2 "
                  />
                </div>
                <div className="col-lg-6 col-md-6 pt-5">
                  <label style={{ fontWeight: 500, fontSize: 15 }}>
                    Email id
                  </label>
                  <input
                    style={{
                      backgroundColor: "#F3F1F1",
                      width: "100%",
                      display: "block",
                      border: "none",
                      borderRadius: 10,
                    }}
                    className="mt-2 ps-3 py-2 "
                  />
                </div>
                <div className="col-lg-6 col-md-6 pt-5">
                  <label style={{ fontWeight: 500, fontSize: 15 }}>
                    Phone number
                  </label>
                  <input
                    style={{
                      backgroundColor: "#F3F1F1",
                      width: "100%",
                      display: "block",
                      border: "none",
                      borderRadius: 10,
                    }}
                    className="mt-2 ps-3 py-2 "
                  />
                </div>
              </div>
              <div className="pt-5">
                <hr></hr>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p>Delete account</p>
                  <p>By deleting your account, you will lose all your data</p>
                </div>
                <div>
                  <div>
                    <Button name="Delete account" width="fit-content" />
                  </div>
                  <div className="pt-5">
                    <Button name="Save changes" width="fit-content" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
