import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import StartPage from './components/StartPage/StartPage';

function App() {

  const [isStart, setIsStart] = React.useState(false);
  const [numOfCards, setNumOfCards] = React.useState(500)

  const handleStart = () => {
    console.log('start')
    setIsStart(prevIsStart => !prevIsStart)
  }

  const handleNumOfCards = (event) => {
    const {name,value} = event.target
    // console.log(value)
    setNumOfCards(value)
  }


  return (
    <div>
      {!isStart ? <StartPage handleCards={handleNumOfCards} handleClick={handleStart} /> :
        <CardList numOfCards={numOfCards} handleClick={handleStart}/>
      }
    </div>
  );
}

export default App;
