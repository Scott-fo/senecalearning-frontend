import React, { useEffect, useState } from 'react';
import "../styles/Answers.css";

type selected = {
  [key: number] : string;
};

interface Props {
  shuffle: (array: any[]) => any[];
  handleClick: (e: any) => void;
  answer: string[];
  id: number;
  correct: boolean;
  selectedList: selected;
};

const Answers = ({ shuffle, answer, id, handleClick, correct, selectedList }: Props) => {
  const [shuffledArray, setShuffledArray] = useState<any[]>([]);

  useEffect(() => {
    setShuffledArray(shuffle(answer));
    // eslint-disable-next-line
  }, [answer]);

  const answerList = shuffledArray.map((item: string, key: number) => {
    return (
      <section className="answer-section" key={key}>
          <input className="answer-input" type="radio" value={item} id={item} name={String(id)} onClick={handleClick} disabled={correct ? true : false} onChange={()=>{}} checked={selectedList[id] === item}/>
          <label className='answer' htmlFor={item}>{item}</label>
      </section>
    )
  })

  return (
    <div className='answers'>
      {answerList}
    </div>
  )
}

export { Answers };