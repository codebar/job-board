import { useState, useEffect } from 'react';
import * as ROUTES from '../../constants/routes.js'
import { Link } from 'react-router-dom';
import SignIn from '../SignIn';
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
                    <NoJobsPage></NoJobsPage> }
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


const NoJobsPage = () => {
    return (
        <div className="col-10">
            <div className="row mb-4">
                <div className="col">
                    <h2>Reach out to our community of 9833 junior developers</h2>
                    <p>Our aim is to be the one stop shop for junior developer roles. All jobs featured on our job board must fall under the following three categories; paid internships, apprenticeships or junior developer roles. Additionally, jobs must not require previous experience or a degree and must be paid positions. Each job that is submitted will be approved by the codebar team before appearing on the job board.</p>
                    <div className="job-post-costs-section">
                        <p>For a flat fee of £99 your post will be:</p>
                        <ul>
                            <li>Promoted to our Slack community of 10,000 members</li>
                            <li>Promoted to our 9600 Twitter followers</li>
                        </ul>
                    </div>
                    <Link to={{
                        pathname: ROUTES.SUBMIT_JOB
                    }}
                    ><Button className='button fw-bold' variant="primary">Post a job</Button></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 mb-4">
                    <Toast>
                        <Toast.Body>
                            <p>Within 2 days of posting an ad on the codebar job board, we had dozens of high quality applications and we made an offer to a candidate within 2 weeks. There are a lot of talented interns and junior developers; posting on the codebar job board is a great way to reach them.</p>
                            <p>Bruno Girin, CTO, Imby</p>
                        </Toast.Body>
                    </Toast>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <Toast>
                        <Toast.Body>
                            <p>The codebar job board has been amazing. It’s been our best performing job board, and the quality of the applications was awesome. 100% the best £99 we have ever spent.</p>
                            <p>Thomas Ankcorn, NearSt</p>
                        </Toast.Body>
                    </Toast>
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
