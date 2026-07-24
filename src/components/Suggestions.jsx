import "../styles/Suggestions.css";

function Suggestions({ score, missingSkills }) {

  let message = "";

  if (score >= 80) {
    message = "Excellent! Your resume is well aligned with the job description.";
  } else if (score >= 60) {
    message = "Good match! Add the missing skills to improve your ATS score.";
  } else {
    message = "Your resume needs improvement. Focus on the missing skills below.";
  }

  return (
    <div className="suggestion-card">

      <h2>Suggestions</h2>

      <p className="message">{message}</p>

      <div className="suggestion-list">

        {missingSkills.map((skill, index) => (
          <div className="suggestion" key={index}>
            Learn {skill}
          </div>
        ))}

      </div>

    </div>
  );
}

export default Suggestions;