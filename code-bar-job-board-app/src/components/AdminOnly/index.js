import * as ROUTES from '../../constants/routes.js';
import { Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AdminOnlyDraftJobs = ({jobs, approveJob}) => {

    const [draftJobs, setDraftJobs] = useState([]);

    useEffect(() => {
    
        const draftJobs = jobs.filter(job => job.approved_status === false);
        setDraftJobs(draftJobs);
        
    }, [jobs]);

    const handleApproveButtonClick = (evt) => {
        evt.preventDefault();
        const jobToApproveId = evt.target.value;
        approveJob(jobToApproveId);
        
    };

    const listOfDraftJobs = draftJobs.map((job) => {
        return  <div>
            <div className='row flex mt-3 border-bottom border-dark' key={job.id}>
                        <div className="col-2">
                            <Link
                                to={{
                                pathname: `/jobs/${job.id}`
                                }}
                                state={{ job }} >
                                <p>{job.job_title}</p>
                            </Link>
                        </div>
                        <div className="col-2"><p>{job.company_name}</p></div>
                        <div className="col-2">{job.remote? <p>Remote</p> : <p>{job.company_location}</p>}</div>
                        <div className="col-2"><p>{job.published_date}</p></div>
                        <div className="col-2"><p>{job.closing_date}</p></div>
                        <div className="col-1">
                            {job.approved_status ? <Badge bg="success" className="fs-6">Live</Badge> : <Badge bg="primary" className="fs-6">In Draft</Badge>}
                        </div>
                        <Button value={job.id} onClick={handleApproveButtonClick} className="col-1" variant='secondary'>Approve</Button>
                    </div>
        </div>
    });

    return (
        
        <div className='container'>
            <div className="col-10">
                <div className="row border-bottom border-dark">
                    <div className="col-2"><p className="fs-5 bold mb-2">Job title</p></div>
                    <div className="col-2"><p className="fs-5 bold mb-2">Company</p></div>
                    <div className="col-2"><p className="fs-5 bold mb-2">Location</p></div>
                    <div className="col-2"><p className="fs-5 bold mb-2">Published on</p></div>
                    <div className="col-2"><p className="fs-5 bold mb-2">Expires on</p></div>
                    <div className="col-2"><p className="fs-5 bold mb-2">Status</p></div>
                </div>
            </div>
            <div className="col">
                {listOfDraftJobs}
                <div className="row my-4">
                    <div className="col">
                        <Link to={{pathname: ROUTES.SUBMIT_JOB}}>
                            <Button className='button bold' variant="primary">Post a new job</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOnlyDraftJobs;