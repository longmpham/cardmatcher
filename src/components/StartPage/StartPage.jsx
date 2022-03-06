import React from 'react'
import './StartPage.css'
import CardList from '../CardList/CardList'

const StartPage = (props) => {


  return (
    <div className="start-menu">
      <h1 className="start-title">Welcome to pressing squares game.</h1>
      <button className="start-button-start" type="button" onClick={props.handleClick}>Start</button>
      <input type="text" className="start-button-input" onChange={props.handleCards} name="numOfCards" placeholder="How many cards?"></input>
    </div>
  )
}

export default StartPage