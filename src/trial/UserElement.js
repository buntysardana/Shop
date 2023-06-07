import React from 'react'

export default function UserElement({children},...props) {
    console.log("user element before if",props.role)

  if(props.role==="user"){
    console.log("user element after if")

        return (
            <div>{children}</div>
          )
    }else{
        return (
            <div><h1 style={{color:'red'}}>Unauthorized from User element</h1></div>
        )
    }
}
