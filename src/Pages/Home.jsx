import { useState } from "react";
import Navbar from "../components/Navbar";
import ResumeInput from "../components/ResumeInput";
import JobDescription from "../components/JobDescription";
import ResultCard from "../components/ResultCard";
import "../styles/Home.css";

function Home() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const [score, setScore] = useState(0);
  const [matchedSkills, setMatchedSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);

  const analyzeResume = () => {

    const resumeSkills = resume
      .toLowerCase()
      .split(/\s+/);

    const jobSkills = jobDescription
      .toLowerCase()
      .split(/\s+/);

    const matched = jobSkills.filter(skill =>
      resumeSkills.includes(skill)
    );

    const missing = jobSkills.filter(skill =>
      !resumeSkills.includes(skill)
    );

    const ats =
      jobSkills.length === 0
        ? 0
        : Math.round((matched.length / jobSkills.length) * 100);

    setMatchedSkills(matched);
    setMissingSkills(missing);
    setScore(ats);
  };

  return (
    <>
      <Navbar />

      <div className="hero">

        <h1>AI Resume Analyzer</h1>

        <ResumeInput
          resume={resume}
          setResume={setResume}
        />

        <JobDescription
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
        />

        <button
          onClick={analyzeResume}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            cursor: "pointer"
          }}
        >
          Analyze Resume
        </button>

        <ResultCard
          score={score}
          matchedSkills={matchedSkills}
          missingSkills={missingSkills}
        />

      </div>
    </>
  );
}

export default Home;