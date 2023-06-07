import React,{useState} from "react";
import NavBar from "../../common/NavBar";
import NavBarEx from "../../common/NavBarEx";
import Sidebar from "../../common/SideBar";
import Heading from "../../common/Heading";
import Button from "../../common/Button";
import styles from "./Review.module.css"
const data = [
  {
    name: "Rahul Sharma",
    totalReview: 14,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
    description2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer `,
  },
  {
    name: "Rahul sharma",
    totalReview: 8,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
    description2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer`,
  },
  {
    name: "Rahul sharma",
    totalReview: 8,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
    description2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer`,
  },
];

const Reviews = () => {
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
        <div className="row">
          <div className={` col-lg-2 col-md-3  ${styles.left}`}>
            <Sidebar flag={true} />
          </div>
          <div className="col-lg-10 col-md-9 col-12 mt-2" style={{ overflowY: 'auto', height: '91vh' }}>
            <Heading
              name="Reviews and feedback"
              fontSize="24px"
              fontWeight="600"
            />
            <div className="row pt-4">
              <div className="col-4">
                <p>Total reviews</p>
                <p style={{ fontWeight: "600", fontSize: "32px" }}>10.0k</p>
                <p>Growth in reviews this year</p>
              </div>
              <div className="col-4">
                <p>Total reviews</p>
                <p style={{ fontWeight: "600", fontSize: "32px" }}>10.0k</p>
                <p>Growth in reviews this year</p>
              </div>
              <div className="col-4">
                <p>Total reviews</p>
                <p style={{ fontWeight: "600", fontSize: "32px" }}>10.0k</p>
                <p>Growth in reviews this year</p>
              </div>
              <div className="col-12">
                <div className="d-flex pt-3 pb-3">
                  <div>
                    <Heading name="Reviews " fontSize="24px" fontWeight="600" />
                  </div>
                  <div className="ps-5">
                    <Heading name="Feedback" fontSize="24px" fontWeight="600" />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div style={{ overflowX: "auto", maxHeight: '500px' }}>
              {data.map((item, index) => (
                <div className="row pt-5 " key={index}>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="d-flex">
                      <div
                        style={{
                          width: "76px",
                          height: "76px",
                          borderRadius: "20px",
                          backgroundColor: "#D9D9D9",
                        }}
                      ></div>
                      <div className="ps-3">
                        <Heading
                          name={item.name}
                          fontSize="24px"
                          fontWeight="600"
                        />
                        <p>Total review: {item.totalReview}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <p>{item.description}</p>
                    <p >{item.description2}</p>
                    <div className="d-flex">
                      <div>
                        <Button name="Nominate customer" width="fit-content" />
                      </div>
                      <div className="ps-4">
                        <Button name="Nominate customer" width="fit-content" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
