import React, { useEffect, useState } from 'react'
import Sidebar from '../../common/SideBar'

import NavBarEx from '../../common/NavBarEx'
import Card from '../../common/Card'
import styles from './HomeScreen.module.css'
import { CustomLineChart } from '../../common/CustomLineChart'
import { CustomCircularChart } from '../../common/CircularChart'
import Heading from '../../common/Heading'
import Button from '../../common/Button'
export default function HomeScreen() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);
    const square = {
        width: '200',
        height: '200',
        backgroundColor: 'red'
    }
    const color = {
        color: '#706C6C',
        fontSize: '15px',
        
    }
    const padding = {
        padding: '7%'
    }
    
    const rupeesSize = {
        fontSize: '26px',
        fontWeight: '600'
    }
    const cardBottom = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // fontSize: '16px'
    }
    const tableHead = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'


    }
    const tableColumnData = {
        fontSize: '13px',
        fontWeight: '500px',
        fontSize: '13px',
        // lineHeight: '16px'
    }
    const [open, setOpen] = useState(0);
    const showPopUp = (value) => {
        setOpen(value)
    }
    const closePopUp = () => {
        setOpen(0)
    }

    return (

        <>
            {/* <NavBar buttonFlag={false} /> */}
            <NavBarEx buttonName={"Create New Coupon"} welcomeMsg={"Welcome back, Neha"} buttonFlag={true} popUp={showPopUp} />
            <div className='container-fluid' >
                <div className='row'>
                    <div className={`col-lg-2 col-md-2 ${styles.left}`} >
                        <Sidebar />
                    </div>

                    <div className='col-lg-10 col-md-12 right mt-2' style={{ backgroundColor: '#fff' }}>


                        <Card borderRadius={10} width={'100%'} height={'fit-content'}>
                            {/* till 750px it will work  className={`${styles.headerCard}`}*/}
                            <div  className={styles.cardParent}>

                                <div className={styles.rowCard} >
                                    <div style={padding}>
                                        <div className={`${styles.headingCard}`}>Sales Report</div>
                                        <div style={rupeesSize}>RS 1,00,00,00</div>
                                        <div style={cardBottom}>
                                            <div style={color}>20.9</div>
                                            <div style={color}>+19.5K this week</div>
                                        </div>
                                    </div>
                                    <div className={styles.verticalLines}></div>
                                </div>


                                <div className={styles.rowCard}  >
                                    <div style={padding}>
                                        <div className={`${styles.headingCard}`}>Sales Report</div>
                                        <div style={rupeesSize}>RS 1,00,00,00</div>
                                        <div style={cardBottom}>
                                            <div style={color}>20.9</div>
                                            <div style={color}>+19.5K this week</div>
                                        </div>
                                    </div>
                                    <div className={styles.verticalLines}></div>
                                </div>
                                <div className={styles.rowCard} >
                                    <div style={padding}>
                                        <div className={`${styles.headingCard}`}>Sales Report</div>
                                        <div style={rupeesSize}>RS 1,00,00,00</div>
                                        <div style={cardBottom}>
                                            <div style={color}>20.9</div>
                                            <div style={color}>+19.5K this week</div>
                                        </div>
                                    </div>
                                    <div className={styles.verticalLines}></div>
                                </div>
                                <div className={styles.rowCard}>
                                    <div style={padding}>
                                        <div className={`${styles.headingCard}`}>Sales Report</div>
                                        <div style={rupeesSize} >RS 1,00,00,00</div>
                                        <div style={cardBottom}>
                                            <div style={color}>20.9</div>
                                            <div style={color}>+19.5K this week</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* below 750px this will work */}



                        </Card>

                        <div className='row mt-3'>
                            <div className='col-lg-8 col-md-6 col-sm-12 col-sm-6'>
                                <Card width="100%" height='100%'>

                                    <Heading paddingLeft={'4%'} fontSize={"20px"} fontWeight={600} name="Sales Report" />
                                    <CustomLineChart aspectRatio={2} />


                                </Card>
                            </div>
                            <div className={`col-lg-4 col-md-4  ${styles.saleInTopThree}`}>

                                <Card width="98%" height={'100%'} >
                                    <Heading paddingLeft={'4%'} fontSize={"20px"} fontWeight={600} name="Sales In Top Three" />
                                    <CustomCircularChart />
                                </Card>

                            </div>

                            {/* for md screen table use below 992 px */}
                            <div className={`col-md-6 col-sm-12 mt-3 ${styles.mediumTable} `}>
                                <Card width={'100%'} height='100%' backgroundColor="#EDEDED">
                                    <div className='mt-2' style={tableHead}>
                                        <Heading paddingLeft={'4%'} fontSize={"20px"} fontWeight={600} name="Top Agents" />
                                        <Button borderRadius={8} width="16%" name='View all' />
                                    </div>
                                    <div className='table-responsive' style={{ overflowX: 'auto' }}>
                                        <table class="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Contact</th>
                                                    <th scope="col">Shop Name</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Top Sales</th>
                                                    <th scope="col">Identification</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Card>
                            </div>


                        </div>

                        <div className='row mt-3' >
                            <div className={`col-lg-8  ${styles.table}`}>
                                <Card width={'100%'} height="100%" backgroundColor="#EDEDED">
                                    <div className='mt-2' style={tableHead}>
                                        <Heading paddingLeft={'4%'} fontSize={"20px"} fontWeight={600} name="Top Agents" />
                                        <Button borderRadius={8} width="16%" name='View all' />
                                    </div>
                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Contact</th>
                                                <th scope="col">Shop Name</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Top Sales</th>
                                                <th scope="col">Identification</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td colSpan="2">Larry the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <div style={{ padding: '4%' }}>
                                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <div>
                                                <div style={{ fontSize: '18px', fontWeight: '500px' }}>Name</div>
                                                <div style={tableColumnData}>Bunty Don</div>
                                                <div style={tableColumnData}>Shivam</div>
                                                <div style={tableColumnData}>Ninja</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '18px', fontWeight: '500px' }}>Contact</div>
                                                <div style={tableColumnData}>Bunty Don</div>
                                                <div style={tableColumnData}>Shivam</div>
                                                <div style={tableColumnData}>Ninja</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '18px', fontWeight: '500px' }}>Shop Name</div>
                                                <div style={tableColumnData}>Bunty Don</div>
                                                <div style={tableColumnData}>Shivam</div>
                                                <div style={tableColumnData}>Ninja</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '18px', fontWeight: '500px' }}>Category</div>
                                                <div style={tableColumnData}>Bunty Don</div>
                                                <div style={tableColumnData}>Shivam</div>
                                                <div style={tableColumnData}>Ninja</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '18px', fontWeight: '500px' }}>Total Sales</div>
                                                <div style={tableColumnData}>Bunty Don</div>
                                                <div style={tableColumnData}>Shivam</div>
                                                <div style={tableColumnData}>Ninja</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '18px', fontWeight: '500px' }}> Identification</div>
                                                <div style={tableColumnData}>Bunty Don</div>
                                                <div style={tableColumnData}>Shivam</div>
                                                <div style={tableColumnData}>Ninja</div>
                                            </div>

                                        </div>
                                    </div> */}


                                </Card>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-6 col-6' >

                                <Card width="98%" height={windowWidth <= 992 ? "100%" : "100%"} >
                                    <Heading paddingLeft={'4%'} fontSize={"20px"} fontWeight={600} name="Customer satisfaction" />
                                    {/* <CustomCircularChart width={windowWidth<=992?'86%':'40%'} /> */}
                                    <CustomCircularChart/>

                                </Card>

                            </div>


                            <div className={` col-md-6 col-sm-6 col-6 ${styles.saleInTopThreeBottom}`}>

                                <Card width="100%" height={'100%'} >
                                    <Heading paddingLeft={'4%'} fontSize={"20px"} fontWeight={600} name="Sales In Top Three" />
                                    <CustomCircularChart/>
                                </Card>

                            </div>


                        </div>




                    </div>





                </div>
            </div >
        </>
    )
}