import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Smart <span>Resume</span> Analyzer
        </h1>

        <p>
          Analyze your resume against any Job Description,
          calculate your ATS Score and discover the missing
          skills to improve your chances of getting shortlisted.
        </p>

        <button>
          Get Started
        </button>

      </div>

    </section>
  );
}

export default Hero;