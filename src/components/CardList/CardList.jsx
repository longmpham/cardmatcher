import React from 'react'
import cardsData from '../../cardsData';
import Card from './Card';

const CardList = () => {

    const [cards, setCard] = React.useState(cardsData);

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

    const handleIsFlipped = (cardId) => {
        console.log(cardId)
        setCard(prevCards => {
            return (prevCards.map((card) => {
                return card.id === cardId ? {...card, isFlipped: !card.isFlipped} : card
            }))
        });
    }

    const myCards = cards.map(card => (
            <Card key={card.id} {...card} handleClick={handleIsFlipped}/>
    ))

  return (
    <div>
        {myCards}
    </div>
  )
}

export default CardList