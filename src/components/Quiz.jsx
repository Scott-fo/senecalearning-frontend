import React, { useEffect, useState } from 'react';
import "../styles/Quiz.css";
import Questions from "../questions"
import Answers from './Answers';

const Quiz = () => {
  const [correct, setCorrect] = useState(false);
  const [prevName, setPrevName] = useState({});
  const correctList = Questions[0].correctAnswers;

  const handleClick = (e) => {
    const name = e.currentTarget.name;
    const target = e.currentTarget.id;
    setPrevName({...prevName, [name] : target });
  }

  const answerComponent = Questions[0].answers.map((answer, key) => {
    return (
      <Answers 
        key={key}
        id={key}
        {...answer}
        handleClick={(e) => handleClick(e)}
      />
    )
  });

  useEffect(() => {
    if (JSON.stringify(correctList) === JSON.stringify(Object.values(prevName))) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    console.log("Use Effect")
  }, [prevName, correctList])

  return (
    <div className='quiz-wrapper'>
      <div className="quiz-container">
        <h1 className='question'>{Questions[0].question}</h1>
        {answerComponent}
        <h2 className='result'>The answer is {correct ? "correct" : "incorrect"}</h2>
      </div>
    </div>
  )
}

export default Quiz