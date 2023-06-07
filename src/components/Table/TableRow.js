import React from 'react'

import styles from '../Table/TableRow.module.css'
// import './TableRow.css'
export default function TableRow({ children, ...props }) {
  const row = {
    backgroundColor: '#E8E8E8',
    borderRadius: 12,
    height: props.height || 40,
    alignContent: 'center'
  }

  const common = {
    padding: 0,
    // minWidth:105,
    fontSize: "16px",
    display: 'flex',
    justifyContent: 'center',
  }
  const image = {
    width: "17px",
    height: "17px",
    alignSelf: 'center'
  }

  return (
    <div className={`container-fluid ${props.marginTop}`} >
      <div className={`row `} style={row}>

        {children}

      </div>
    </div>
  )
}
