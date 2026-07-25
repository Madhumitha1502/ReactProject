import "../styles/StrengthMeter.css";

function StrengthMeter({ score }) {

  let level = "";

  if (score >= 90) {
    level = "Excellent";
  } else if (score >= 75) {
    level = "Strong";
  } else if (score >= 50) {
    level = "Average";
  } else {
    level = "Weak";
  }

  return (
    <div className="strength-card">

      <h2>Resume Strength</h2>

      <div className="progress">

        <div
          className="progress-fill"
          style={{ width: `${score}%` }}
        ></div>

      </div>

      <h3>{score}%</h3>

      <p>{level}</p>

    </div>
  );
}

export default StrengthMeter;