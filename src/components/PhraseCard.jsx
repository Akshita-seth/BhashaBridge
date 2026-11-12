import SpeechButton from "./SpeechButton";

function PhraseCard({ phrase, isSaved, onToggleSave, languageCode = "kn-IN"
 }) {
  return (
    <article className="phrase-card">

      <div className="phrase-card-top">
        <span className="phrase-category">
          {phrase.category}
        </span>

        <button
          type="button"
          className="bookmark-button"
          onClick={() => onToggleSave(phrase)}
          aria-label={
            isSaved
              ? "Remove phrase from saved phrases"
              : "Save phrase"
          }
          aria-pressed={isSaved}
        >
          {isSaved ? "★ Saved" : "☆ Save"}
        </button>
      </div>

      <h2 className="phrase-native">
        {phrase.native}
      </h2>

      <p className="phrase-transliteration">
        {phrase.transliteration}
      </p>

      <SpeechButton
         text={phrase.native}
        languageCode={languageCode}
      />

      <h3 className="phrase-meaning">
        {phrase.meaning}
      </h3>

      <p className="phrase-context">
        {phrase.context}
      </p>

    </article>
  );
}

export default PhraseCard;
