
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AdminOnlyJobs = ({jobs}) => {

    const [listJobs, setListJobs] = useState([]);

    useEffect(() => {

        const listJobs = jobs.sort(job => job.approved_status ? 1 : -1);
        setListJobs(listJobs);

    }, [jobs]);

    const listOfJobs = listJobs.map((job) => {
        return <div key={job.id}>
            <div className='row mt-3 border-bottom border-dark' key={job.id}>
                <div className="col-3">
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
                    { new Date(job.closing_date.split("/")[2], job.closing_date.split("/")[1] - 1, job.closing_date.split("/")[0]) < new Date()? <Badge bg="secondary">Expired</Badge> : job.approved_status ? <Badge bg="success">Live</Badge> : <Badge bg="primary">Awaiting Approval</Badge>}
                </div>
                <div className="col-1">
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

        <div className='container mb-4'>
            <div className="row">
                <div className="col-12">
                    <div className="row border-bottom border-dark">
                        <div className="col-3"><p className="fs-5 fw-bold mb-2">Job title</p></div>
                        <div className="col-2"><p className="fs-5 fw-bold mb-2">Company</p></div>
                        <div className="col-2"><p className="fs-5 fw-bold mb-2">Location</p></div>
                        <div className="col-2"><p className="fs-5 fw-bold mb-2">Closing date</p></div>
                        <div className="col-2"><p className="fs-5 fw-bold mb-2">Status</p></div>
                        <div className="col-1"></div>
                    </div>
                </div>
                <div className="col-12">
                    {listOfJobs}
                </div>
            </div>
        </div>
    );
};

export default AdminOnlyJobs;
