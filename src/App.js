import { useState } from 'react';
import './App.css';

  const initialCards =  [
    { "src": "/images/bulbasaur.png" },
    { "src": "/images/butterfree.png" },
    { "src": "/images/charmander.png" },
    { "src": "/images/pidgeotto.png" },
    { "src": "/images/pikachu.png" },
    { "src": "/images/squirtle.png" },
  ];

function App() {
  const [cards, setCards] = useState([]);

  function shuffleCards() {
    //setCards(null)
    const shuffledCards = [...initialCards, ...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
  }

console.log(cards)

  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      <div className="grid">
        {cards.map(card => (
          <div className='card' key={card.id}>
            <div>
              <img className='front' src={card.src} alt="card front" />
              <img className='back' src="/images/card_back.png" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
