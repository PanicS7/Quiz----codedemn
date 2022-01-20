import { useEffect, useState } from "react";

function Timer({setAddHighscore,setStopTimer,score,setScore,setFinalScore}) {
    const [timer,setTimer] = useState(60); // default is 60 because it reduce 10 when component is mounted (bug)

    useEffect( () => {
        if (timer <= 0) {
            return ( 
                setAddHighscore(true),
                setStopTimer(true),
                setFinalScore(0),
                setScore(50) // reset score to default value 
            )
        }
        const interval = setInterval(() => {
            setTimer((prev) => {
               return prev - 1;
            })
        },1000);
        return () => clearInterval(interval);
    },[setStopTimer,timer,setAddHighscore,setScore,setFinalScore]);

    useEffect( () => {
        setTimer(prev => prev - 10);
    },[score]);

    return (
        <span id="timer">
            {timer}
        </span>
    );
}

export default Timer;