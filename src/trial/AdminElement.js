import React from 'react'

export default function AdminElement({children},...props) {
    console.log("aadmin element before if",props.role)

    if(props.role=="admin"){
    console.log("aadmin element after if")

        return (
            <div>{children}</div>
          )
    }else{
        return (
            <div><h1 style={{color:'red'}}>Unauthorized from Admin element</h1></div>
        )
    }
  
}
