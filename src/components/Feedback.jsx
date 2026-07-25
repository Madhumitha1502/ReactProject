import "../styles/Feedback.css";

function Feedback({ score }) {

  let title = "";
let message = "";

if (score >= 90) {
  title = "Excellent";
  message = "Your resume is highly aligned with the job description.";
}
else if (score >= 75) {
  title = "Very Good";
  message = "Your resume matches most of the required skills.";
}
else if (score >= 50) {
  title = "Good";
  message = "Add the missing technical skills to improve your ATS score.";
}
else {
  title = "Needs Improvement";
  message = "Your resume needs more relevant technical skills for this role.";
}
  return (
    <div className="feedback-card">

      <h2>Resume Feedback</h2>

      <h3>{title}</h3>

      <p>{message}</p>

    </div>
  );
}

export default Feedback;