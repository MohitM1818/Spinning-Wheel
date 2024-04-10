import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import "./App.css"

const data = [
  { option: 'Yellow' },
  { option: 'Green' },
  { option: 'Red' },
  { option: 'Blue' },
  { option: 'Purple' },
  { option: 'Orange' },
  { option: 'White' },
  { option: 'Brown' },
  { option: 'Pink' }
]
const logic = 
 { Red: 'Passion, excitement, love',
Pink: 'Soft, reserved, earthy',
Purple: 'Mysterious, noble, glamorous',
Blue: 'Wisdom, hope, reason, peace',
Green: 'Nature, growth, freshness',
Yellow: 'Hope, joy, danger',
Orange: 'Warmth, kindness, joy',
White: 'Truth, indifference',
Brown: 'resilience, dependability, security, and safety. '}


const bgc = ["yellow","green","red",'blue','purple','orange','white','brown','pink']

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [meaning, setMeaning] = useState(null);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
    setMeaning(logic[scc]);
  }
const sc = prizeNumber
const scc =data[sc].option
  return (
    <div className='App'>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={bgc}

        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
      <p className='sc'>Selected colour : {scc}</p>
  <p>{meaning}</p>
    </div>
  )
}