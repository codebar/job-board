import { useLocation } from "react-router";
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignIn from "../SignIn";
import BeforePostCheckList from "../BeforePostChecklist";
import * as ROUTES from '../../constants/routes.js';

const EditJob = ({updateJobPost, currentUser}) => {

    const data = useLocation();
    const job = data.state.job;
    

    const [validated, setValidated] = useState(false);

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

    

    

    const getJobDataFromPreview = () => {
        if (data.state?.previewJob) {
            const jobTitle = document.getElementById('job-title');
            jobTitle.value = data.state.previewJob.job_title;
            setFormJobTitle(data.state.previewJob.job_title);

            const jobDescription = document.getElementById('job-description');
            jobDescription.value = data.state.previewJob.job_description;
            setFormJobDescription(data.state.previewJob.job_description);

            const jobSalary = document.getElementById('job-salary');
            jobSalary.value = data.state.previewJob.salary;
            setFormJobSalary(data.state.previewJob.salary);

            const jobRemoteCheck = document.getElementById('job-remote');
            if (data.state.previewJob.remote === true) {
                setFormJobRemote(true);
                jobRemoteCheck.checked = 'true'};
            
            const jobContactName = document.getElementById('job-contact-name');
            jobContactName.value = data.state.previewJob.contact_name;
            setFormJobContactName(data.state.previewJob.contact_name);

            const jobContactEmail = document.getElementById('job-contact-email');
            jobContactEmail.value = data.state.previewJob.contact_email;
            setFormJobContactEmail(data.state.previewJob.contact_email);

            const jobPostLink = document.getElementById('job-post-link');
            jobPostLink.value = data.state.previewJob.job_post_link;
            setFormJobPostLink(data.state.previewJob.job_post_link);
            
            const jobClosingDate = document.getElementById('job-closing-date');
            jobClosingDate.value = data.state.previewJob.closing_date;
            setFormJobClosingDate(data.state.previewJob.closing_date);

            const jobCompanyName = document.getElementById('company-name');
            jobCompanyName.value = data.state.previewJob.company_name;
            setFormJobCompanyName(data.state.previewJob.company_name);

            const jobCompanyWebsite = document.getElementById('company-website');
            jobCompanyWebsite.value = data.state.previewJob.company_url;
            setFormJobCompanyWebsite(data.state.previewJob.company_url);

            const jobCompanyLocation = document.getElementById('company-location');
            jobCompanyLocation.value = data.state.previewJob.company_location;
            setFormJobCompanyLocation(data.state.previewJob.company_location);

            const jobCompanyAddress = document.getElementById('company-address');
            jobCompanyAddress.value = data.state.previewJob.company_address;
            setFormJobCompanyAddress(data.state.previewJob.company_address);

            const jobCompanyPostcode = document.getElementById('company-postcode');
            jobCompanyPostcode.value = data.state.previewJob.company_postcode;
            setFormJobCompanyPostcode(data.state.previewJob.company_postcode);


        };
    };

    const getJobDataToEdit = () => {
        if (data.state?.job) {
            const jobTitle = document.getElementById('job-title');
            jobTitle.value = job.job_title;
            setFormJobTitle(job.job_title);

            const jobDescription = document.getElementById('job-description');
            jobDescription.value = job.job_description;
            setFormJobDescription(job.job_description);

            const jobSalary = document.getElementById('job-salary');
            jobSalary.value = job.salary;
            setFormJobSalary(job.salary);

            const jobRemoteCheck = document.getElementById('job-remote');
            if (job.remote === true) {
                setFormJobRemote(true);
                jobRemoteCheck.checked = 'true'};
            
            const jobContactName = document.getElementById('job-contact-name');
            jobContactName.value = job.contact_name;
            setFormJobContactName(job.contact_name);

            const jobContactEmail = document.getElementById('job-contact-email');
            jobContactEmail.value = job.contact_email;
            setFormJobContactEmail(job.contact_email);

            const jobPostLink = document.getElementById('job-post-link');
            jobPostLink.value = job.job_post_link;
            setFormJobPostLink(job.job_post_link);
            
            const jobClosingDate = document.getElementById('job-closing-date');
            jobClosingDate.value = job.closing_date;
            setFormJobClosingDate(job.closing_date);

            const jobCompanyName = document.getElementById('company-name');
            jobCompanyName.value = job.company_name;
            setFormJobCompanyName(job.company_name);

            const jobCompanyWebsite = document.getElementById('company-website');
            jobCompanyWebsite.value = job.company_url;
            setFormJobCompanyWebsite(job.company_url);

            const jobCompanyLocation = document.getElementById('company-location');
            jobCompanyLocation.value = job.company_location;
            setFormJobCompanyLocation(job.company_location);

            const jobCompanyAddress = document.getElementById('company-address');
            jobCompanyAddress.value = job.company_address;
            setFormJobCompanyAddress(job.company_address);

            const jobCompanyPostcode = document.getElementById('company-postcode');
            jobCompanyPostcode.value = job.company_postcode;
            setFormJobCompanyPostcode(job.company_postcode);

        };
    };

    useEffect(() => {
        getJobDataFromPreview();
        getJobDataToEdit();
    }, []);

    const handleJobPostSubmitForm = (evt) => {
        const form = evt.currentTarget;
        if (form.checkValidity() === false) {
            evt.preventDefault();
            evt.stopPropagation();
            setValidated(true);
            return;
        }

        setValidated(true);

        
        updateJobPost(
            job.id,
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
        <div className="container">
            {currentUser?
                <div>
                    <h2>Edit your job</h2>
                    <p class="alert alert-primary fw-bold">You will need to make the payment of £50 before the job can be approved. <a href="https://buy.stripe.com/fZe5kAeDA5lY6ti5kk">Pay here</a>.</p>
                    <hr />
                    <div className="row mt-4">
                        <div className="col-md-6 col-sm-12 order-md-last">
                            <BeforePostCheckList></BeforePostCheckList>
                        </div>
                        <div className="container col-md-6 col-sm-12">
                            <Form noValidate validated={validated} className='job-post-form'>
                                <div className="border rounded p-4">
                                    <section className='job-details-section'>
                                        <h3>Job post details</h3>
                                        <Form.Group className="mb-3" controlId="job-title">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text" required placeholder="e.g. Internship" onChange={(evt) => {setFormJobTitle(evt.target.value)}}></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a job title
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="job-description">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control as='textarea' rows={10} required placeholder='Use text or markdown for the job description' onChange={(evt) => {setFormJobDescription(evt.target.value)}}></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a job description
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="job-salary">
                                            <Form.Label>Salary</Form.Label>
                                            <Form.Control type='text' required onChange={(evt) => {setFormJobSalary(evt.target.value)}}></Form.Control>
                                            <Form.Text>
                                                Annual pay before tax, with no commas or decimal points
                                            </Form.Text>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a job salary
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="job-remote">
                                            <Form.Check type='checkbox' label="Remote" defaultChecked = {formJobRemote} onChange={() => {setFormJobRemote(!formJobRemote)}}></Form.Check>
                                            <Form.Text>
                                                Only check if the role is fully remote only
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="job-contact-name">
                                            <Form.Label>Contact name</Form.Label>
                                            <Form.Control type='text' required onChange={(evt) => {setFormJobContactName(evt.target.value)}}></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a contact name
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="job-contact-email">
                                            <Form.Label>Contact email</Form.Label>
                                            <Form.Control type='text' required onChange={(evt) => {setFormJobContactEmail(evt.target.value)}}></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a contact email
                                            </Form.Control.Feedback>
                                        </Form.Group>


                                        <Form.Group className="mb-3" controlId="job-post-link">
                                            <Form.Label>Link to job post</Form.Label>
                                            <Form.Control type='text' required onChange={(evt) => {setFormJobPostLink(evt.target.value)}}></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a link to the job application
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="job-closing-date">
                                            <Form.Label>Closing date</Form.Label>
                                            <Form.Control type='text' required onChange={(evt) => {setFormJobClosingDate(evt.target.value)}}></Form.Control>
                                            <Form.Text>
                                                In the format dd/mm/yyy
                                            </Form.Text>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a closing date for the job advert
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                    </section>
                                    <section className='company-details-section'>
                                        <h3>Company details</h3>
                                        <Form.Group className="mb-3" controlId="company-name">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" required placeholder="e.g. codebar" onChange={(evt) => {setFormJobCompanyName(evt.target.value)}}></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide the company name
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="company-website">
                                            <Form.Label>Website</Form.Label>
                                            <Form.Control type="text" required placeholder="e.g. https://www.codebar.io" onChange={(evt) => {setFormJobCompanyWebsite(evt.target.value)}}></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a URL to the company website
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="company-location">
                                            <Form.Label>Location</Form.Label>
                                            <Form.Control type="text" required placeholder="e.g. London or Berlin" onChange={(evt) => {setFormJobCompanyLocation(evt.target.value)}}></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide the location of the company
                                            </Form.Control.Feedback>
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
                                </div>

                                <div className="my-4">
                                    
                                    <Link to={{ pathname: ROUTES.MY_JOBS}}>
                                        <Button onClick={handleJobPostSubmitForm} className='button bold' variant="primary" type="submit">Re-submit job for approval</Button>
                                    </Link>
                                </div>
                            </Form>
                        </div>

                    </div>
                </div>
                :
                <div>
                    <h3>You need to log in to edit a job</h3>
                    <SignIn></SignIn>
                </div>
            }
        </div>
    );
};

export default EditJob;