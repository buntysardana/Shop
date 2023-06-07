import React, { useState } from 'react'
import Heading from '../../common/Heading'
import NavBar from '../../common/NavBar'
import Sidebar from '../../common/SideBar'
import Card from '../../common/Card'
import Button from '../../common/Button'
import styles from './Notification.module.css'
import NavBarEx from '../../common/NavBarEx'
import CreateCouponform from '../../components/CreateCouponform'
import NotificationPopup from '../../components/NotificationPopup'
export default function Notification() {
    // const popcontainer={
    //     height:'50%',
    //     width:'30%',
    //     position:'absolute',
    //     top: '15%',
    //     left: '40%',
    //     // borderColor: 'red'
    //     // border: "5px solid ",
    //     backgroundColor:'#fff'
    
    //   }
    const [open, setOpen] = useState(0);
    const showPopUp = (value) => {
        setOpen(value)
    }
    const closePopUp = () => {
        setOpen(0)
    }
    return (
        <>
            {/* <NavBar buttonName={"Create Notification"} buttonFlag={true} popUp={showPopUp} /> */}
            <NavBarEx buttonName={"Create Notification"} buttonFlag={true} popUp={showPopUp} />
            <div className={`container-fluid `}   >
                <div className='row'>
                    {/* giving the grid of 2 to side nav */}
                    <div className={`col-lg-2 col-md-2 ${styles.left}`} style={ open==1?{filter:"blur(2px)"}:{} }>
                        <Sidebar />
                    </div>

                    <div className='col-lg-10 col-md-10 right' style={open == 1 ? { filter: "blur(2px)" } : {}} >
                        <div style={{ display: 'flex' }}>
                            <Heading marginRight="4%" fontSize={"24px"} fontWeight={600} name="Created" />
                            <Heading marginRight="4" fontSize={"24px"} fontWeight={600} name="Sent" />
                        </div>

                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                            return (
                                <div className='mt-3'>
                                <Card padding={'2%'} height={'50px'} display="grid" >
                                    <div className='row' >
                                        <div className='col-lg-8 col-md-8 col-sm-12' >
                                            <div style={{ paddingLeft: '2%' }}>Rahul sharma has sent a registration request</div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 col-sm-12'>
                                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                                                <Button borderRadius={8} width={'30%'} name="Accept" />
                                                <Button borderRadius={8} width={'30%'} name="Reject" />
                                            </div>
                                        </div>
                                    </div>

                                </Card>
                                </div>
                            )
                        })}


                    </div>


                </div>

            </div>
            <div className={`${styles.popcontainer}`}  hidden={!open ? true : false}>
                {open && <NotificationPopup closePopUp={closePopUp} />}
            </div>

        </>
    )
}
