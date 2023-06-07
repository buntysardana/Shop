import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function UserDashboard() {
    console.log("hello from user")

    const navigate = useNavigate();
    const clickHandler=()=>{
        localStorage.setItem('role', '');

      navigate("/login")
    }
    return (
        <div style={{backgroundColor:'yellow',color:'black'}}>UserDashboard
        <button onClick={clickHandler}>Logout</button> 
        </div>
        
    )
}
