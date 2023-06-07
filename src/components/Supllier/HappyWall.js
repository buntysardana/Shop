import React from "react";
import Sidebar from "../../common/SideBar";
import NavBar from "../../common/NavBar";
import styles from "./HappyWall.module.css"
import Card from "../../common/Card";
import dustbin from "../../Assets/🦆 icon _trash_.png" 

const HappyWall = () => {
    const data = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className=" container-fluid">
        <div className="row pt-3">
          <div className={` col-lg-2  ${styles.left}`}>
            <Sidebar />
          </div>
          <div className="col-lg-10 col-md-12 col-sm-12 col-12">
          <div className='row' >
                            {data.map((item, index) => {
                                return (
                                    <div key={index} className='col-lg-3 col-md-3 mt-2'>
                                        <Card bgColor="#fff" width='100%' paddingLeft='2%' paddingRight='2%' >
                                            <div className={`${styles.container}`}>
                                                <div style={{ backgroundColor: 'red',}} >
                                                    don
                                                </div>
                                                <div style={{ backgroundColor: 'yellow', height: '70px' }} >
                                                    hello
                                                </div>
                                            </div>
                                        </Card>
                                        <div className='mt-1 px-1' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <p>Edit</p>
                                            <img width={15} height={20} src={dustbin} alt="Trash Icon" />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyWall;
