import React from "react";

export default function (props) {
    const container={
        height:props.height,
        width:props.height ,
        // backgroundColor:props.bgColor || 'yellow',
        marginLeft:props.marginLeft,
        marginRight:props.marginRight,
        textAlign:props.textAlign,
        paddingLeft:props.paddingLeft
    }
    const p={
      fontSize:props.fontSize ||"20px",
      fontWeight:props.fontWeight ||"600",
      marginBottom:0
    }

  return (
    <div style={container}>
        <p style={p}>{props.name}</p>
    </div>
  );
}
