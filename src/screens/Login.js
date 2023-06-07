import React from 'react'
import LoginForm from '../components/Auth/LoginForm'
import ForgotPassword from '../components/Auth/ForgotPassword'
import OtpForm from '../components/Auth/OtpForm'

export default function Login() {
    const loginFormContainer={
        // height:'100vh',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
       
    //     display: "grid",
    // placeItems: "center",

        height:'100%'
    }
    const left={
        backgroundColor:'#fff',
        height:'100vh'
    }
    const right={
        backgroundColor:'blue',
        height:'100vh'

    }
    return (
        <div className='container-fluid full-height-container'>
            <div className='row'>

                {/* left part contains form */}
                <div className='col-sm-6 left' style={left} >
                    <div style={loginFormContainer}>
                        <LoginForm />
                    </div>
                </div>
                {/* Right Part contains image */}
                <div className='col-sm-6 right' style={right} >
                </div>
            </div>
        </div>
    )
}
