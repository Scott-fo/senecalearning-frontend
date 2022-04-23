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
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [maxLength, setMaxLength] = useState<number>(0);

  useEffect(() => {
    setShuffledArray(shuffle(answer));
    // eslint-disable-next-line
  }, [answer]);
  
  useEffect(() => {
    setMaxLength(Math.max(...(shuffledArray.map(element => element.length))));
  }, [shuffledArray]);

  useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
  });
  
  const answerStyle = ( key: number ) => {
    const upperRad = { borderTopRightRadius: "36px", borderTopLeftRadius: "36px" };
    const bottomRad = { borderBottomRightRadius: "36px", borderBottomLeftRadius: "36px" };
    const fullRad = { borderRadius: "100px" };

    if (shuffledArray.length === 2) {
      if (maxLength > 14 && width < 1150)
        if (key === 0) 
          return upperRad;
        else 
          return bottomRad;
      else 
        return fullRad;
    }
    else if (shuffledArray.length === 3) {
      if (width < 755) {
        switch (key) {
          case 0: 
            return { borderTopLeftRadius: "36px" };
          case 1:
            return { borderTopRightRadius: "36px" };
          case 2: 
            return bottomRad;
        }
      } else
          return fullRad;
    }
  }

  const answerList = shuffledArray.map((item: string, key: number) => {
    return (
      <section 
        className={shuffledArray.length === 3 ? "answer-section-3input" : "answer-section"}
        style={(maxLength > 14 && width < 1150) || (key === 2 && width < 755) ? {width: "100%"} : {width: "50%"}} 
        key={key}>
          <input 
            className="answer-input"
            type="radio" 
            value={item} 
            id={item} 
            name={String(id)} 
            onClick={handleClick} 
            disabled={correct ? true : false} 
            onChange={()=>{}} 
            checked={selectedList[id] === item}
          />
          <label 
            className='answer'
            htmlFor={item}
            style={answerStyle(key)}
          >
            {item}
          </label>
      </section>
    )
  })

  return (
    <div className='answers' 
      style={shuffledArray.length === 3 ? 
        width < 755 ? {flexWrap: 'wrap'} : {flexWrap: "unset"} 
          : {flexWrap: 'wrap'}}>
      {answerList}
    </div>
  )
}

export { Answers };