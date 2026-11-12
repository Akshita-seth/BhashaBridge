
import { useEffect, useMemo, useState } from "react";

import phrases from "../data/phrases";
import languages from "../data/languages";
import { generateQuiz } from "../utils/quizUtils";
import useLocalStorage from "../hooks/useLocalStorage";

function Practice() {
  // Remember the language selected in Phrase Library.
  const [selectedLanguage] = useLocalStorage(
    "bhashabridge-language",
    "kannada"
  );

  // Find the selected language.
  const currentLanguage = languages.find(
    (language) => language.id === selectedLanguage
  ) || languages[0];

  // Only use phrases belonging to the selected language.
  const languagePhrases = useMemo(
  () =>
    phrases.filter(
      (phrase) => phrase.languageId === currentLanguage.id
    ),
  [currentLanguage.id]
);
  // Generate a quiz using only the selected language.
  const [quiz, setQuiz] = useState(() =>
    generateQuiz(languagePhrases)
  );

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
   useEffect(() => {
  setQuiz(generateQuiz(languagePhrases));
  setQuestionIndex(0);
  setSelectedOption(null);
  setScore(0);
  setFinished(false);
}, [languagePhrases]);

  // Store progress separately for each language.
  const [allProgress, setAllProgress] = useLocalStorage(
    "bhashabridge-progress-by-language",
    {}
  );

  const progress = allProgress[currentLanguage.id] || {
    completedQuizzes: 0,
    bestScore: 0,
    lastScore: 0,
  };

  const currentQuestion = quiz[questionIndex];

  function handleNext() {
    if (!selectedOption) return;

    // Incorrect answer: allow the user to try again.
    if (selectedOption.id !== currentQuestion.correctOptionId) {
      setSelectedOption(null);
      return;
    }

    const updatedScore = score + 1;
    setScore(updatedScore);

    // Move to the next question.
    if (questionIndex < quiz.length - 1) {
      setQuestionIndex((previous) => previous + 1);
      setSelectedOption(null);
    } else {
      // Save the completed quiz statistics.
      setAllProgress((previous) => {
        const previousProgress = previous[currentLanguage.id] || {
          completedQuizzes: 0,
          bestScore: 0,
          lastScore: 0,
        };

        return {
          ...previous,
          [currentLanguage.id]: {
            completedQuizzes:
              previousProgress.completedQuizzes + 1,

            bestScore: Math.max(
              previousProgress.bestScore,
              updatedScore
            ),

            lastScore: updatedScore,
          },
        };
      });

      setFinished(true);
    }
  }

  function restartQuiz() {
    setQuiz(generateQuiz(languagePhrases));
    setQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setFinished(false);
  }

  // Handle insufficient phrase data.
  if (quiz.length === 0) {
    return (
      <section className="practice-page">
        <div className="practice-heading">
          <span className="hero-label">
            {currentLanguage.nativeName} · {currentLanguage.name}
          </span>

          <h1>Practice Zone</h1>

          <p>
            Not enough phrases are available to generate a quiz.
            At least four phrases are required.
          </p>
        </div>
      </section>
    );
  }

  // Completion screen.
  if (finished) {
    return (
      <section className="practice-page">

        <div className="quiz-panel completion-panel">

          <span className="completion-icon" aria-hidden="true">
            ✓
          </span>

          <h1>Practice completed!</h1>

          <p>
            You've completed your {currentLanguage.name} quiz.
          </p>

          <p>
            You scored {score} out of {quiz.length}.
          </p>

          <div className="score-summary">

            <div>
              <strong>{score}/{quiz.length}</strong>
              <span>Last score</span>
            </div>

            <div>
              <strong>{progress.bestScore}/{quiz.length}</strong>
              <span>Best score</span>
            </div>

            <div>
              <strong>{progress.completedQuizzes}</strong>
              <span>Quizzes completed</span>
            </div>

          </div>

          <button
            type="button"
            className="primary-button"
            onClick={restartQuiz}
          >
            Practise Again
          </button>

        </div>

      </section>
    );
  }

  // Active quiz screen.
  return (
    <section className="practice-page">

      <div className="practice-heading">

        <span className="hero-label">
          {currentLanguage.nativeName} · {currentLanguage.name}
        </span>

        <h1>Practice Zone</h1>

        <p>
          Test your understanding of everyday{" "} 
          {currentLanguage.name} expressions through short quizzes.
        </p>

      </div>

      <div className="quiz-panel">

        <div className="quiz-top">
          <span>
            Question {questionIndex + 1} of {quiz.length}
          </span>

          <span>
            Score: {score}
          </span>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-label="Quiz progress"
          aria-valuemin={0}
          aria-valuemax={quiz.length}
          aria-valuenow={questionIndex + 1}
        >
          <div
            className="progress-fill"
            style={{
              width: `${((questionIndex + 1) / quiz.length) * 100}%`,
            }}
          />
        </div>

        <div className="quiz-question">

          <span className="speaker-label">
            TRANSLATE THIS PHRASE
          </span>

          <h2>{currentQuestion.question}</h2>

          <p>
            Choose the correct {currentLanguage.name} expression.
          </p>

        </div>

        <div className="quiz-options">

          {currentQuestion.options.map((option, index) => {

            const isSelected =
              selectedOption?.id === option.id;

            return (
              <button
                key={option.id}
                type="button"
                className={`quiz-option ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => setSelectedOption(option)}
                aria-pressed={isSelected}
              >

                <span className="option-number">
                  {String.fromCharCode(65 + index)}
                </span>

                <span className="option-content">
                  <strong>{option.native}</strong>
                  <span>{option.transliteration}</span>
                </span>

              </button>
            );
          })}

        </div>

        {selectedOption && (
          <div
            className={`feedback-panel ${
              selectedOption.id === currentQuestion.correctOptionId
                ? "correct"
                : "incorrect"
            }`}
            role="status"
            aria-live="polite"
          >

            <strong>
              {selectedOption.id === currentQuestion.correctOptionId
                ? "Correct answer!"
                : "Not quite. Try again."}
            </strong>

            <p>
              {selectedOption.id === currentQuestion.correctOptionId
                ? currentQuestion.explanation
                : "Review the options and choose another answer."}
            </p>

          </div>
        )}

        <button
          type="button"
          className="primary-button continue-button"
          onClick={handleNext}
          disabled={!selectedOption}
        >
          {!selectedOption
            ? "Choose an answer"
            : selectedOption.id === currentQuestion.correctOptionId
              ? questionIndex === quiz.length - 1
                ? "Finish Quiz"
                : "Next Question →"
              : "Try Again"}
        </button>

      </div>

    </section>
  );
}

export default Practice;
