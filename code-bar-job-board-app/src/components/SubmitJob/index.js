import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeforePostCheckList from "../BeforePostChecklist/index.js";
import SignIn from "../SignIn/index.js";
import { Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router";
import * as ROUTES from '../../constants/routes.js';


const SumbitJobPage = ({createJobPost, currentUser, logIn}) => {
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

    const data = useLocation();
    const navigate = useNavigate();

    

    const getJobDataFromPreview = () => {
        if (data.state) {
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

    useEffect(() => {
        getJobDataFromPreview();
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
        navigate(ROUTES.MY_JOBS);
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
        <div className="container">
            {currentUser?
                <div>
                    <h2>List a new job</h2>
                    <p class="alert alert-primary fw-bold">You will need to make the payment of £50 before the job can be approved. <a href="https://buy.stripe.com/fZe5kAeDA5lY6ti5kk">Pay here</a>.</p>
                    <hr />
                    <div className="row mt-4">
                        <div className="col-md-6 col-sm-12 order-md-last">
                            <BeforePostCheckList></BeforePostCheckList>
                        </div>
                        <div className="container col-md-6 col-sm-12">
                            <Form noValidate validated={validated} className='job-post-form' onSubmit={(evt) => {handleJobPostSubmitForm(evt)}}>
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
                                    <Link
                                        to={{
                                            pathname: '/my/jobs/new/preview'
                                            }}
                                            state={{ previewJob }}
                                    >
                                                <Button className='button fw-bold' variant="secondary">Preview this job post</Button>
                                    </Link>
                                   
                                        <Button className='button fw-bold' variant="primary" type="submit">Submit job for approval</Button>
                                   
                                </div>
                            </Form>
                        </div>

                    </div>
                </div>
                :
                <div>
                    <h3>You need to log in to post a job</h3>
                    <SignIn logIn={logIn}></SignIn>
                </div>
            }
        </div>
    );
};

export default SumbitJobPage;
