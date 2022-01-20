import {useEffect, useState} from "react";
import './App.css';
import MainPage from "./Components/MainPage";
import Questions from "./Components/Questions";
import Highscores from "./Components/Highscores";
import Timer from "./Components/Timer";
import questions from "./assets/questionsData";
import AddHighscores from "./Components/AddHighscores";

import localStorage from "localStorage";

function App() {
  const [screen,setScreen] = useState("main");
  const [stopTimer,setStopTimer] = useState(true);
  const [addHighscore,setAddHighscore] = useState(false);
  const [score, setScore] = useState(50);
  const [finalScore, setFinalScore] = useState(50);
  const [bestScores,setBestScores] = useState(JSON.parse(localStorage.getItem('users')) || []);

  const ShowHighscore = () => {
    setScreen("highscores");
  }

  useEffect(() => {
    if (screen === "questions") {
      setStopTimer(false);
    }
  },[screen]);

  useEffect(() => {
    if(addHighscore === true) {
      setScreen("addHighscores");
    }
  },[addHighscore]);

  return (
    <div className="App">
      <header>
        <p className="showHighscore" onClick={ShowHighscore} id="leaderboard">View Highscores <i className="fas fa-hand-point-left fa-lg"></i></p> 
        <div className="timer">Time:&nbsp; {stopTimer === false ? <Timer setAddHighscore={setAddHighscore} setStopTimer={setStopTimer} score={score} setScore={setScore} setFinalScore={setFinalScore}/> : null}</div>
      </header>
      {screen === "main" ? <MainPage setScreen={setScreen}/> 
        : screen === "highscores" ? <Highscores setStopTimer={setStopTimer} setFinalScore={setFinalScore} finalScore={finalScore} setAddHighscore={setAddHighscore} setScreen={setScreen} bestScores={bestScores} setBestScores={setBestScores}/> 
        : screen === "questions" ? <Questions setFinalScore={setFinalScore} setStopTimer={setStopTimer} questions={questions} setScore={setScore} setScreen={setScreen}/>
        : screen === "addHighscores" ? <AddHighscores finalScore={finalScore} bestScores={bestScores} setScreen={setScreen} setBestScores={setBestScores}/>
        : null}
    </div>
  );
}

export default App;
