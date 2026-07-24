import "../styles/SkillsCard.css";

function SkillsCard({ matchedSkills, missingSkills }) {

  if (matchedSkills.length === 0 && missingSkills.length === 0) {
    return null;
  }

  return (
    <div className="skills-container">

      <div className="skills-card">

        <h2>Matched Skills</h2>

        {matchedSkills.length > 0 ? (
          matchedSkills.map((skill, index) => (
            <p key={index}>✔ {skill}</p>
          ))
        ) : (
          <p>No Matched Skills</p>
        )}

      </div>

      <div className="skills-card">

        <h2>Missing Skills</h2>

        {missingSkills.length > 0 ? (
          missingSkills.map((skill, index) => (
            <p key={index}>✖ {skill}</p>
          ))
        ) : (
          <p>No Missing Skills</p>
        )}

      </div>

    </div>
  );
}

export default SkillsCard;