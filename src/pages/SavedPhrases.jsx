
import PhraseCard from "../components/PhraseCard";
import useLocalStorage from "../hooks/useLocalStorage";
import languages from "../data/languages";

function SavedPhrases() {
  const [savedPhrases, setSavedPhrases] = useLocalStorage(
    "bhashabridge-saved",
    []
  );

  function removeBookmark(phrase) {
  setSavedPhrases((previous) =>
    previous.filter(
      (item) =>
        !(
          item.id === phrase.id &&
          item.languageId === phrase.languageId
        )
    )
  );
}

  // Create a mapping between language IDs and speech codes.
  const languageMap = Object.fromEntries(
    languages.map((language) => [
      language.id,
      language.speechCode,
    ])
  );

  return (
    <section className="phrase-page">
      <div className="phrase-heading">
        <span className="hero-label">
          Your personal collection
        </span>

        <h1>My Phrasebook</h1>

        <p>
          Your saved expressions, ready whenever you need them.
        </p>
      </div>

      <p className="phrase-count">
        {savedPhrases.length} saved phrases
      </p>

      {savedPhrases.length > 0 ? (
        <div className="phrases-grid">
          {savedPhrases.map((phrase) => (
            <PhraseCard
              key={`${phrase.languageId}-${phrase.id}`}
              phrase={phrase}
              isSaved={true}
              onToggleSave={removeBookmark}
              languageCode={
                languageMap[phrase.languageId] || "kn-IN"
              }
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>Your phrasebook is empty</h2>

          <p>
            Explore the phrase library and save expressions
            you want to practise later.
          </p>
        </div>
      )}
    </section>
  );
}

export default SavedPhrases;
