import * as ROUTES from '../../constants/routes.js';
import { Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AdminOnlyDraftJobs = ({jobs}) => {

    const [draftJobs, setDraftJobs] = useState([]);

    useEffect(() => {
    
        const draftJobs = jobs.filter(job => job.approved_status === false);
        setDraftJobs(draftJobs);
        
    }, [jobs]);

    const listOfDraftJobs = draftJobs.map((job) => {
        return  <div className='container'>
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
                        <div className="col-2">
                            {job.approved_status ? <Badge bg="success" className="fs-6">Live</Badge> : <Badge bg="primary" className="fs-6">In Draft</Badge>}
                        </div>
                    </div>
        </div>
    });

    return (
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
    );
};

export default AdminOnlyDraftJobs;