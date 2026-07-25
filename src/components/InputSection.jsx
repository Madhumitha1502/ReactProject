import "../styles/InputSection.css";

function InputSection({ resume, setResume, job, setJob }) {

    return (

        <section className="input-section" id="analyzer">

            <div className="card">

                <h2>Resume Skills</h2>

                <p>Enter your resume skills</p>

                <textarea
                    placeholder="Java React HTML CSS MySQL Git"
                    value={resume}
                    onChange={(e)=>setResume(e.target.value)}
                ></textarea>

            </div>

            <div className="card">
                <h2>Job Description</h2>

<p>Paste the complete job description below.</p>

<textarea
  placeholder="Example:
  We are looking for a Java Full Stack Developer with experience in Java, Spring Boot, React, MySQL and Git. The candidate should have good problem-solving skills and knowledge of REST APIs."
                    value={job}
                    onChange={(e)=>setJob(e.target.value)}
                ></textarea>

            </div>

        </section>

    );
}

export default InputSection;