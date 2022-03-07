import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import StartPage from './components/StartPage/StartPage';

function App() {

  const [isStart, setIsStart] = React.useState(false);
  const [numOfCards, setNumOfCards] = React.useState(1000)
  const [isRandom, setIsRandom] = React.useState(false)

  const handleStart = () => {
    // console.log('start')
    setIsStart(prevIsStart => !prevIsStart)
  }

  const handleNumOfCards = (event) => {
    const {name,value} = event.target
    // console.log(value)
    setNumOfCards(value)
  }

  const handleIsRandom = () => {
    setIsRandom(true)
    setIsStart(prevIsStart => !prevIsStart)
  }


  return (
    <div className="App">
      {!isStart ? <StartPage handleRandom={handleIsRandom} handleCards={handleNumOfCards} handleClick={handleStart} /> :
        <CardList isRandom={isRandom} numOfCards={numOfCards} handleClick={handleStart}/>
      }
    </div>
  );
}

export default App;
