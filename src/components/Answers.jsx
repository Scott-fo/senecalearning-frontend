import React from 'react'

const Answers = (props) => {
  return (
    <div className='answers'>
      <section className="answer-section">
        <input className="answer-input" type="radio" value={props[0]} id={props[0]} name={props.id} onClick={props.handleClick}/>
        <label className='answer' htmlFor={props[0]}>{props[0]}</label>
      </section>
      <section className="answer-section">
        <input className="answer-input" type="radio" value={props[1]} id={props[1]} name={props.id} onClick={props.handleClick} defaultChecked/>
        <label className='answer' htmlFor={props[1]}>{props[1]}</label>
      </section>
    </div>
  )
}

export default Answers