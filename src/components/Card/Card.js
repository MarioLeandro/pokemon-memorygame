import './Card.css';

function Card(props) {

    function handleChoice () {
        props.handleChoice(props.card);
    }

    return (
        <div className='card' key={props.card.id}>
            <div>
                <img className='front' src={props.card.src} alt="card front" />
                <img className='back' src="/images/card_back.png" alt="card back" onClick={() => handleChoice()} />
            </div>
        </div>
    );
}

export default Card;
