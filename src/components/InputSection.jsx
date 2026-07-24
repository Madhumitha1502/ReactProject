import "../styles/InputSection.css";

function InputSection({ resume, setResume, job, setJob }) {

    return (

        <section className="input-section">

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

                <p>Paste the Job Description</p>

                <textarea
                    placeholder="Java React Spring Boot MySQL Docker"
                    value={job}
                    onChange={(e)=>setJob(e.target.value)}
                ></textarea>

            </div>

        </section>

    );
}

export default InputSection;