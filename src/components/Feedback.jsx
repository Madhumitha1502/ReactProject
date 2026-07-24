import "../styles/Feedback.css";

function Feedback({ score }) {

  let title = "";
  let message = "";

  if (score >= 80) {
    title = "Excellent Resume";
    message = "Your resume has a high chance of passing ATS screening.";
  } 
  else if (score >= 60) {
    title = "Good Resume";
    message = "Your resume is good. Add a few more relevant skills to improve your score.";
  } 
  else {
    title = "Needs Improvement";
    message = "Improve your resume by adding the missing skills and relevant projects.";
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