import React from 'react';

function MainPage(props) {
    const {setScreen} = props;

    const startQuiz = () => {
        setScreen("questions");
    };

    return (
        <div>
            <main className="main">
                <h2>Coding Quiz Challange</h2>
                <p>Try to answer to following code-related questions within the time limit.</p>
                <p>Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
                <button onClick={startQuiz}>Start Quiz</button>
            </main>
        </div>
    );
}

export default MainPage;