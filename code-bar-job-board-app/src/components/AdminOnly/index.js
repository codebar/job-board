
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AdminOnlyDraftJobs = ({jobs}) => {

    const [draftJobs, setDraftJobs] = useState([]);

    useEffect(() => {
    
        const draftJobs = jobs.filter(job => job.approved_status === false);
        setDraftJobs(draftJobs);
        
    }, [jobs]);

    

    const listOfDraftJobs = draftJobs.map((job) => {
        return  <div key={job.id}>
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
                        <div className="col-2"><p>{job.closing_date}</p></div>
                        
                        <div className="col-2">
                            { new Date(job.closing_date.split("/")[2], job.closing_date.split("/")[1] - 1, job.closing_date.split("/")[0]) < new Date()? <Badge bg="secondary" className="fs-6">Expired</Badge> : 
                            job.approved_status ? <Badge bg="success" className="fs-6">Live</Badge> : <Badge bg="primary" className="fs-6">Awaiting Approval</Badge>
                            }
                    
                        </div>
                        <div className="col-2">
                            <Link to={{ 
                                pathname: `/jobs/${job.id}`}}
                                state={{ job }}>
                                    Review
                            </Link>
                        </div>
    
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
                    <div className="col-2"><p className="fs-5 bold mb-2">Closing date</p></div>
                    <div className="col-2"><p className="fs-5 bold mb-2">Status</p></div>
                    <div className="col-2"></div>
                </div>
            </div>
            <div className="col-10">
                {listOfDraftJobs}
                
            </div>
        </div>
    );
};

export default AdminOnlyDraftJobs;