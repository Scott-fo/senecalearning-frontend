import React, { useCallback, useEffect, useState } from 'react';
import "../styles/Quiz.css";
import Questions from "../questions.json";
import { Answers } from './Answers';

const Quiz = () => {
  const [correct, setCorrect] = useState(false);
  const [selectedList, setSelectedList] = useState({});
  const [shuffledAnswers, setShuffledAnswers] = useState<any[]>([]);
  const correctList = Questions[0].correctAnswers;
  const answerList = Questions[0].answers;

  
  
  const handleClick = (e: any): void => {
    const name = e.currentTarget.name;
    const target = e.currentTarget.id;
    setSelectedList({...selectedList, [name] : target });
  }
  
  const updateColours = (gradient: string, answerBackground: string, answerText: string) => {
    document.documentElement.style.setProperty("--background-gradient", gradient);
    document.documentElement.style.setProperty("--answer-background", answerBackground);
    document.documentElement.style.setProperty("--answer-text", answerText);
  }
  
  const shuffle = useCallback((array: any[]): any[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }, []);
  
  useEffect(() => {
    const shuffledAnswers = shuffle(answerList)
    setShuffledAnswers(shuffledAnswers)
  }, [shuffle, answerList]);
  
  const checkCorrectness = useCallback(() => {
    if (JSON.stringify(correctList.sort()) === JSON.stringify(Object.values(selectedList).sort())) {
      setCorrect(true);
      updateColours("linear-gradient(180deg, #76E0C2 0%, #59CADA 100%)", "#A5E7E2", "#4CAD94");
    } else if ((correctList.filter(item => Object.values(selectedList).includes(item))).length >= 2) {
      setCorrect(false);
      updateColours("linear-gradient(180deg, #F1B496 0%, #EA806A 100%)", "#F2CBBD", "#E47958");
    } else {
      setCorrect(false);
      updateColours("linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%)", "#F9D29F", "#9F938B");
    }
  }, [correctList, selectedList])

  useEffect(() => {
    checkCorrectness();
  }, [selectedList, correctList, correct, checkCorrectness]);
  
  const answerComponent = shuffledAnswers.map((answer: string[], key: number) => {
    return (
      <Answers 
      key={key}
      id={key}
      answer={answer}
      correct={correct}
      handleClick={(e: any) => handleClick(e)}
      shuffle={(array) => shuffle(array)}
      />
      )
    });

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

export { Quiz };