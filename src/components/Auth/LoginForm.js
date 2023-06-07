import React, { useState,useEffect } from 'react'
import Heading from '../../common/Heading'
import Button from '../../common/Button'
import styles from './LoginForm.module.css'
import { useNavigate } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'

export default function (props) {
  const navigate=useNavigate()
  const [isToggleOn, setToggleOn] = useState(true);
  const orContainer = {
    display: "flex",
    justifyContent: "center",
  };
  const clickHandeler =()=>{
    if (isToggleOn == false){
      setToggleOn(true)
    }
   else{
    setToggleOn(false)
   }
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRoleChange = (e) => {
    // console.log(e.target.value)
    setRole(e.target.value)
  }

  useEffect(()=>{
    console.log("hello")
  })

  const clickhandler = () => {
    // navigate("/")
    localStorage.setItem('role', role);
    localStorage.setItem('username', role);


    // Here you can use the username and password values as per your requirements
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Role:', role);
    if(role=='admin'){
      navigate('/admin/home')
    }
    if(role=='agent'){
      navigate('/agent/home')
    }
    
  }
 
  return isToggleOn?(
    <div className={styles.parent}>

      <Heading name="Login" textAlign="center" />
      <div>
        <form >
          <div  >
            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              value={username}
              onChange={handleUsernameChange} />
          </div>
          <div>
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"
              value={password}
              onChange={handlePasswordChange} />
          </div>

          <div>
            <label for="role" className="form-label">Role</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
              value={role}
              onChange={handleRoleChange} />
          </div>
          <div onClick={clickHandeler} style={{ display: "flex", justifyContent: "end" }}>
            <p>Forgot Password</p>
          </div>

          <div style={{ alignSelf: 'center', display: 'flex' }} onClick={clickhandler}>
            <Button name="Submit" width="fit-content" />
          </div>
          {/* <a href={`/${role}/dashboard`}>click me</a> */}
        </form>

        {/* or start div*/}
        <div className="my-3" style={orContainer}>
          <p>OR</p>
        </div>

        <div className={styles.dotContainer}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>

        {/* last bottom div */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p>Don't have an account?</p>
          <a>
            <p> &nbsp; Signup</p>
          </a>
        </div>
      </div>
    </div>
  ) : (
    <ForgotPassword />
  );
}
