// import React, { useState } from "react";
// import Heading from "../common/Heading";
// import Button from "../common/Button";
// import searchicon from "../Assets/search_icon.png";
// import styles from "./Navbar.module.css";

// const NavBar = (props) => {
//   const clickHandler = () => {
//     if (props.buttonName === "Create New admin") {
//       props.popUp(1);
//     }
//     if (props.buttonName === "Create New Coupon") {
//       props.popUp(1);
//     }
//   };
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   return (
//     <>
//       <nav style={{ backgroundColor: "#E9E4E4" }}>
//         <header className="mx-5 py-3 row justify-content-between align-items-center">
//           <div className="col-lg-4 col-md-4 col-sm-4 col-4">
//             <div className="d-flex align-items-center">
//               <div
//                 style={{
//                   height: 25,
//                   width: 25,
//                   backgroundColor: "#989797",
//                   marginRight: 10,
//                 }}
//               ></div>
//               <Heading name="Company name" marginLeft={0} marginRight={0} />
//             </div>
//           </div>
//           <div className="col-lg-8 col-md-8 col-sm-8 col-8 ">
//             <div className="d-none d-md-block">
//               <div className="row justify-content-end">
//                 <div
//                   className="col-lg-8 col-md-7 col-sm-7 col-5 d-flex position-relative"
//                   style={{ alignItems: "center" }}
//                 >
//                   <img
//                     src={searchicon}
//                     style={{ position: "absolute", top: "20%", left: "5%" }}
//                   />
//                   <input
//                     type="text"
//                     style={{
//                       marginRight: "20px",
//                       width: "90%",
//                       backgroundColor: "#E9E4E4",
//                       paddingLeft: 50,
//                       borderRadius: 10,
//                       border: "2px solid #8C8C8C",
//                       outline: "none",
//                     }}
//                   />
//                 </div>
//                 {props.buttonFlag && (
//                   <div
//                     className="col-lg-4 col-md-5 col-sm-5 col-5 "
//                     onClick={clickHandler}
//                   >
//                     <Button
//                       name={props.buttonName}
//                       height="30px"
//                       width="100%"
//                       borderRadius="10px"
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>
//       </nav>
//     </>
//   );
// };

// export default NavBar;
import React, { useState } from "react";
import Heading from "../common/Heading";
import Button from "../common/Button";
import searchicon from "../Assets/search_icon.png";
import hamburgerIcon from "../Assets/hamburger.png";
import styles from "./Navbar.module.css";

const NavBar = (props) => {
  const clickHandler = () => {
    if (props.buttonName === "Create New admin") {
      props.popUp(1);
    }
    if (props.buttonName === "Create New Coupon") {
      props.popUp(1);
    }
    if (props.buttonName === "Create notification") {
      props.popUp(1);
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav style={{ backgroundColor: "#E9E4E4" }}>
        <header className="mx-5 py-3 row justify-content-between align-items-center">
          <div className="col-lg-4 col-md-4 col-sm-5 col-6">
            <div className="d-flex align-items-center">
              {menuOpen ? (
                <img
                  src={hamburgerIcon}
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "#989797",
                    marginRight: 10,
                  }}
                  onClick={toggleMenu}
                />
              ) : (
                <div
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "#989797",
                    marginRight: 10,
                  }}
                ></div>
              )}
              <Heading name="Company name" marginLeft={0} marginRight={0} />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-8 ">
            <div className={menuOpen ? "d-block d-md-none" : "d-none d-md-block"}>
              <div className="row justify-content-end">
                <div
                  className="col-lg-8 col-md-7 col-sm-7 col-5 d-flex position-relative"
                  style={{ alignItems: "center" }}
                >
                  <img
                    src={searchicon}
                    style={{ position: "absolute", top: "20%", left: "5%" }}
                  />
                  <input
                    type="text"
                    style={{
                      marginRight: "20px",
                      width: "90%",
                      backgroundColor: "#E9E4E4",
                      paddingLeft: 50,
                      borderRadius: 10,
                      border: "2px solid #8C8C8C",
                      outline: "none",
                    }}
                  />
                </div>
                {props.buttonFlag && (
                  <div
                    className="col-lg-4 col-md-5 col-sm-5 col-5 "
                    onClick={clickHandler}
                  >
                    <Button
                      name={props.buttonName}
                      height="30px"
                      width="100%"
                      borderRadius="10px"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      </nav>
    </>
  );
};

export default NavBar;
