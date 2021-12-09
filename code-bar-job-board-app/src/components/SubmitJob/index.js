import { useState } from "react";

const SumbitJobPage = ({createJobPost}) => {

    const [formJobTitle, setFormJobTitle] = useState("");
    const [formJobDescription, setFormJobDescription] = useState("");
    const [formJobSalary, setFormJobSalary] = useState("");
    const [formJobRemote, setFormJobRemote] = useState(false);
    const [formJobContactName, setFormJobContactName] = useState("");
    const [formJobContactEmail, setFormJobContactEmail] = useState("");
    const [formJobPostLink, setFormJobPostLink] = useState("");
    const [formJobClosingDate, setFormJobClosingDate] = useState("");
    const [formJobCompanyName, setFormJobCompanyName] = useState("");
    const [formJobCompanyLocation, setFormJobCompanyLocation] = useState("");
    const [formJobCompanyWebsite, setFormJobCompanyWebsite] = useState("");
    const [formJobCompanyAddress, setFormJobCompanyAddress] = useState("");
    const [formJobCompanyPostcode, setFormJobCompanyPostcode] = useState("");


    const handleFormSubmitButton = () => {
        console.log('submit');
        createJobPost(
            
            formJobTitle,
            formJobDescription,
            formJobSalary,
            formJobRemote,
            formJobContactName,
            formJobContactEmail,
            formJobPostLink,
            formJobClosingDate,
            formJobCompanyName,
            formJobCompanyLocation,
            formJobCompanyWebsite,
            formJobCompanyAddress,
            formJobCompanyPostcode
            );
    };

    return (
        <section className='job-post-details-section'>
            
            <form className='job-post-form'>
                <section className='job-details-section'>
                    <h3>Job post details</h3>
                    <div className='job-details-input'>
                        <label htmlFor='job_title'>Title</label>
                        <input id='job_title' placeholder='e.g. Internship' onChange={(evt) => {setFormJobTitle(evt.target.value)}}></input>
                    </div>
                    <div className='job-details-input'>
                        <label htmlFor='job_description'>Description</label>
                        <textarea rows='10' id='job_description' placeholder='Use text or markdown for the job description' onChange={(evt) => {setFormJobDescription(evt.target.value)}}></textarea>
                    </div>
                    <div className='job-details-input'>
                        <label htmlFor='job_salary'>Salary</label>
                        <p>Annual pay before tax, with no commas or decimal points</p>
                        <input id='job_slary' onChange={(evt) => {setFormJobSalary(evt.target.value)}}></input>
                    </div>
                    <div className='job-details-input'>
                        <input type='checkbox' id='job-remote' onChange={(evt) => {setFormJobRemote(evt.target.value)}}></input>
                        <label htmlFor='job-remote'>Remote</label>
                        <p>Only check if the role is fully remote only</p>
                    </div>
                    <div className='job-details-input'>
                        <label htmlFor='job_contact-name'>Contact name</label>
                        <input id='job_contact-name' onChange={(evt) => {setFormJobContactName(evt.target.value)}}></input>
                    </div>
                    <div className='job-details-input'>
                        <label htmlFor='job_contact-email'>Contact email</label>
                        <input id='job_contact-email' onChange={(evt) => {setFormJobContactEmail(evt.target.value)}}></input>
                    </div>
                    <div className='job-details-input'>
                        <label htmlFor='job_post-link'>Link to job post</label>
                        <input id='job_post-link' onChange={(evt) => {setFormJobPostLink(evt.target.value)}}></input>
                    </div>
                    <div className='job-details-input'>
                        <label htmlFor='job_closing-date'>Closing date</label>
                        <p>In the format dd/mm/yyy</p>
                        <input id='job_closing-date' onChange={(evt) => {setFormJobClosingDate(evt.target.value)}}></input>
                    </div>
                </section>

                <section className='company-details-section'>
                    <h3>Company details</h3>
                    <div className='job-details-input'>
                        <label htmlFor='company-name'>Name</label>
                        <input placeholder='e.g. codebar' id='company-name' onChange={(evt) => {setFormJobCompanyName(evt.target.value)}}></input>
                    </div>

                    <div className='job-details-input'>
                        <label htmlFor='company-website'>Website</label>
                        <input placeholder='e.g. https://codebar.io' id='company-website' onChange={(evt) => {setFormJobCompanyWebsite(evt.target.value)}}></input>
                    </div>

                    <div className='job-details-input'>
                        <label htmlFor='company-location'>Location</label>
                        <input placeholder='e.g. London or Berlin' id='company-location' onChange={(evt) => {setFormJobCompanyLocation(evt.target.value)}}></input>
                    </div>
                </section>

                <section>
                    <div className='job-details-input'>
                        <label htmlFor='company-address'>Address</label>
                        <input id='company-address' onChange={(evt) => {setFormJobCompanyAddress(evt.target.value)}}></input>
                    </div>

                    <div className='job-details-input'>
                        <label htmlFor='company-postcode'>Postcode</label>
                        <input id='company-postcode' onChange={(evt) => {setFormJobCompanyPostcode(evt.target.value)}}></input>
                    </div>
                </section>

                <button onClick={handleFormSubmitButton}>Submit job for approval</button>
            </form>
        </section>
    );
};

export default SumbitJobPage;