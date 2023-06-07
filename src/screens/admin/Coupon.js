import React ,{useEffect, useState}from 'react'
import Sidebar from '../../common/SideBar'
import dustbin from '../../Assets/🦆 icon _trash_.png'
import Card from '../../common/Card'

import NavBarEx from '../../common/NavBarEx'
import styles from '../../components/Table/TableRow.module.css'
import stylesCoupon from './Coupon.module.css'
import CreateCouponform from '../../components/CreateCouponform'
export default function Coupon() {
    const [open,setOpen]=useState(0);
    const [data,setData]=useState([1,20,3,4,5,6,7])
    useEffect(()=>{
        
    },[data])
    const showPopUp=(value)=>{
        setOpen(value)
      }
      const closePopUp=()=>{
        setOpen(0)
      }

      const deleteElement=(index,ar)=>{
        for(let i=0;i<ar.length;i++){
            if(i<index){
              console.log("delete index ->",i)
              continue;
            }
            ar[i]=ar[i+1]
        }
        ar.pop()
        // data=[...ar]
        console.log(data);
        return ar;
    }
      const deleteHandler=(val)=>{
        console.log(val)
        let ar= deleteElement(val,data)

        setData([...ar]); 
        
      }

      const popcontainer={
        height:'90%',
        width:'40%',
        position:'absolute',
        top: '7%',
        left: '28%',
        // borderColor: 'red'
        // border: "5px solid red",
        // backgroundColor:'#fff'
    
      }
      const dhundla={
        backgroundColor:'red',
        backgroundSize: 'cover',
        filter: "blur('80px')"
      }
   
    return (
        <>
            {/* <NavBar buttonName={"Create New Coupon"} buttonFlag={true} popUp={showPopUp} /> */}
            <NavBarEx buttonName={"Create New Coupon"} buttonFlag={true} popUp={showPopUp} />

            <div className={`container-fluid `}   >
                <div className='row'>
                    {/* giving the grid of 2 to side nav */}
                    <div className={`col-lg-2 col-md-2 ${stylesCoupon.left}`} style={ open==1?{filter:"blur(2px)"}:{} }>
                        <Sidebar />
                    </div>

                    <div className='col-lg-10 col-md-10 right' style={ open==1?{filter:"blur(2px)"}:{} } >
                        <div className='row'>

                            
                        {data.map((item,index) => {
                            return (
                                <div key={index} className={`col-lg-3 col-md-3 col-sm-4 my-3 `}>
                                    <Card width={'90%'} height={80}>
                                        <div style={{display:'flex',justifyContent:'end',padding:8}} >
                                            <img onClick={()=>{deleteHandler(index)}} className={styles.iconSize}  src={dustbin} alt="dustbin" />
                                        </div>
                                        <div style={{display:'flex',justifyContent:'center'}}>
                                            TRYNEW +{item}
                                        </div>
                                    </Card>
                                    <div>
                                        <div>
                                            <p className={stylesCoupon.font} >Product:<span className={stylesCoupon.color}>A line lehnga</span></p>
                                            <p className={stylesCoupon.font}>Category:<span className={stylesCoupon.color}>Lehnga</span></p>
                                            <p className={stylesCoupon.font}>Discount:<span className={stylesCoupon.color}>15%</span></p>
                                            <p className={stylesCoupon.font}>Validity:<span className={stylesCoupon.color}>Expires on 7th May</span></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        </div>
                        

                    </div>

                </div>
                <div style={popcontainer} hidden={!open?true:false}>
                  {open && <CreateCouponform closePopUp={closePopUp} />}
                </div>
            </div>
        </>
    )
}
