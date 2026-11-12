
import { useState } from "react";

import phrases from "../data/phrases";
import languages from "../data/languages";
import PhraseCard from "../components/PhraseCard";
import useLocalStorage from "../hooks/useLocalStorage";

function PhraseExplorer() {
  const availableLanguages = languages.filter(
    (language) => language.available
  );

  const [selectedLanguage, setSelectedLanguage] = useLocalStorage(
    "bhashabridge-language",
    "kannada"
  );

  const [savedPhrases, setSavedPhrases] = useLocalStorage(
    "bhashabridge-saved",
    []
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const currentLanguage = availableLanguages.find(
    (language) => language.id === selectedLanguage
  ) || availableLanguages[0];

  const languagePhrases = phrases.filter(
    (phrase) => phrase.languageId === currentLanguage.id
  );
  
  const categories = [
     "All",
     ...new Set(languagePhrases.map((phrase) => phrase.category)),
   ];


  function toggleBookmark(phrase) {
  setSavedPhrases((previous) => {
    const alreadySaved = previous.some(
      (item) =>
        item.id === phrase.id &&
        item.languageId === phrase.languageId
    );

    if (alreadySaved) {
      return previous.filter(
        (item) =>
          !(
            item.id === phrase.id &&
            item.languageId === phrase.languageId
          )
      );
    }

    return [...previous, phrase];
  });
}

  const filteredPhrases = languagePhrases.filter((phrase) => {
    const matchesSearch = [
      phrase.native,
      phrase.transliteration,
      phrase.meaning,
    ].some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const matchesCategory =
      activeCategory === "All" ||
      phrase.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="phrase-page">

      <div className="phrase-heading">
        <span className="hero-label">
          Build your everyday vocabulary
        </span>

        <h1>Phrase Library</h1>

        <p>
          Discover practical expressions, understand their meanings
          and save the ones you want to remember.
        </p>
      </div>

      <div className="language-selector">
        <label htmlFor="phrase-language">
          Choose a language
        </label>

        <select
          id="phrase-language"
          value={currentLanguage.id}
          onChange={(event) => {
            setSelectedLanguage(event.target.value);
            setSearchTerm("");
            setActiveCategory("All");
          }}
        >
          {availableLanguages.map((language) => (
            <option key={language.id} value={language.id}>
              {language.nativeName} — {language.name}
            </option>
          ))}
        </select>
      </div>

      <div className="phrase-controls">

        <input
          type="search"
          className="phrase-search"
          placeholder="Search in English or native script..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          aria-label="Search phrases"
        />

        <div className="phrase-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

      </div>

      <p className="phrase-count">
        Showing {filteredPhrases.length} {currentLanguage.name} phrases
      </p>

      <div className="phrases-grid">

        {filteredPhrases.map((phrase) => (
          <PhraseCard
            key={phrase.id}
            phrase={phrase}
            isSaved={savedPhrases.some(
              (item) =>
                 item.id === phrase.id &&
                 item.languageId === phrase.languageId
            )}
            onToggleSave={toggleBookmark}
            languageCode={currentLanguage.speechCode}
          />
        ))}

      </div>

      {filteredPhrases.length === 0 && (
        <p className="empty-message">
          No phrases found. Try another search.
        </p>
      )}

    </section>
  );
}

export default PhraseExplorer;
