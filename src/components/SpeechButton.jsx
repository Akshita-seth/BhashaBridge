
import { useState } from "react";
import { speakPhrase } from "../utils/speechUtils";

function SpeechButton({
  text,
  languageCode = "kn-IN",
}) {
  const [message, setMessage] = useState("");

  async function handleSpeak() {
  setMessage("Loading pronunciation...");

  const result = await speakPhrase(text, languageCode);

  setMessage(result.message);
}

  return (
    <div className="speech-control">
      <button
        type="button"
        className="speech-button"
        onClick={handleSpeak}
        aria-label={`Listen to pronunciation: ${text}`}
      >
        <span aria-hidden="true">🔊</span>
        Listen
      </button>

      {message && (
        <span className="speech-message" role="status">
          {message}
        </span>
      )}
    </div>
  );
}

export default SpeechButton;
