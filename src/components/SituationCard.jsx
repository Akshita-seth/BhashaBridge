
import { Link } from "react-router-dom";

function SituationCard({ situation }) {
  return (
    <Link
      to={`/conversation/${situation.id}`}
      className="situation-card"
    >
      <div className="situation-card-top">
        <span className="situation-emoji" aria-hidden="true">
          {situation.emoji}
        </span>

        <span className="situation-category">
          {situation.category}
        </span>
      </div>

      <h2>{situation.title}</h2>

      <p>{situation.description}</p>

      <span className="card-link">
        Practise this situation →
      </span>
    </Link>
  );
}

export default SituationCard;
