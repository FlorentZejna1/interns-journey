import { useState } from "react";
import "../style/solutions.css";

function Quiz() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(0);

  const questions = [
    {
      text: "Which group could be found backing Otis Williams?",
      answers: [
        { id: 1, text: "The Charms", isCorrect: true },
        { id: 2, text: "The Feelgoods", isCorrect: false },
        { id: 3, text: "The Flamingos", isCorrect: false },
        { id: 4, text: "The Dominoes", isCorrect: false },
      ],
    },
    {
      text: "Which of these is a real fruit?",
      answers: [
        { id: 1, text: "Ouchee", isCorrect: false },
        { id: 2, text: "Lynchee", isCorrect: true },
        { id: 3, text: "Aychee", isCorrect: false },
        { id: 4, text: "Oychee", isCorrect: false },
      ],
    },
    {
      text: "Spellbound was a 1990s album by which female artist?",
      answers: [
        { id: 1, text: "Paula Abdul", isCorrect: true },
        { id: 2, text: "Mariah Carey", isCorrect: false },
        { id: 3, text: "Brandy", isCorrect: false },
        { id: 4, text: "Monica", isCorrect: false },
      ],
    },
    {
      text: "Winged Foot golf course lies in which US State?",
      answers: [
        { id: 1, text: "Washington", isCorrect: false },
        { id: 2, text: "Florida", isCorrect: false },
        { id: 3, text: "New York", isCorrect: true },
        { id: 4, text: "Michigan", isCorrect: false },
      ],
    },
  ];

  const answerClicked = (isCorrect, id) => {
    setSelected(id);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(0);
    } else {
      setFinalResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
    setSelected(0);
  };

  
  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>

      {showFinalResults ? (
        <div className="final-results">
          <h1>Final results</h1>
          <h2>
            {" "}
            {score} out of {questions.length} correct
          </h2>
          <button className="quiz-restartButton" onClick={() => restartGame()}>
            Restart Game
          </button>
        </div>
      ) : (
        <div className="question-container">
          <h1>Question {currentQuestion + 1}</h1>
          <h2>{questions[currentQuestion].text}</h2>
          <h3>Score: {score}</h3>
          <div className="answer-ul">
            {questions[currentQuestion].answers.map((answers) => {
              return (
                <button
                  onClick={() => answerClicked(answers.isCorrect, answers.id)}
                  style={{
                    backgroundColor: selected
                      ? answers.isCorrect
                        ? "#009900"
                        : answers.id === selected
                        ? "#AF0B0B"
                        : null
                      : null,
                  }}
                  disabled={selected}
                  key={answers.id}
                  className={`answer-list`}
                >
                  {answers.text}
                </button>
              );
            })}
          </div>
          {selected ? (
            <button className="quiz-nextButton" onClick={nextQuestion}>
              Next Question
            </button>
          ) : (
            <p className="quizMessage">Select one</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
