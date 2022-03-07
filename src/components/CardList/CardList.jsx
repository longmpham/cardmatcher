import React from 'react'
// import cardsData from '../../cardsData';
import Card from './Card';

const CardList = (props) => {

    // console.log(props)

    // create data on the fly!
    let i = 0;

    const arrayOfCards = Array.from(Array(Number(props.numOfCards)), () => ({
        "id": `${i++}`,
        "isFlipped": false
    }))
    // console.log(arrayOfCards)

    const [cards, setCard] = React.useState(arrayOfCards);
    const [mouseMode, setMouseMode] = React.useState(true)

    // imperitive method!
    // const handleIsFlipped = (cardId) => {
    //     console.log(cardId)
    //     setCard(prevCards => {
    //         const newCards = [];
    //         for(let i=0; i < prevCards.length; i++){
    //             const currentCard = prevCards[i];
    //             if(currentCard.id === cardId){
    //                 const updatedCard = {
    //                     ...currentCard,
    //                     isFlipped: !currentCard.isFlipped
    //                 }
    //                 newCards.push(updatedCard);
    //             }
    //             else{
    //                 newCards.push(currentCard);
    //             }
    //         }
    //         return newCards
    //     });
    // }

    // declaritive method
    // 1. call setCard to set the state of cards
    // 2. return a NEW array of cards with the updated cards by:
    // 3. mapping the OLD array into the new array and
    // 4. if any cards match the id of the clicked card, change the state of isFlipped5
    // 5. else return the card

    const handleIsFlipped = (id) => {
        // console.log(id)
        setCard(prevCards => {
            return prevCards.map(card => {
                return card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
            })
        })
    }

    const handleToggle = () => {
        setMouseMode(prevMouseMode => !prevMouseMode)
    }

    const myCards = cards.map(card => (
            <Card key={card.id} {...card} mouseMode={mouseMode} handleClick={handleIsFlipped}/>
    ))

  return (
    <>
        <div className="cardlist-top-menu">
            <button onClick={props.handleClick}>Home</button>
            <button onClick={handleToggle}>{mouseMode ? "Click" : "Hover"}</button>
        </div>
        <div className="cardlist-canvas">
            {myCards}
        </div>
    </>
  )
}

export default CardList