import React, { useEffect, useState } from 'react';
import "../styles/Quiz.css";
import Questions from "../questions"
import Answers from './Answers';

const Quiz = () => {
  const [correct, setCorrect] = useState(false);
  const [selectedList, setSelectedList] = useState({});
  const correctList = Questions[0].correctAnswers;

  const handleClick = (e) => {
    const name = e.currentTarget.name;
    const target = e.currentTarget.id;
    setSelectedList({...selectedList, [name] : target });
  }

  const updateColours = () => {
    if (correct) {
      document.documentElement.style.setProperty("--background-gradient", "linear-gradient(180deg, #76E0C2 0%, #59CADA 100%)");
      document.documentElement.style.setProperty("--answer-background", "#A5E7E2");
      document.documentElement.style.setProperty("--answer-border", "#A5E7E2");
      document.documentElement.style.setProperty("--answer-text", "#4CAD94");
    } else {
      document.documentElement.style.setProperty("--background-gradient", "linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%)");
      document.documentElement.style.setProperty("--answer-background", "#F9D29F");
      document.documentElement.style.setProperty("--answer-border", "#F9D29F");
      document.documentElement.style.setProperty("--answer-text", "#9F938B");
    }
  };

  const answerComponent = Questions[0].answers.map((answer, key) => {
    return (
      <Answers 
        key={key}
        id={key}
        {...answer}
        correct={correct}
        handleClick={(e) => handleClick(e)}
      />
    )
  });

  useEffect(() => {
    if (JSON.stringify(correctList) === JSON.stringify(Object.values(selectedList))) {
      setCorrect(true);
      updateColours(correct);
    } else if ((correctList.filter(item => Object.values(selectedList).includes(item))).length >= 2) {
        setCorrect(false);
        document.documentElement.style.setProperty("--background-gradient", "linear-gradient(180deg, #F1B496 0%, #EA806A 100%)");
        document.documentElement.style.setProperty("--answer-background", "#F2CBBD");
        document.documentElement.style.setProperty("--answer-border", "#F2CBBD");
        document.documentElement.style.setProperty("--answer-text", "#E47958");
    } else {
        setCorrect(false);
        updateColours(correct);
    }
  }, [selectedList, correctList, correct])

  return (
    <div className='quiz-wrapper'>
      <div className="quiz-container">
        <h1 className='question'>{Questions[0].question}</h1>
        {answerComponent}
        <h2 className='result'>The answer is {correct ? "correct!" : "incorrect"}</h2>
      </div>
    </div>
  )
}

export default Quiz