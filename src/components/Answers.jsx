import React, { useEffect, useState } from 'react'

const Answers = (props) => {
  const [shuffledArray, setShuffledArray] = useState([])

  useEffect(() => {
    setShuffledArray(props.shuffle(props.answer))
  }, [props.answer])
  
  return (
    <div className='answers'>
      <section className="answer-section">
        <input className="answer-input" type="radio" value={shuffledArray[0]} id={shuffledArray[0]} name={props.id} onClick={props.handleClick} disabled={props.correct ? true : false}/>
        <label className='answer' htmlFor={shuffledArray[0]}>{shuffledArray[0]}</label>
      </section>
      <section className="answer-section">
        <input className="answer-input" type="radio" value={shuffledArray[1]} id={shuffledArray[1]} name={props.id} onClick={props.handleClick} disabled={props.correct ? true : false}/>
        <label className='answer' htmlFor={shuffledArray[1]}>{shuffledArray[1]}</label>
      </section>
    </div>
  )
}

export default Answers