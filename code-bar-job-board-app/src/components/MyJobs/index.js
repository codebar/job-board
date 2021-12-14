import { useState, useEffect } from 'react';
import * as ROUTES from '../../constants/routes.js'
import { Link } from 'react-router-dom';
import SignIn from '../SignIn';
import { Button } from 'react-bootstrap';


const MyJobsPage = ({currentUser, jobs}) => {

    const [currentUserJobs, setCurrentUserJobs] = useState([]);

    useEffect(() => {
        if (currentUser) {
            const currentUserJobs = jobs.filter(job => job.creator_id === currentUser.uid);
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
                            <div className="col-2"><p className="fs-5 bold mb-2">Job title</p></div>
                            <div className="col-2"><p className="fs-5 bold mb-2">Company</p></div>
                            <div className="col-2"><p className="fs-5 bold mb-2">Location</p></div>
                            <div className="col-2"><p className="fs-5 bold mb-2">Published on</p></div>
                            <div className="col-2"><p className="fs-5 bold mb-2">Expires on</p></div>
                            <div className="col-2"><p className="fs-5 bold mb-2">Status</p></div>
                        </div>
                        <UserJobsPage currentUserJobs={currentUserJobs}></UserJobsPage>
                    </div>
            :
                    <NoJobsPage></NoJobsPage> }
            </div> :
            <NotSignedInJobsPage></NotSignedInJobsPage> }
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
                            state={{ job }} >
                            <p>{job.job_title}</p>
                        </Link>
                    </div>
                    <div className="col-2"><p>{job.company_name}</p></div>
                    <div className="col-2">{job.remote? <p>Remote</p> : <p>{job.company_location}</p>}</div>
                    <div className="col-2"><p>{job.published_date}</p></div>
                    <div className="col-2"><p>{job.closing_date}</p></div>
                    <div className="col-2"><p>Status?</p></div>
                </div>
    });

    return (
        <div className="col">
            {listOfUserJobs}
            <div className="row my-4">
                <div className="col">
                    <Link to={{pathname: ROUTES.SUBMIT_JOB}}>
                        <Button className='button' variant="primary">Post a new job</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


const NoJobsPage = () => {
    return (
        <main>
            <section className="job-posting-info">
                <h2>Reach out to our community of 9833 junior developers</h2>
                <p>Our aim is to be the one stop shop for junior developer roles. All jobs featured on our job board must fall under the following three categories; paid internships, apprenticeships or junior developer roles. Additionally, jobs must not require previous experience or a degree and must be paid positions. Each job that is submitted will be approved by the codebar team before appearing on the job board.</p>
                <div className="job-post-costs-section">
                    <p>For a flat fee of £50 your post will be:</p>
                    <ul>
                        <li>shown on the job board for 30 days</li>
                        <li>promoted to our Slack community of 5500 members</li>
                        <li>promoted to our 8600 Twitter followers</li>
                    </ul>
                </div>
                <Link to={{
                    pathname: ROUTES.SUBMIT_JOB
                }}
                ><button>Post a job</button></Link>
            </section>
            <section className="quote-section">
                <p>Within 2 days of posting an ad on the codebar job board, we had dozens of high quality applications and we made an offer to a candidate within 2 weeks. There are a lot of talented interns and junior developers; posting on the codebar job board is a great way to reach them.</p>
                <p>Bruno Girin, CTO, Imby</p>
            </section>
        </main>
    );
};

const NotSignedInJobsPage = () => {
    return (
        <div>
            You need to sign in to see your jobs
            <SignIn></SignIn>
        </div>
    );
};

export default MyJobsPage;