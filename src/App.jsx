import skills from "./data/skills";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InputSection from "./components/InputSection";
import Dashboard from "./components/Dashboard";
import SkillsSection from "./components/SkillsSection";
import Suggestions from "./components/Suggestions";
import Feedback from "./components/Feedback";
import History from "./components/History";
import Footer from "./components/Footer";
import StrengthMeter from "./components/StrengthMeter";

import "./styles/AnalyzeButton.css";

function App() {

  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [loading,setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [matchedSkills, setMatchedSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);

  const [history, setHistory] = useState([]);

  const analyzeResume = () => {
    if (resume.trim() === "" || job.trim() === "") {
  alert("Please enter both Resume and Job Description.");
  return;
}
    setLoading(true);
    setTimeout(() => {
   const resumeText = resume.toLowerCase();

const jobText = job.toLowerCase();

const resumeSkills = skills.filter(skill =>
  resumeText.includes(skill)
);

const jobSkills = skills.filter(skill =>
  jobText.includes(skill)
);

    const matched = jobSkills.filter(skill =>
      resumeSkills.includes(skill)
    );

    const missing = jobSkills.filter(skill =>
      !resumeSkills.includes(skill)
    );

    const ats = jobSkills.length === 0
      ? 0
      : Math.round((matched.length / jobSkills.length) * 100);

    setScore(ats);
    setMatchedSkills(matched);
    setMissingSkills(missing);

    setHistory(prev => [
      {
        score: ats,
        matched: matched.length,
        missing: missing.length
      },
      ...prev
    ]);
    setLoading(false);
  },2000);

  };

  const resetData = () => {

    setResume("");
    setJob("");
    setScore(0);
    setMatchedSkills([]);
    setMissingSkills([]);
    setHistory([]);

  };

  return (
    <>
      <Navbar />

      <Hero />

      <InputSection
        resume={resume}
        setResume={setResume}
        job={job}
        setJob={setJob}
      />

      <div className="button-container">

        <button
          className="analyze-btn"
          onClick={analyzeResume}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

        <button
          className="reset-btn"
          onClick={resetData}
        >
          Reset
        </button>

      </div>

      <Dashboard
        score={score}
        matchedSkills={matchedSkills}
        missingSkills={missingSkills}
      />

      <SkillsSection
        matchedSkills={matchedSkills}
        missingSkills={missingSkills}
      />

      <Suggestions
        score={score}
        missingSkills={missingSkills}
      />

      <Feedback
        score={score}
      />

      <History
        history={history}
      />

      <StrengthMeter score={score} />

      <Footer />

    </>
  );
}

export default App;