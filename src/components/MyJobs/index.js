import { useState, useEffect } from 'react';
import * as ROUTES from '../../constants/routes.js'
import { Link } from 'react-router-dom';
import SignIn from '../SignIn';
import NoJobs from "../NoJobs";
import { Button, Toast, Badge } from 'react-bootstrap';



const MyJobsPage = ({currentUser, jobs, logIn}) => {

    const [currentUserJobs, setCurrentUserJobs] = useState([]);

    useEffect(() => {
        if (currentUser) {
            const currentUserJobs = jobs.filter(job => job.created_by_id === currentUser.uid);
            setCurrentUserJobs(currentUserJobs)
        }
    }, [currentUser, jobs]);

    return (

        <div className="container">
            {currentUser?
            <div className="row justify-content-center">
                {currentUserJobs.length > 0?
                    <div className="col-10">
                        <div className="row border-bottom border-dark">
                            <div className="col-2"><p className="fs-5 fw-bold mb-2">Job title</p></div>
                            <div className="col-2"><p className="fs-5 fw-bold mb-2">Company</p></div>
                            <div className="col-2"><p className="fs-5 fw-bold mb-2">Location</p></div>
                            <div className="col-2"><p className="fs-5 fw-bold mb-2">Published on</p></div>
                            <div className="col-2"><p className="fs-5 fw-bold mb-2">Expires on</p></div>
                            <div className="col-2"><p className="fs-5 fw-bold mb-2">Status</p></div>
                        </div>
                        <UserJobsPage currentUser={currentUser} currentUserJobs={currentUserJobs}></UserJobsPage>
                    </div>
            :
                    <NoJobs></NoJobs> }
            </div> :
            <NotSignedInJobsPage logIn={logIn}></NotSignedInJobsPage> }
        </div>
    );
};



const UserJobsPage = ({currentUserJobs}) => {

    const listOfUserJobs = currentUserJobs.map((job) => {
        return  <div className='row flex mt-3 border-bottom border-dark' key={job.id}>
                    <div className="col-2">
                        <Link
                            to={{
                            pathname: `/jobs/${job.id}`
                            }}
                             >
                            <p>{job.title}</p>
                        </Link>
                    </div>
                    <div className="col-2"><p>{job.company}</p></div>
                    <div className="col-2">{job.remote? <p>Remote</p> : <p>{job.location}</p>}</div>
                    <div className="col-2"><p>{job.published_on}</p></div>
                    <div className="col-2">
                        { new Date(job.expiry_date).getTime() > 0 ?
                        <p>{job.expiry_date}</p>
                        : <p>Invalid Date</p> }
                    </div>
                    <div className="col-2">
                        {new Date(job.expiry_date) > new Date() && job.approved ? (
                            <Badge bg="success">Live</Badge>
                            ) : new Date(job.expiry_date) > new Date() && !job.approved ? (
                            <Badge bg="warning">Awaiting Approval</Badge>
                            ) : new Date(job.expiry_date) > new Date() ? (
                            <Badge bg="secondary">Expired</Badge>
                            ) : (
                            <Badge bg="secondary">Expired</Badge>
                        )}
                    </div>
                </div>
    });

    return (
        <div className="col">
            {listOfUserJobs}
            <div className="row my-4">
                <div className="col">
                    <Link to={{pathname: ROUTES.SUBMIT_JOB}}>
                        <Button className='button fw-bold' variant="primary">Post a new job</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const NotSignedInJobsPage = ({logIn}) => {
    return (
        <div>
            <h3>You need to log in to view your jobs</h3>
            <SignIn logIn={logIn}></SignIn>
        </div>
    );
};

export default MyJobsPage;
