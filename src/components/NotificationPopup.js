import { useState } from "react";
import Backicon from "../Assets/backicon.png";
import Button from "../common/Button";

const NotificationPopup = (props) => {
  const clickHandler=()=>{
    props.closePopUp()
  }
  const [showButtons, setShowButtons] = useState(0);

  const handleSubmit = (val) => {
    console.log(val);
    // e.preventDefault();
    if (val == 1) {
      setShowButtons(2);
    }
    if (val == 0) {
      setShowButtons(1);
    }
  };
  const handleBack = (val) => {
    console.log(val);
    // e.preventDefault();
    if (val == 1) {
      setShowButtons(0);
    }
    if (val == 2) {
      setShowButtons(1);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: "2px solid black",
        paddingTop: "40px",
        height: "100%",
      }}
    >
      {showButtons == 0 && (

       <div className="row">
       <div
          className="px-3 py-2 col-12"
          style={{ width: "404px", marginLeft: "auto", marginRight: "auto" }}
        >
          <img src={Backicon} onClick={clickHandler} />
          <p className="pt-3 text-center">Shop preference</p>
          <div className="col-12 pt-4">
            <label style={{ fontWeight: 500, fontSize: 15 }}>
              Category allotted
            </label>
            <select
              style={{
                display: "block",
                backgroundColor: "#F3F1F1",
                width: "100%",
                display: "block",
                border: "none",
                borderRadius: 10,
              }}
              className="py-2 px-5 mt-2"
              placeholder="Lorem ipsum"
            >
              <option value="volvo">Shop preference</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div
            className="mt-5 text-center"
            onClick={() => {
              handleSubmit(0);
            }}
          >
            <Button name="submit" width="20%" borderRadius="10px" />
          </div>
        </div>
       </div>
      )}
      {showButtons == 1 && (
       <div className="row">
       <div className="px-3 py-3 col-12">
          <div>
            <img
              src={Backicon}
              onClick={() => {
                handleBack(1);
              }}
            />
            <p
              className="text-center pt-4"
              style={{ fontWeight: 500, fontSize: "18px" }}
            >
              Want to send notification to?
            </p>
            <div className="d-flex justify-content-around pt-4">
              <Button name="Agent" width="30%" borderRadius="10px" />
              <Button name="Customer" width="30%" borderRadius="10px" />
            </div>
            <div
              className="mt-5 text-center"
              onClick={() => {
                handleSubmit(1);
              }}
            >
              <Button name="submit" width="40%" borderRadius="10px" />
            </div>
          </div>
        </div>
       </div>
      )}
      {showButtons == 2 && (
       <div className="row">
       <div className="px-3 py-3 col-12" style={{ width: "420px" }}>
          <img
            src={Backicon}
            onClick={() => {
              handleBack(2);
            }}
          />
          <div className="pt-5 text-center">
            <textarea
              placeholder="Write a description"
              style={{ border: "1px solid #000000", width: "80%" }}
            />
          </div>
          <div
            className="mt-5 text-center"
            onClick={() => {
              handleSubmit(2);
            }}
          >
            <Button name="submit" width="20%" borderRadius="10px" />
          </div>
        </div>
       </div>
      )}
    </div>
  );
};

export default NotificationPopup;