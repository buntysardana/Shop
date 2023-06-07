import React,{useState} from 'react'
import Sidebar from '../../common/SideBar'
import Heading from '../../common/Heading'
import Card from '../../common/Card'

import NavBarEx from '../../common/NavBarEx'
import { CustomLineChart } from '../../common/CustomLineChart'
import TableRow from '../../components/Table/TableRow'
import styles from './Customer.module.css'
import SpecificCustomerDetails from '../../components/SpecificCustomerDetails'
export default function Customer() {
    const [open, setOpen] = useState(0);
    const showPopUp = (value) => {
        setOpen(value)
    }
    const closePopUp = () => {
        setOpen(0)
    }
    const centerTableData = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <>
        {/* <NavBar/> */}
            <NavBarEx buttonName={"Create New Coupon"} buttonFlag={true} popUp={showPopUp} />
            <div className='container-fluid'>
                <div className='row '>
                    <div className='col-lg-2 col-md-2 left' >
                        <Sidebar />
                    </div>

                    <div className='col-lg-10 mt-2'>
                        {/* <SpecificCustomerDetails /> */}
                        <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                <Card>
                                    <Heading paddingLeft={'4%'} fontSize={"24px"} fontWeight={600} name="New Customers" />
                                    <CustomLineChart />
                                </Card>
                            </div>

                            <div className={`col-lg-3 col-md-6 ${styles.mt}`}>
                                <Card height={'100%'}>
                                    <Heading paddingLeft={'4%'} fontSize={"24px"} fontWeight={600} name="Customer Prefrences" />
                                    <div style={{ maxWidth: '75%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <div style={{ fontSize: '16px', lineHeight: '19px', fontWeight: '500' }}>Image</div>
                                        <div style={{ fontSize: '16px', lineHeight: '19px', fontWeight: '500' }}>Lehnaga</div>
                                        <div style={{ fontSize: '16px', lineHeight: '19px', fontWeight: '500' }}>70%</div>
                                    </div>

                                    <div style={{ maxWidth: '75%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <div style={{ fontSize: '16px', lineHeight: '19px', fontWeight: '500' }}>Image</div>
                                        <div style={{ fontSize: '16px', lineHeight: '19px', fontWeight: '500' }}>Lehnaga</div>
                                        <div style={{ fontSize: '16px', lineHeight: '19px', fontWeight: '500' }}>70%</div>
                                    </div>

                                    <div style={{ maxWidth: '75%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <div style={{ fontSize: '16px', lineHeight: '19px', fontWeight: '500' }}>Image</div>
                                        <div style={{ fontSize: '16px', lineHeight: '19px', fontWeight: '500' }}>Lehnaga</div>
                                        <div style={{ fontSize: '16px', lineHeight: '19px', fontWeight: '500' }}>70%</div>
                                    </div>
                                </Card>

                            </div>

                            <div className={`col-lg-3 col-md-6 ${styles.mt}`}>
                                <Card height={'100%'}>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: '4%' }}>
                                        <Heading paddingLeft={'4%'} fontSize={"24px"} fontWeight={600} name="Reviews" />
                                        <div style={{ fontSize: '14px', fontWeight: '600' }}>View All</div>
                                    </div>

                                    <div style={{ padding: '5%' }}>
                                        {[5, 4, 3, 2, 1].map((item, index) => {
                                            return (
                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                                    <div>{item}</div>
                                                    <div style={{ width: '60%', height: '10px' }} className="progress">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '55%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div>10K</div>
                                                </div>
                                            )
                                        })}

                                    </div>

                                </Card>
                            </div>



                            <div className='col-lg-12 col-md-12 mt-2'>
                                <Card paddingLeft={'2%'} paddingRight={'2%'}>
                                    <Heading fontSize={"24px"} fontWeight={600} name="Customers List" />
                                    <div>
                                        {[1, 2, 3, 4, 5].map(() => {
                                            return (
                                                <TableRow height={'5%'} marginTop={'mt-2'}>
                                                    <div className='col-lg-2 col-md-2' style={centerTableData}>Shivam Juneja</div>
                                                    <div className='col-lg-2 col-md-2' style={centerTableData}>9870971089</div>
                                                    <div className='col-lg-3 col-md-3' style={centerTableData}>shivamsdx2@gmail.com</div>
                                                    <div className='col-lg-1 col-md-1' style={centerTableData}>30</div>
                                                    <div className='col-lg-2 col-md-2' style={centerTableData}>d-4 1/2 Model Town Bareily</div>
                                                    <div className='col-lg-1 col-md-1' style={centerTableData} >
                                                        <div style={{ fontSize: '16px', fontWeight: 500 }}>View</div>
                                                    </div>
                                                    <div className='col-lg-1 col-md-1' style={centerTableData} >
                                                        <div style={{ fontSize: '16px', fontWeight: 500 }}>Delete</div>
                                                    </div>
                                                </TableRow>
                                            )
                                        })}
                                    </div>

                                </Card>
                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </>
    )
}
