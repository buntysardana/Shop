import React from 'react'
import NavBar from '../../common/NavBar'
import Sidebar from '../../common/SideBar'
import Card from '../../common/Card'
import TableRow from '../../components/Table/TableRow'
import rightArrow from '../../Assets/rightArrow.png'
import styles from '../catalog/Catalog.module.css'
export default function CatalogList(props) {
    const data = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <NavBar buttonName={"Create New Catalog"} buttonFlag={true} />

            <div className={`container-fluid `}   >
                <div className='row'>
                    {/* giving the grid of 2 to side nav */}
                    <div className={`col-lg-2 col-md-3 ${styles.left}`} >
                        <Sidebar />
                    </div>

                    <div className='col-lg-10 col-md-9 right' style={{ overflowY: 'auto', height: '91vh' }} >
                        <div className='row' >


                            {data.map((item, index) => {
                                return (
                                    <div className='col-lg-12 col-md-12 mt-2'>
                                        <Card height={'50px'} paddingLeft='2%' paddingRight='2%' display="grid"  >
                                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                                <div>
                                                    Catalog 1xxxxxxxxxx
                                                </div>
                                                <div>
                                                    <img src={rightArrow} alt="right arrow" />
                                                </div>
                                            </div>
                                        </Card>
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
