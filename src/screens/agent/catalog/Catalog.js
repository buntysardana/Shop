import React,{useState} from 'react'
import Card from "../../../common/Card"
import Sidebar from '../../../common/SideBar'
import NavBar from '../../../common/NavBar'
import NavBarEx from '../../../common/NavBarEx'
import styles from '../catalog/Catalog.module.css'
import dustbin from '../../../Assets/🦆 icon _trash_.png'
import Heading from '../../../common/Heading'
import Button from '../../../common/Button'
export default function Catalog() {
    const [open, setOpen] = useState(0);
    const showPopUp = (value) => {
        setOpen(value)
    }
    const closePopUp = () => {
        setOpen(0)
    }
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
        <>
            {/* <NavBar buttonName={"Create New Catalog"} buttonFlag={true} /> */}
            <NavBarEx buttonName={"Create Notification"} buttonFlag={true} popUp={showPopUp} />

            <div className={`container-fluid `}   >
                <div className='row'>
                    {/* giving the grid of 2 to side nav */}
                    <div className={`col-lg-2 col-md-3 ${styles.left}`} >
                        <Sidebar flag={true} />
                    </div>

                    <div className='col-lg-10 col-md-9 right' style={{ overflowY: 'auto', height: '91vh' }} >
                        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', width: '40%', backgroundColor: 'red', justifyContent: 'space-between' }}>
                                <Heading name="Catalog" fontSize='28px' fontWeight={600} />
                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                    
                                    <Button marginLeft="2px" marginRight="2px" width={'100%'} name="Remove All" borderRadius={8} />
                                    <Button marginLeft="2px" marginRight="2px" width={'100%'} name="Add Product" borderRadius={8} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'flex-end', backgroundColor: 'yellow' }}>
                                <Button marginLeft="2px" marginRight="2px" width={'23%'} name="Generate Link" borderRadius={8} />
                                <Button marginLeft="2px" marginRight="2px" width={'23%'} name="Download pdf" borderRadius={8} />
                            </div>

                        </div> */}
                        <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-12'>
                                        <Heading name="Catalog" fontSize='28px' fontWeight={600} />
                                    </div>
                                    <div className='col-lg-4 col-md-6' style={{ display: 'grid', alignContent: 'center' }}>
                                        <Button marginLeft="2px" marginRight="2px" width={'100%'} name="Remove All" borderRadius={8} />
                                    </div>
                                    <div className='col-lg-4 col-md-6' style={{ display: 'grid', alignContent: 'center' }}>
                                        <Button marginLeft="2px" marginRight="2px" width={'100%'} name="Add Product" borderRadius={8} />
                                    </div>

                                </div>



                            </div>
                            <div className='col-lg-6 col-md-12 mt-1'>

                                <div className='row' style={{display:'flex',justifyContent:'flex-end'}}>
                                <div className='col-lg-4 col-md-6' >
                                        <Button marginLeft="2px" marginRight="2px" width={'100%'} name="Remove All" borderRadius={8} />
                                    </div>
                                    <div className='col-lg-4 col-md-6' >
                                        <Button marginLeft="2px" marginRight="2px" width={'100%'} name="Add Product" borderRadius={8} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='row' >
                            {data.map((item, index) => {
                                return (
                                    <div key={index} className='col-lg-2 col-md-3 col-sm-4 mt-2'>
                                        <Card bgColor="#fff" width='100%' paddingLeft='2%' paddingRight='2%' >
                                            <div className={`${styles.container}`}>
                                                <div style={{ backgroundColor: 'red' }} >
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
        </>
    )
}
