import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card.js'

const initialCards = [
  { "src": "/images/bulbasaur.png" },
  { "src": "/images/butterfree.png" },
  { "src": "/images/charmander.png" },
  { "src": "/images/pidgeotto.png" },
  { "src": "/images/pikachu.png" },
  { "src": "/images/squirtle.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

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

  function resetTurn () {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurn(prevTurn => prevTurn + 1)
  }

  useEffect(() => {
    if(choiceOne && choiceTwo) {
      if(choiceOne.src === choiceTwo.src) {
        console.log("MATCH");
        resetTurn();
      } else {
        console.log("NOT MATCH");
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);



  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      <div className="grid">
        {cards.map(card => (
          <Card
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </>
  );
}

export default App;
