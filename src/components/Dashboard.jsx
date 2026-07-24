import "../styles/Dashboard.css";

function Dashboard({ score, matchedSkills, missingSkills }) {
  return (
    <div className="dashboard">

      <div className="score-card">

        <h2>Your ATS Score</h2>

        <div
    className="score-circle"
    style={{ "--progress": score }}
>
    <span>{score}%</span>
</div>

        <h3>
          {score >= 80
            ? "Excellent"
            : score >= 60
            ? "Good Match"
            : "Need Improvement"}
        </h3>

      </div>

      <div className="summary-card">

        <div className="box">
          <h2>{matchedSkills.length}</h2>
          <p>Matched Skills</p>
        </div>

        <div className="box">
          <h2>{missingSkills.length}</h2>
          <p>Missing Skills</p>
        </div>

        <div className="box">
          <h2>{score}%</h2>
          <p>Job Match</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;