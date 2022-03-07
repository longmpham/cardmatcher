import React from 'react'
import './Card.css'

const Card = (props) => {
  // console.log(props)

  const stylesBlack = {
    backgroundColor:"black",
    color: "white",
    opacity: 1
  }

  const stylesWhite = {
    backgroundColor:"white",
    color: "black",
    opacity: 0
  }
  
  const cardColor = props.isFlipped ? stylesBlack : stylesWhite;

  // console.log(props)

  return (
    <>
      {props.mouseMode ? 
        <div onClick={() => props.handleClick(props.id)} className="card" style={cardColor}>
          {/* {props.id} */}
          {/* <p>{props.isFlipped}</p> */}
        </div>
        : 
        <div onMouseOver={() => props.handleClick(props.id)} className="card" style={cardColor}>
          {/* {props.id} */}
          {/* <p>{props.isFlipped}</p> */}
        </div>
      }
    </>
  )
}

export default Card