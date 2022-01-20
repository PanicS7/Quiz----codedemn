import React, { useEffect, useState } from 'react';

function Questions({setStopTimer,questions,setScore,setScreen,setFinalScore}) {
    const [questionNumber,setQuestionNumber] = useState(0);
    const [correctMsg,setCorrectMsg] = useState("");

    const handleClick = (a,answer) => {
        const isCorrect = a === answer;
        if (isCorrect) {
            setCorrectMsg("Correct!");
            return setQuestionNumber(prev => prev + 1);
        }
        else {
            setCorrectMsg("Incorrect!");
            return setScore(prev => prev - 10);
            
        }
    }

    useEffect(() => {
        if (questionNumber >= questions.length) {
            const timerElement = document.getElementById("timer");
            const timer = timerElement.innerText;
                
            setFinalScore(timer);
            setScreen("addHighscores");
            setStopTimer(true);
        }
        // setCorrectMsg("");
    },[questionNumber,questions,setScreen,setStopTimer,setFinalScore]);

    return (
        <div className='questions'>
            {questionNumber < questions.length ? 
            <>
            <h2>{questions[questionNumber].questionText}</h2>
            <ul>
                {questions[questionNumber].options.map((answer, index) => {
                    return <li key={index} onClick={a => handleClick(a.target.innerText,questions[questionNumber].answer)}>{answer}</li>
                })}
            </ul>
            {correctMsg !== "" ? 
                correctMsg === "Correct!" ? <><hr></hr><p className='correctMsg'>Correct</p></> : 
                correctMsg === "Incorrect!" ? <><hr></hr><p className='correctMsg'>Incorect!</p></> : null : 
            null}
            </>
            : null}
        </div>
    );
}

export default Questions;