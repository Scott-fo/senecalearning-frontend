import React, { useEffect, useState } from 'react'

interface Props {
  shuffle: (array: any[]) => any[];
  handleClick: (e: any) => void;
  answer: string[];
  id: number;
  correct: boolean;
}

const Answers = ({ shuffle, answer, id, handleClick, correct }: Props) => {
  const [shuffledArray, setShuffledArray] = useState<any[]>([]);

  useEffect(() => {
    setShuffledArray(shuffle(answer));
    // eslint-disable-next-line
  }, [answer]);
  
  return (
    <div className='answers'>
      <section className="answer-section">
        <input className="answer-input" type="radio" value={shuffledArray[0]} id={shuffledArray[0]} name={String(id)} onClick={handleClick} disabled={correct ? true : false}/>
        <label className='answer' htmlFor={shuffledArray[0]}>{shuffledArray[0]}</label>
      </section>
      <section className="answer-section">
        <input className="answer-input" type="radio" value={shuffledArray[1]} id={shuffledArray[1]} name={String(id)} onClick={handleClick} disabled={correct ? true : false}/>
        <label className='answer' htmlFor={shuffledArray[1]}>{shuffledArray[1]}</label>
      </section>
      
      {shuffledArray.length > 2 && 
        <section className="answer-section">
          <input className="answer-input" type="radio" value={shuffledArray[2]} id={shuffledArray[2]} name={String(id)} onClick={handleClick} disabled={correct ? true : false}/>
          <label className='answer' htmlFor={shuffledArray[2]}>{shuffledArray[2]}</label>
        </section>
      }
    </div>
  )
}

export { Answers };