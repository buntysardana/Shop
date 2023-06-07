import React from 'react'
import styles from './Card.module.css'
export default function Card({children,...props}) {
  console.log(props.width)
    const cardStyle={
      width:props.width ,
      height:props.height ,
      backgroundColor:props.bgColor||'#D9D9D9',
      borderRadius:props.borderRadius || 10,
      margin:props.margin,
      padding:props.padding,
      paddingTop:props.paddingTop,
      paddingBottom:props.paddingBottom,
      paddingLeft:props.paddingLeft,
      paddingRight:props.paddingRight,
      borderWidth: props.width||'1px',
      borderStyle: props.borderType||'solid',
      borderColor: props.borderColor||'grey',
      display:props.display,
      alignContent:'center'

    }
  return (
    <div style={cardStyle} >
      
      {children}
    </div>
  )
}
