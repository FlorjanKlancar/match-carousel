import "./Card.css";
import bgLive from "../assets/bg-live.jpg";
import bgPostMatch from "../assets/bg-postmatch.jpg";
import bgPreMatch from "../assets/bg-prematch.jpg";

type CardProps = {
  tournament: any;
  single: any;
  categoryName: string;
};

const ENV_IMAGE_API = "https://img.sportradar.com/ls/crest/medium";

function Card({ tournament, single, categoryName }: CardProps) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('${
          single.status.name === "Ended"
            ? bgPostMatch
            : single.status.name === "Not started"
            ? bgPreMatch
            : bgLive
        }')`,
      }}
    >
      <div className="match_title">
        {`${tournament.name} ${
          tournament.seasontypename ? `- ${tournament.seasontypename}` : ``
        }`}
      </div>

      <div className="match_subtitle">{categoryName}</div>

      <div className="match_subtitle">
        {single._dt.date} - {single._dt.time}
      </div>

      <div className="match_opponents">
        <div>
          <div className="match_player_info">
            <div className="match_player_image">
              <img
                src={`${ENV_IMAGE_API}/${single.teams.home.uid}.png`}
                alt={single.teams.home.name}
              />
            </div>
            <div>{single.teams.home.name}</div>
          </div>
          <div style={{ marginTop: "5px" }}>{single.teams.home.abbr}</div>
        </div>
        <div className="match_score">
          <span
            style={{
              color: `${
                single.result.home > single.result.away ? "#3ACA00" : "#E70707"
              }`,
            }}
          >
            {single.result.home !== null ? `${single.result.home} : ` : ""}
          </span>
          <span
            style={{
              color: `${
                single.result.away > single.result.home ? "#3ACA00" : "#E70707"
              }`,
            }}
          >
            {single.result.away !== null ? single.result.away : ""}
          </span>
        </div>

        <div>
          <div className="match_player_info">
            <div className="match_player_image">
              <img
                src={`${ENV_IMAGE_API}/${single.teams.away.uid}.png`}
                alt={single.teams.away.name}
              />
            </div>
            <div>{single.teams.away.name}</div>
          </div>
          <div style={{ marginTop: "5px" }}>{single.teams.away.abbr}</div>
        </div>
      </div>

      <div className="match_status">
        {single.status.name === "Ended" ? (
          <span style={{ backgroundColor: "#03ba1f" }}>
            {single.status.name}
          </span>
        ) : single.status.name === "Not started" ? (
          <span style={{ backgroundColor: "#A9A9A9" }}>
            {single.status.name}
          </span>
        ) : (
          <span style={{ backgroundColor: "#E1820F" }}>
            {single.status.name}
          </span>
        )}
      </div>
    </div>
  );
}

export default Card;
