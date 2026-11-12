
import { Link } from "react-router-dom";
import situations from "../data/situations";
import conversations from "../data/conversations";
import languages from "../data/languages";
import useLocalStorage from "../hooks/useLocalStorage";
import SituationCard from "../components/SituationCard";

function Explore() {
  const [selectedLanguage] = useLocalStorage(
    "bhashabridge-language",
    "kannada"
  );

  const currentLanguage =
    languages.find((language) => language.id === selectedLanguage) ||
    languages[0];

  const languageConversations =
    conversations[currentLanguage.id] || {};

  const availableSituations = situations.filter(
    (situation) => languageConversations[situation.id]
  );

  return (
    <section className="explore-page">
      <div className="explore-heading">
        <span className="hero-label">
          Learn through real-life situations
        </span>

        <h1>Where do you want to start?</h1>

        <p>
          Practise everyday conversations in {currentLanguage.name}.
        </p>
      </div>

      {availableSituations.length > 0 ? (
        <div className="situations-grid">
          {availableSituations.map((item) => (
            <SituationCard
              key={item.id}
              situation={item}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>Conversations coming soon</h2>
          <p>
            We're preparing more {currentLanguage.name} conversations.
          </p>
          <Link to="/phrases" className="primary-button">
            Explore available phrases
          </Link>
        </div>
      )}
    </section>
  );
}

export default Explore;
