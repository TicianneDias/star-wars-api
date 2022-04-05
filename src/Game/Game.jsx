import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import { Button } from './styles'
import Card from './Card'
import CARD1 from './Cards/card1.png'
import CARD2 from './Cards/card2.png'
import CARD3 from './Cards/card3.png'
import CARD4 from './Cards/card4.png'
import CARD5 from './Cards/card5.png'
import CARD6 from './Cards/card6.png'
import CARD7 from './Cards/card7.png'
import CARD8 from './Cards/card8.png'
import './stylegame.css'

const cardsImages = [
  {"src": CARD1, matched: false},
  {"src": CARD2, matched: false},
  {"src": CARD3, matched: false},
  {"src": CARD4, matched: false},
  {"src": CARD5, matched: false},
  {"src": CARD6, matched: false},
  {"src": CARD7, matched: false},
  {"src": CARD8, matched: false}
]

const Game = () => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [correct, setCorrect] = useState(0)

  const shuffleCards = () => {
    const shuffledCards = [...cardsImages , ...cardsImages]
          .sort(() => Math.random() - 0.5)
          .map((card) => ({...card, id: Math.random()}))

          setCards(shuffledCards)
          setChoiceOne(null)
          setChoiceTwo(null)
          setCorrect(0)
          setTurns(0)
  }

  console.log(cards, turns)
  const handleChoice = (card) => {
    choiceOne ?  setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    if(choiceOne && choiceTwo) {
        setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src) {
              setCorrect(answer => answer + 1)
              return {...card, matched:true}
            }  else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 600)
      }
    }
  }, [choiceOne, choiceTwo])

  useEffect(() => {
    if(correct === 32) {
      setTimeout(() => alert("Congratulations! You win!"), 1000)
    }
  },[correct])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  useEffect(() => {
    shuffleCards()
  },[])

  return (
    <div>
    <NavBar/>
    <div className="memoryapp">

      <Button onClick={shuffleCards}>
        <p>New Game</p>
      </Button>
      <div className="card-grid">
        {cards.map(card => (
            
              <Card key={card.id} 
              card={card} 
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
              />
           
              ))}
      </div>
      <p className='turns'>Turns: {turns}</p>
      </div>
    </div>
  )
}

export default Game