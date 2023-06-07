import React, { useState } from 'react'
import Heading from '../common/Heading'
import BackIcon from '../Assets/backicon.png'
import Button from '../common/Button'
import Bellicon from "../Assets/notifications.png";
import Questionicon from "../Assets/Questionicon.png";
import styles from './SpecificCustomerDetails.module.css'
import Card from '../common/Card';
import eye from '../Assets/remove_red_eye.png'
import download from '../Assets/🦆 icon _download_.png'
export default function SpecificCustomerDetails(props) {
    const [btnColor, setBtnColor] = useState("All orders");
    const hr = {
        width: '99%',
        height: '1px',
        backgroundColor: 'grey',

    }
    const vr = {
        width: '1px',
        height: '88%',
        backgroundColor: 'grey',
    }
    return (
        <div className='row' style={{backgroundColor:"#fff" ,border:"2px solid black" ,paddingTop:"40px"}}>
            <div className='col-lg-8 col-md-8' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ alignSelf: 'center' }}>
                    <img width={30} height={30} src={BackIcon} />
                </div>
                <Heading paddingLeft={'4%'} fontSize={"24px"} fontWeight={600} name="Neha Patil" />
                <Button width={'15%'} marginLeft={'2%'} borderRadius={10} name="Prom" />
            </div>

            <div className='col-lg-4 col-md-4' >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',
            paddingLeft:'12%',paddingRight:'12%' }}>
                    <div style={{ alignSelf: 'center', }}>
                        <img width={30} height={30} src={Bellicon} />
                    </div>
                    <div style={{ alignSelf: 'center' }}>
                        <img width={30} height={30} src={Questionicon} />
                    </div>
                    <Button width={'29%'} marginLeft={'2%'} marginRight={'0px'} borderRadius={10} name="Block" />
                </div>

            </div>



            <div className='col-lg-3 col-md-3 mt-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ padding: '10%' }}>
                    <Heading width={'100%'} marginLeft="auto" marginRight="auto" fontSize={"14px"} fontWeight={600} name="Total Payments" />
                    <Heading fontSize={"18px"} fontWeight={600} name="Rs 1,00,00,00" />
                </div>

                <div style={vr}></div>
            </div>
            <div className='col-lg-3 col-md-3 mt-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ padding: '10%' }}>
                    <Heading fontSize={"14px"} fontWeight={600} name="Delivered orders" />
                    <Heading fontSize={"18px"} fontWeight={600} name="780" />
                </div>
                <div style={vr}></div>

            </div>
            <div className='col-lg-3 col-md-3 mt-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ padding: '10%' }}>
                    <Heading fontSize={"14px"} fontWeight={600} name="Pending orders" />
                    <Heading fontSize={"18px"} fontWeight={600} name="25" />
                </div>
                <div style={vr}></div>

            </div>
            <div className='col-lg-3 col-md-3 mt-4'>
                <div style={{ padding: '10%' }}>
                    <Heading fontSize={"14px"} fontWeight={600} name="Refunded" />
                    <Heading fontSize={"18px"} fontWeight={600} name="780,111" />
                </div>

            </div>



            {/* Horizontal Line */}
            <div className='col-lg-12 mt-3 mb-3' ><div style={hr}></div></div>


            <div className='col-lg-4 mt-2'>
                <div className='row'>


                    <div className='col-lg-12'>

                        <Heading fontSize={"14px"} fontWeight={600} name="Customers Information" />
                        <Card bgColor={"#fff"} >
                            <div className='p-4' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div className='mt-1 mb-1'>
                                        <div>Name</div>
                                        <div>Neha Patil</div>
                                    </div>

                                    <div className='mt-1 mb-1'>
                                        <div>Email</div>
                                        <div>Neha Patil</div>
                                    </div>

                                    <div className='mt-1 mb-1'>
                                        <div>Phone</div>
                                        <div>Neha Patil</div>
                                    </div>
                                    <div className='mt-1 mb-1'>
                                        <div>Shiping Address</div>
                                        <div>Neha Patil</div>
                                    </div>

                                    <div className='mt-1 mb-1'>
                                        <div>Billing Address</div>
                                        <div>Neha Patil</div>
                                    </div>
                                </div>
                                <div>
                                    <div>View All</div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className='col-lg-12 mt-3'>
                        <Heading fontSize={"14px"} fontWeight={600} name="Recent Activity" />
                        <Card bgColor={"#fff"}>
                            <div className='p-3' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div style={{ width: '50px', height: '50px', backgroundColor: 'blue' }}></div>
                                <div>Rating</div>
                            </div>


                        </Card>
                    </div>
                </div>
            </div>
            <div className='col-lg-8 mt-2'>
                <Heading fontSize={"14px"} fontWeight={600} name="Orders" />
                <div className='mt-1 mb-1' style={{ display: 'flex', width: '100%' }}>
                    <div style={{ minWidth: '60%', display: 'flex' }}>
                        <div style={{ width: '50%', marginRight: '2%' }} onClick={() => setBtnColor("All orders")}>
                            <Button marginLeft="2px" marginRight="4%" bgColor={btnColor == "All orders" ? "#fff" : "grey"} name="All orders" width="100%" borderRadius="8px" />
                        </div>
                        <div style={{ width: '50%', marginRight: '2%' }} onClick={() => setBtnColor("Processing")}>
                            <Button name="Processing" width="100%" bgColor={btnColor == "Processing" ? "#fff" : "grey"} borderRadius="8px" />

                        </div>
                        <div style={{ width: '50%', marginRight: '2%' }} onClick={() => setBtnColor("Completed")}>
                            <Button name="Completed" width="100%" bgColor={btnColor == "Completed" ? "#fff" : "grey"} borderRadius="8px" />

                        </div>
                        <div style={{ width: '50%', marginRight: '2%' }} onClick={() => setBtnColor("Cancelled")}>
                            <Button name="Cancelled" width="100%" bgColor={btnColor == "Cancelled" ? "#fff" : "grey"} borderRadius="8px" />

                        </div>
                    </div>
                    {/* <div>
                        <Button name="Refund" width="12%" borderRadius="8px" />

                    </div> */}


                </div>
                <div className={`${styles.customTable}`}>
                    <table class="table table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Payment</th>
                                <th scope="col">Price</th>
                                <th scope="col">View Invocie</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                                return (
                                    <tr >
                                        <th scope="row">1</th>
                                        <td >Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Completed</td>
                                        <td>COD</td>
                                        <td>
                                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                <div>
                                                    <img width={20} height={20} src={eye} />

                                                </div>
                                                <div>
                                                    <img width={20} height={20} src={download} />

                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    )
}
