 import React, { useEffect } from "react";
 import { useNavigate } from "react-router-dom";
 import sidebarStyle from './SideBar.module.css'
export default function Sidebar(props) {
  const navigate=useNavigate()
  const menuItems = [
    "Dashboard",
    "Merchants",
    "Shops",
    "Customers",
    "Add sub admin",
    "Business Analytics",
    "Notification",
    "Create coupons",
    "Settings",
  ]

  const menuItemsForAgent=[
    "Dashboard",
    "Products",
    "Custom banners",
    "Catalog",
    "Reviews",
    "Settings",
  ]
  useEffect(()=>{
    const x=localStorage.getItem('role')
    console.log("from side nav ",x)
  })
  const styles = {
    text: {
      fontSize: "16px",
    },
    icon: {
      width: 25,
      height: 25,
      background: "#D9D9D9",
      borderRadius: "20px",
      marginRight: "10px",
    },
    menuRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: "12px",
    },
    container: {
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "91vh",
      padding: "30px 8px 20px",
    },
  };
  const clickHandler=(value)=>{
    console.log(value)
    if(value == "Notification"){
      navigate("/admin/notification")
    }
    if(value == "Customers"){
      navigate("/admin/customer")
    }
    if(value == "Shops"){
      navigate("/admin/shop")
    }

    if(value=="Merchants"){
      navigate('/admin/merchant')
    }
    if(value == "Dashboard"){
      localStorage.getItem('role')=='admin'?navigate("/admin/home"):navigate("/agent/home")
      
    }
    if(value == "Business Analytics"){
      navigate("/admin/buisness-analytics")
    }
    if(value == "Settings"){
      navigate("/admin/settings")
    }
  
    if(value=="Create coupons"){
      navigate('/admin/coupons')
    }
    if(value=="Products"){
      navigate('/agent/product')
    }
    if(value=="Reviews"){
      navigate('/agent/review')
    }
    if(value=="Catalog"){
      navigate('/agent/catalog')
    }
   


    if(value == "logout"){
      localStorage.setItem('role', '');

      navigate("/common/login")
    }
   
  }
  return (
    <div  style={{ ...styles.container, minWidth: 180 }}>
      <div>
        
          {props.flag==true?menuItemsForAgent.map((item, index) => {return(
            <div key={index} style={styles.menuRow}>
              <div style={styles.icon}></div>
              <div className={`${sidebarStyle.hoverable}`} style={styles.text} onClick={()=>{clickHandler(item)}}>{item}</div>
            </div>
          )}):
        
        
        menuItems.map((item, index) => {return(
          <div key={index} style={styles.menuRow}>
            <div style={styles.icon}></div>
            <div className={`${sidebarStyle.hoverable}`} style={styles.text} onClick={()=>{clickHandler(item)}}>{item}</div>
          </div>
        )})}
      </div>
      <div style={{ ...styles.menuRow, marginBottom: 0 }}>
        <div style={styles.icon}></div>
        <div className={`${sidebarStyle.hoverable}`} style={styles.text} onClick={()=>clickHandler('logout')}>Logout</div>
      </div>
    </div>
  );
}