import React, { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.production.min";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    const intervalId = setInterval(() =>{
      setTimeRemaining((timeRemaining)=>timeRemaining-1);
      console.log('running')
    }, 1000);
    if (timeRemaining===0){
      setTimeRemaining(10);
      console.log("in use effect")
      onAnswered(false);
    }
    
    return function() {
      clearInterval(intervalId);
    };
  },[timeRemaining, onAnswered]);
  
  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
