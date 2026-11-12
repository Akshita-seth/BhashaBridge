
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import languages from "../data/languages";

function Home() {
  const availableLanguages = languages.filter(
    (language) => language.available
  );

  const [selectedLanguage, setSelectedLanguage] = useLocalStorage(
    "bhashabridge-language",
    "kannada"
  );

  const currentLanguage = availableLanguages.find(
    (language) => language.id === selectedLanguage
  ) || availableLanguages[0];

  return (
    <section className="home-page">
      <div className="home-hero">

        <span className="hero-label">
          Your Indian language companion
        </span>

        <h1>
          Speak Local.
          <br />
          Connect Better.
        </h1>

        <p>
          Moving to a new city? Start communicating in the
          local language through practical conversations
          designed for everyday life.
        </p>

        <div className="home-language-selector">
          <label htmlFor="home-language">
            Choose your language
          </label>

          <select
            id="home-language"
            value={currentLanguage.id}
            onChange={(event) =>
              setSelectedLanguage(event.target.value)
            }
          >
            {availableLanguages.map((language) => (
              <option key={language.id} value={language.id}>
                {language.nativeName} — {language.name}
              </option>
            ))}
          </select>
        </div>

        <Link to="/explore" className="primary-button">
          Explore Conversations →
        </Link>

        <div className="upcoming-languages">
          <span>More languages coming soon:</span>

          <div className="upcoming-language-list">
            {languages
              .filter((language) => !language.available)
              .map((language) => (
                <span key={language.id}>
                  {language.nativeName} · {language.name}
                </span>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
