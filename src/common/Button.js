import React from "react";

export default function Button(props) {

  

  const container = {
    height: props.height || 30,
    width: props.width || "6%",
    backgroundColor: props.bgColor || "#A5A5A5",
    marginLeft: props.marginLeft || "auto",
    marginRight:props.marginRight ||  "auto",
    borderRadius: props.borderRadius || "12px",
    fontSize:props.fontSize,


  };
  return <button style={container}>{props.name}</button>;
}
