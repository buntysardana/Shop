import React from 'react'
import styles from "../../screens/agent/catalog/Catalog.module.css"
import dustbin from "../../Assets/🦆 icon _trash_.png"
import Card from "../../common/Card";


const AllProductList = () => {
  const data = [1, 2, 3,4,5,6,7,8,9,10,11,12];
    
  return (
    <div>
         <div className="row" style={{overflowY:"auto" , maxHeight:"450px"}}>
                  {data.map((item, index) => {
                    return (
                      <div key={index} className="col-lg-3 col-md-4 col-sm-6 mt-2" >
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
  )
}

export default AllProductList