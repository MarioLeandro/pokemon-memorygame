import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card.js'

const initialCards = [
  { "src": "/images/bulbasaur.png", matched: false },
  { "src": "/images/butterfree.png", matched: false },
  { "src": "/images/charmander.png", matched: false },
  { "src": "/images/pidgeotto.png", matched: false },
  { "src": "/images/pikachu.png", matched: false },
  { "src": "/images/squirtle.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  useEffect(() => {
    shuffleCards();
  }, []);

  function shuffleCards() {
    //setCards(null)
    const shuffledCards = [...initialCards, ...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurn(0);
  }


  function handleChoice(card) {
    choiceOne ? (
      choiceOne.id !== card.id &&
      setChoiceTwo(card))
      : setChoiceOne(card)
  }

  function resetTurn() {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurn(prevTurn => prevTurn + 1)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 800);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards)

  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      <div className="grid">
        {cards.map(card => (
          <Card
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </>
  );
}

export default App;
