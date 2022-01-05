import { Form } from 'react-bootstrap';

const JobForm = ({
    setFormJobTitle,
    setFormJobDescription,
    setFormJobSalary,
    setFormJobRemote,
    setFormJobContactName,
    setFormJobContactEmail,
    setFormJobPostLink,
    setFormJobClosingDate,
    setFormJobCompanyName,
    setFormJobCompanyLocation,
    setFormJobCompanyWebsite,
    setFormJobCompanyAddress,
    setFormJobCompanyPostcode,
    formJobRemote
}) => {

    

    return (
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
                    <Form.Control type='date' required onChange={(evt) => {setFormJobClosingDate(new Date(evt.target.value))}}></Form.Control>
                    
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
    );
};

export default JobForm;