import React from 'react'
import cardsData from '../../cardsData';
import Card from './Card';

const CardList = () => {

    const [cards, setCard] = React.useState(cardsData);

    const handleIsFlipped = (cardId) => {
        console.log(cardId)
        setCard(prevCards => {
            const newCards = [];
            for(let i=0; i < prevCards.length; i++){
                const currentCard = prevCards[i];
                if(currentCard.id === cardId){
                    const updatedCard = {
                        ...currentCard,
                        isFlipped: !currentCard.isFlipped
                    }
                    newCards.push(updatedCard);
                }
                else{
                    newCards.push(currentCard);
                }
            }
            return newCards
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