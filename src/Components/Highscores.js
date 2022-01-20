import localStorage from "localStorage";
import { useEffect } from "react";

function Highscores({setStopTimer,setFinalScore,setAddHighscore, setScreen, bestScores, setBestScores}) {

    // sort best scores
    bestScores = bestScores.sort((a,b) => b.score-a.score);

    const handleMenuClick = () => {
        return (
            setScreen("main"),
            setFinalScore(50),
            setAddHighscore(false)    
        );
    }

    const handleClearClick = () => {
        return (
            setBestScores([]),
            localStorage.clear(),
            setFinalScore(50),
            setAddHighscore(false)
        )
    }

    useEffect(() => {
        setStopTimer(true);
    },[setStopTimer]);


    return (
        <div className="highscores">
            <h2>Highscores</h2>
            <ol>
                {bestScores?.map((user,index) => {
                        return <li key={index}>{user.username} - <span>{user.score}</span></li>
                })}
            </ol>
            <div className="highscoresBtnContainer">
                <button className="highscoresBtn" onClick={handleMenuClick}>Go Back</button>
                <button className="highscoresBtn" onClick={handleClearClick}>Clear Highscores</button>
            </div>
            
        </div>
    );
}

export default Highscores;