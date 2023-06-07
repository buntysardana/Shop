import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
export default function Protected(props) {
    const Component=props.cmp
    // const history =useHistory();
    const navigate=useNavigate()
    const location = useLocation();
    useEffect(()=>{
        const currentPath = location.pathname;
        
        // console.log("from use effect",pathStartsWith)
        if(!localStorage.getItem('username')){
            // history.push('/admin/login')

            navigate('/common/login')
        }
        if(localStorage.getItem('role')=='admin'){
            const pathStartsWith=currentPath.startsWith("/agent")
            if(pathStartsWith){
                navigate('/common/not-authorized')
            }
            
        }
        if(localStorage.getItem('role')=='agent'){
            const pathStartsWith=currentPath.startsWith("/admin")
            if(pathStartsWith){
                navigate('/common/not-authorized')
            }
            
        }
    },[])
  return (
    <div>
        <Component />
    </div>
  )
}
