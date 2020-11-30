import React from 'react'
import './styles/Greet.css'

const Greet = (props)=>{
  return(
    <div className="Greet">
      <h2>Welcome {props.email} {props.username}</h2>
    </div>
  )
}

export default Greet