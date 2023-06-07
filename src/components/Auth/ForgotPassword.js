import React, { useState } from "react";
import Heading from "../../common/Heading";
import Button from "../../common/Button";
import styles from "./LoginForm.module.css";
import OtpForm from "./OtpForm";

export default function () {
  const orContainer = {
    display: "flex",
    justifyContent: "center",
  };
  const popcontainer = {
    width: "320px",
    position: "absolute",
    top: "14%",
    left: "10%",
    border: "1px solid #DDDDE0",
    borderRadius: "15px",
    backgroundColor: "#fff",
  };
  const [open, setOpen] = useState(0);
  const showPopUp = () => {
    setOpen(1);
  };
  const closePopUp = () => {
    setOpen(0);
  };

  return (
    <div
      className={styles.parent}
      style={{ position: "relative", paddingTop: "20px" }}
    >
      <Heading name="Forget Password" textAlign="center" />
      <div>
        <p className="text-center pt-5" style={{fontSize:"24px"}}>
          In order to reset your password please enter your registered Email Id.
        </p>
        <form className="pt-5">
          <div>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div
            className="pt-5 pb--3"
            style={{ alignSelf: "center", display: "flex" }}
          >
            <Button
              name="Verify"
              width="100%"
              height="50px"
              borderRadius="10px"
            />
          </div>
        </form>
        <div style={popcontainer}>
          <OtpForm closePopUp={closePopUp} />
        </div>
      </div>
    </div>
  );
}
