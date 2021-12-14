import { useState } from "react";
import { Link } from "react-router-dom";
import BeforePostCheckList from "../BeforePostChecklist/index.js";
import SignIn from "../SignIn/index.js";
import { Form } from 'react-bootstrap';


const SumbitJobPage = ({createJobPost, currentUser}) => {

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


    const handleJobPostSubmitForm = (evt) => {
        evt.preventDefault();
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

    const previewJob = {
        closing_date: formJobClosingDate,
        company_address: formJobCompanyAddress,
        company_location: formJobCompanyLocation,
        company_name: formJobCompanyName,
        company_postcode: formJobCompanyPostcode,
        company_url: formJobCompanyWebsite,
        contact_email: formJobContactEmail,
        contact_name: formJobContactName,
        creator_id: "",
        job_description: formJobDescription,
        job_post_link: formJobPostLink,
        job_title: formJobTitle,
        marketing_opt_in: false,
        published_date: "",
        remote: formJobRemote,
        salary: formJobSalary
    };

    

    return (
        <div>
            {currentUser?
                <div className="container">
                    <section className='job-post-details-section'>
                    
                        <Form className='job-post-form' onSubmit={(evt) => {handleJobPostSubmitForm(evt)}}>
                            <section className='job-details-section'>
                                <h3>Job post details</h3>
                                <Form.Group className="mb-3" controlId="job-title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. Internship" onChange={(evt) => {setFormJobTitle(evt.target.value)}}></Form.Control>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="job-description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as='textarea' rows={10} onChange={(evt) => {setFormJobDescription(evt.target.value)}}></Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="job-salary">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control type='text' onChange={(evt) => {setFormJobSalary(evt.target.value)}}></Form.Control>
                                    <Form.Text>
                                        Annual pay before tax, with no commas or decimal points
                                    </Form.Text>
                                </Form.Group>
                                
                                <div className='job-details-input'>
                                    <input type='checkbox' id='job-remote' defaultChecked = {formJobRemote} onChange={() => {setFormJobRemote(!formJobRemote)}}></input>
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
                            <section className="google-search-section">
                                <p>The information below is only required if you want this job post to be shared with Google Search UK</p>
                                <div className='job-details-input'>
                                    <label htmlFor='company-address'>Address</label>
                                    <input id='company-address' onChange={(evt) => {setFormJobCompanyAddress(evt.target.value)}}></input>
                                </div>
                                <div className='job-details-input'>
                                    <label htmlFor='company-postcode'>Postcode</label>
                                    <input id='company-postcode' onChange={(evt) => {setFormJobCompanyPostcode(evt.target.value)}}></input>
                                </div>
                            </section>
                            <button type='submit'>Submit job for approval</button>
                            <Link
                                to={{
                                    pathname: '/my/jobs/new/preview'
                                    }}
                                    state={{ previewJob }}
                            >
                                        <button>Preview this job</button>
                            </Link>
                    
                        </Form>
                    </section>
                    <BeforePostCheckList></BeforePostCheckList>
                </div>
                :
                <div>
                    <h3>You need to log in to post a job</h3>
                    <SignIn></SignIn>
                </div>
        
            }
        </div>

        

    );
};

export default SumbitJobPage;