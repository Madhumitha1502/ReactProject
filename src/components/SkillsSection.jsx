import "../styles/SkillsSection.css";

function SkillsSection({ matchedSkills, missingSkills }) {

  if (matchedSkills.length === 0 && missingSkills.length === 0) {
    return null;
  }

  return (
    <div className="skills-section">

      <div className="skills-box">

        <h2>Matched Skills</h2>

        <div className="skill-list">

          {matchedSkills.map((skill, index) => (
            <div className="skill matched" key={index}>
              {skill}
            </div>
          ))}

        </div>

      </div>

      <div className="skills-box">

        <h2>Missing Skills</h2>

        <div className="skill-list">

          {missingSkills.map((skill, index) => (
            <div className="skill missing" key={index}>
              {skill}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default SkillsSection;