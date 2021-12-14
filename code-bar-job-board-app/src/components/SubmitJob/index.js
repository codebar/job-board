import { useState } from "react";
import { Link } from "react-router-dom";
import BeforePostCheckList from "../BeforePostChecklist/index.js";
import SignIn from "../SignIn/index.js";
import { Form, Button } from 'react-bootstrap';


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
                                    <Form.Control as='textarea' rows={10} placeholder='Use text or markdown for the job description' onChange={(evt) => {setFormJobDescription(evt.target.value)}}></Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="job-salary">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control type='text' onChange={(evt) => {setFormJobSalary(evt.target.value)}}></Form.Control>
                                    <Form.Text>
                                        Annual pay before tax, with no commas or decimal points
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="job-remote">
                                    <Form.Check type='checkbox' label="Remote" defaultChecked = {formJobRemote} onChange={() => {setFormJobRemote(!formJobRemote)}}></Form.Check>
                                    <Form.Text>
                                        Only check if the role is fully remote only
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="job-contact-name">
                                    <Form.Label>Contact name</Form.Label>
                                    <Form.Control type='text' onChange={(evt) => {setFormJobContactName(evt.target.value)}}></Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="job-contact-email">
                                    <Form.Label>Contact email</Form.Label>
                                    <Form.Control type='text' onChange={(evt) => {setFormJobContactEmail(evt.target.value)}}></Form.Control>
                                </Form.Group>
                                
                                
                                <Form.Group className="mb-3" controlId="job-post-link">
                                    <Form.Label>Link to job post</Form.Label>
                                    <Form.Control type='text' onChange={(evt) => {setFormJobPostLink(evt.target.value)}}></Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="job-closing-date">
                                    <Form.Label>Closing date</Form.Label>
                                    <Form.Control type='text' onChange={(evt) => {setFormJobClosingDate(evt.target.value)}}></Form.Control>
                                    <Form.Text>
                                        In the format dd/mm/yyy
                                    </Form.Text>
                                </Form.Group>
                        
                            </section>

                            <section className='company-details-section'>
                                <h3>Company details</h3>

                                <Form.Group className="mb-3" controlId="company-name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. codebar" onChange={(evt) => {setFormJobCompanyName(evt.target.value)}}></Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="company-website">
                                    <Form.Label>Website</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. https://www.codebar.io" onChange={(evt) => {setFormJobCompanyWebsite(evt.target.value)}}></Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="company-location">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. London or Berlin" onChange={(evt) => {setFormJobCompanyLocation(evt.target.value)}}></Form.Control>
                                </Form.Group>

                            </section>
                            <section className="google-search-section">
                                <p>The information below is only required if you want this job post to be shared with Google Search UK</p>

                                <Form.Group className="mb-3" controlId="company-address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" onChange={(evt) => {setFormJobCompanyAddress(evt.target.value)}}></Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="company-postcode">
                                    <Form.Label>Postcode</Form.Label>
                                    <Form.Control type="text" onChange={(evt) => {setFormJobCompanyPostcode(evt.target.value)}}></Form.Control>
                                </Form.Group>
                                
                                
                            </section>
                            
                            <Link
                                to={{
                                    pathname: '/my/jobs/new/preview'
                                    }}
                                    state={{ previewJob }}
                            >
                                        <Button className='button' variant="secondary">Preview this job post</Button>
                            </Link>

                            <Button className='button' variant="primary" type="submit">Submit job for approval</Button>
                    
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