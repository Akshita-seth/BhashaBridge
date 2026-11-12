
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import situations from "../data/situations";
import conversations from "../data/conversations";
import SpeechButton from "../components/SpeechButton";
import languages from "../data/languages";
import useLocalStorage from "../hooks/useLocalStorage";

function Conversation() {
  const { scenarioId } = useParams();

  const [selectedLanguage] = useLocalStorage(
    "bhashabridge-language",
    "kannada"
  );

  const currentLanguage =
    languages.find((language) => language.id === selectedLanguage) ||
    languages[0];

  const situation = situations.find(
    (item) => item.id === scenarioId
  );

  const conversation =
    conversations[currentLanguage.id]?.[scenarioId];

  const [stepIndex, setStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setStepIndex(0);
    setSelectedOption(null);
    setCompleted(false);
  }, [scenarioId, selectedLanguage]);

  if (!situation) {
    return (
      <section className="conversation-page">
        <h1>Situation not found</h1>
        <Link to="/explore">Back to Explore</Link>
      </section>
    );
  }

  if (!conversation) {
    return (
      <section className="conversation-page">
        <h1>{situation.title}</h1>
        <p>This conversation is coming soon.</p>
        <Link to="/explore">← Back to Explore</Link>
      </section>
    );
  }

  const currentStep = conversation.steps[stepIndex];

  function handleContinue() {
    if (!selectedOption) return;

    if (!selectedOption.correct) {
      setSelectedOption(null);
      return;
    }

    if (stepIndex < conversation.steps.length - 1) {
      setStepIndex((previous) => previous + 1);
      setSelectedOption(null);
    } else {
      setCompleted(true);
    }
  }

  function handleRestart() {
    setStepIndex(0);
    setSelectedOption(null);
    setCompleted(false);
  }

  if (completed) {
    return (
      <section className="conversation-page">
        <div className="conversation-panel completion-panel">
          <span className="completion-icon" aria-hidden="true">
            ✓
          </span>

          <h1>Conversation completed!</h1>

          <p>
            You've completed the {conversation.title.toLowerCase()} conversation.
            Keep practising to become more comfortable with everyday{" "}
            {conversation.language}.
          </p>

          <div className="conversation-actions">
            <button
              className="primary-button"
              onClick={handleRestart}
            >
              Practise Again
            </button>

            <Link to="/explore" className="secondary-button">
              Back to Explore
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="conversation-page">
      <Link to="/explore" className="back-link">
        ← Back to Explore
      </Link>

      <div className="conversation-heading">
        <span className="hero-label">
          {conversation.language} · {situation.title}
        </span>

        <h1>{conversation.title}</h1>
        <p>{conversation.description}</p>
      </div>

      <div className="conversation-panel">
        <div className="conversation-progress">
          <span>Conversation progress</span>
          <span>
            {stepIndex + 1} / {conversation.steps.length}
          </span>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-label="Conversation progress"
          aria-valuemin={0}
          aria-valuemax={conversation.steps.length}
          aria-valuenow={stepIndex + 1}
        >
          <div
            className="progress-fill"
            style={{
              width: `${
                ((stepIndex + 1) / conversation.steps.length) * 100
              }%`,
            }}
          />
        </div>

        <div className="speaker-section">
          <span className="speaker-label">
            {currentStep.speaker} says
          </span>

          <h2 className="native-text">
            {currentStep.speakerLine.native}
          </h2>

          <SpeechButton
            text={currentStep.speakerLine.native}
            languageCode={currentLanguage.speechCode}
          />

          <p className="transliteration">
            {currentStep.speakerLine.transliteration}
          </p>

          <p className="speaker-meaning">
            "{currentStep.speakerLine.meaning}"
          </p>
        </div>

        <div className="task-section">
          <span className="speaker-label">YOUR TASK</span>

          <h2>{currentStep.instruction}</h2>

          <div className="options-list">
            {currentStep.options.map((option, index) => (
              <button
                key={option.id}
                className={`conversation-option ${
                  selectedOption?.id === option.id ? "selected" : ""
                }`}
                onClick={() => setSelectedOption(option)}
                aria-pressed={selectedOption?.id === option.id}
              >
                <span className="option-number">
                  {String.fromCharCode(65 + index)}
                </span>

                <span className="option-content">
                  <strong>{option.native}</strong>
                  <span>{option.transliteration}</span>
                </span>
              </button>
            ))}
          </div>

          {selectedOption && (
            <div
              className={`feedback-panel ${
                selectedOption.correct ? "correct" : "incorrect"
              }`}
              role="status"
              aria-live="polite"
            >
              <strong>
                {selectedOption.correct
                  ? "Correct response!"
                  : "Not quite. Try again."}
              </strong>

              <p>{selectedOption.explanation}</p>

              <p>
                <strong>Meaning:</strong> {selectedOption.meaning}
              </p>
            </div>
          )}

          <button
            className="primary-button continue-button"
            onClick={handleContinue}
            disabled={!selectedOption}
          >
            {!selectedOption
              ? "Choose a response"
              : selectedOption.correct
                ? stepIndex === conversation.steps.length - 1
                  ? "Complete Conversation"
                  : "Continue →"
                : "Try Again"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Conversation;
