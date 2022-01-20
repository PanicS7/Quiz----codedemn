import { useState } from "react";
import localStorage from "localStorage";

function AddHighscores({finalScore,setScreen,setBestScores}) {
    const [currentUser,setCurrentUser] = useState("");

    const handleChange = (username) => {
        return setCurrentUser(username);
    }

    const handleKey = (e,username) => {
        if (e.keyCode === 13) {
            addUserScore();
        }
    }

    const addUserScore = () => {
        // add to local storage
        var oldItems = JSON.parse(localStorage.getItem('users')) || [];
        var newItem =
        {
            'username': currentUser,
            "score": finalScore
        };

        oldItems.push(newItem);

        return (
            setBestScores(
                oldItems
            ),
            localStorage.setItem("users", JSON.stringify(oldItems)),
            setCurrentUser(""),
            setScreen("highscores")
            
        );
    }

    return (
        <div className="addHighscore">
            <h2>All done!</h2>
            <p>Your final score is {finalScore}.</p>
            <div>Enter initials: 
                <input onChange={(e) => {handleChange(e.target.value)}} onKeyDown={(e) => {handleKey(e,e.target.value)}} type="text" value={currentUser}></input>
                <button className="addScoreBtn" onClick={addUserScore}>Submit!</button>
            </div>
        </div>
    );
}

export default AddHighscores;