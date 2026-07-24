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

import "./styles/AnalyzeButton.css";

function App() {

  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");

  const [score, setScore] = useState(0);
  const [matchedSkills, setMatchedSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);

  const [history, setHistory] = useState([]);

  const analyzeResume = () => {

    const resumeSkills = resume
      .toLowerCase()
      .split(/[\s,]+/)
      .filter(skill => skill);

    const jobSkills = job
      .toLowerCase()
      .split(/[\s,]+/)
      .filter(skill => skill);

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
        >
          Analyze Resume
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

      <Footer />

    </>
  );
}

export default App;