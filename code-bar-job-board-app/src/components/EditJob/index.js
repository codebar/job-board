import { useLocation, useNavigate } from "react-router";
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import SignIn from "../SignIn";
import JobForm from "../JobForm/JobForm";
import BeforePostCheckList from "../BeforePostChecklist";
import * as ROUTES from '../../constants/routes.js';

const EditJob = ({updateJobPost, currentUser, isAdmin}) => {

    const data = useLocation();
    const job = data.state.job;
    const navigate = useNavigate();
    

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



    const getJobDataToEdit = () => {
        if (data.state?.job) {
            const jobTitle = document.getElementById('job-title');
            jobTitle.value = job.title;
            setFormJobTitle(job.title);

            const jobDescription = document.getElementById('job-description');
            jobDescription.value = job.description;
            setFormJobDescription(job.description);

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
            jobContactEmail.value = job.email;
            setFormJobContactEmail(job.email);

            const jobPostLink = document.getElementById('job-post-link');
            jobPostLink.value = job.link_to_job;
            setFormJobPostLink(job.link_to_job);

            const jobClosingDate = document.getElementById('job-closing-date');
            jobClosingDate.value = new Date(job.expiry_date).toLocaleDateString('en-CA');
            setFormJobClosingDate(job.expiry_date);

            const jobCompanyName = document.getElementById('company-name');
            jobCompanyName.value = job.company;
            setFormJobCompanyName(job.company);

            const jobCompanyWebsite = document.getElementById('company-website');
            jobCompanyWebsite.value = job.company_website;
            setFormJobCompanyWebsite(job.company_website);

            const jobCompanyLocation = document.getElementById('company-location');
            jobCompanyLocation.value = job.location;
            setFormJobCompanyLocation(job.location);

            const jobCompanyAddress = document.getElementById('company-address');
            jobCompanyAddress.value = job.company_address;
            setFormJobCompanyAddress(job.company_address);

            const jobCompanyPostcode = document.getElementById('company-postcode');
            jobCompanyPostcode.value = job.company_postcode;
            setFormJobCompanyPostcode(job.company_postcode);

        };
    };

    useEffect(() => {
        
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
        evt.preventDefault();

        
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

        if (isAdmin) {
            navigate(ROUTES.ADMIN_LIST_JOBS);
        } else {
            navigate(ROUTES.MY_JOBS);
        };
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
                            <Form noValidate validated={validated} className='job-post-form' onSubmit={(evt) => {handleJobPostSubmitForm(evt)}}>
                                
                                <JobForm
                                    setFormJobTitle={setFormJobTitle} 
                                    setFormJobDescription={setFormJobDescription} 
                                    setFormJobSalary={setFormJobSalary} 
                                    setFormJobRemote={setFormJobRemote} 
                                    setFormJobContactName={setFormJobContactName} 
                                    setFormJobContactEmail={setFormJobContactEmail} 
                                    setFormJobPostLink={setFormJobPostLink} 
                                    setFormJobClosingDate={setFormJobClosingDate} 
                                    setFormJobCompanyName={setFormJobCompanyName} 
                                    setFormJobCompanyLocation={setFormJobCompanyLocation} 
                                    setFormJobCompanyWebsite={setFormJobCompanyWebsite} 
                                    setFormJobCompanyAddress={setFormJobCompanyAddress} 
                                    setFormJobCompanyPostcode={setFormJobCompanyPostcode} 
                                    formJobRemote={formJobRemote}
                                ></JobForm>

                                <div className="my-4">
                                    
                                    { isAdmin? 
                                    
                                        <Button className='button bold' variant="primary" type="submit">Save edits</Button>
                                     : 
                                    
                                        <Button className='button bold' variant="primary" type="submit">Re-submit job for approval</Button>
                                    
                                    }
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