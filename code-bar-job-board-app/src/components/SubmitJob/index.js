import { useState } from "react";

const SumbitJobPage = ({currentUser}) => {

    const [formJobTitle, setFormJobTitle] = useState("");
    const [formJobDescription, setFormJobDescription] = useState("");
    const [formJobSalary, setFormJobSalary] = useState("");
    const [formJobRemote, setFormJobRemote] = useState(false);
    const [formJobContactEmail, setFormJobContactEmail] = useState("");
    const [formJobPostLink, setFormJobPostLink] = useState("");
    const [formJobClosingDate, setFormJobClosingDate] = useState("");
    const [formJobCompanyName, setFormJobCompanyName] = useState("");
    const [formJobCompanyLocation, setFormJobCompanyLocation] = useState("");
    const [formJobCompanyWebsite, setFormJobCompanyWebsite] = useState("");


    const handleFormSubmitButton = () => {

    };

    return (
        <section className='job-post-details-section'>
            
            <form className='job-post-form'>
                <section className='job-details-section'>
                    <h3>Job post details</h3>
                    <div className='job-details-input'>
                        <label for='job_title'>Title</label>
                        <input id='job_title' placeholder='e.g. Internship' onChange={(evt) => {setFormJobTitle(evt.target.value)}}></input>
                    </div>
                    <div className='job-details-input'>
                        <label for='job_description'>Description</label>
                        <textarea rows='10' id='job_description' placeholder='Use text or markdown for the job description' onChange={(evt) => {setFormJobDescription(evt.target.value)}}></textarea>
                    </div>
                    <div className='job-details-input'>
                        <label for='job_salary'>Salary</label>
                        <p>Annual pay before tax, with no commas or decimal points</p>
                        <input id='job_slary' onChange={(evt) => {setFormJobSalary(evt.target.value)}}></input>
                    </div>
                    <div className='job-details-input'>
                        <input type='checkbox' id='job-remote' onChange={(evt) => {setFormJobRemote(evt.target.value)}}></input>
                        <label for='job-remote'>Remote</label>
                        <p>Only check if the role is fully remote only</p>
                    </div>
                    <div className='job-details-input'>
                        <label for='job_contact-email'>Contact email</label>
                        <input id='job_contact-email' onChange={(evt) => {setFormJobContactEmail(evt.target.value)}}></input>
                    </div>
                    <div className='job-details-input'>
                        <label for='job_post-link'>Link to job post</label>
                        <input id='job_post-link' onChange={(evt) => {setFormJobPostLink(evt.target.value)}}></input>
                    </div>
                    <div className='job-details-input'>
                        <label for='job_closing-date'>Closing date</label>
                        <p>In the format dd/mm/yyy</p>
                        <input id='job_closing-date' onChange={(evt) => {setFormJobClosingDate(evt.target.value)}}></input>
                    </div>
                </section>

                <section className='company-details-section'>
                    <h3>Company details</h3>
                    <div className='job-details-input'>
                        <label for='company-name'>Name</label>
                        <input placeholder='e.g. codebar' id='company-name' onChange={(evt) => {setFormJobCompanyName(evt.target.value)}}></input>
                    </div>

                    <div className='job-details-input'>
                        <label for='company-website'>Website</label>
                        <input placeholder='e.g. https://codebar.io' id='company-website' onChange={(evt) => {setFormJobCompanyWebsite(evt.target.value)}}></input>
                    </div>

                    <div className='job-details-input'>
                        <label for='company-location'>Location</label>
                        <input placeholder='e.g. London or Berlin' id='company-location' onChange={(evt) => {setFormJobCompanyLocation(evt.target.value)}}></input>
                    </div>
                </section>

                <button onClick={handleFormSubmitButton}>Submit job for approval</button>
            </form>
        </section>
    );
};

export default SumbitJobPage;