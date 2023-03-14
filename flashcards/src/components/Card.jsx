import React from "react";

function Flashcard(props) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const {title, imageUrl} = props.cards[currentCardIndex];
  
    const handleNextCard = () => {
      setCurrentCardIndex(currentCardIndex + 1);
    };
  
    const handlePrevCard = () => {
      setCurrentCardIndex(currentCardIndex - 1);
    };
  
    const handleRandomCard = () => {
      setCurrentCardIndex(Math.floor(Math.random() * props.cards.length));
    };
  
    return (
      <div>
        <h1>{title}</h1>
        <img src={imageUrl} alt={title} />
        <button onClick={handlePrevCard}>Back</button>
        <button onClick={handleRandomCard}>Random</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
    );
  }
export default Card;
  
