import JobSummary from "../JobSummary";
import NoJobs from "../NoJobs";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Loader from "./loader";


import * as ROUTES from '../../constants/routes.js'

import './index.css';

const LandingPage = ({ jobs, currentUser, isLoading }) => {

    const getApprovedCurrentJobs = jobs.filter((job) => {
        return job.approved && new Date(job.expiry_date) > new Date();
    });

    const getJobSummaries = getApprovedCurrentJobs.map((job) => {
        return <JobSummary job={job} key={job.id} currentUser={currentUser}></JobSummary>
    });

    const pluralisedMessage = getApprovedCurrentJobs.length === 1
      ? 'is 1 job'
      : `are ${getApprovedCurrentJobs.length} jobs`;

    return (
        isLoading
        ? <div className="loader-container"><Loader /></div>
        : <div className="container">
            <h1 className="fw-bold mb-4">The codebar Job Board | A job board for junior software engineers</h1>
            <h2 className="mb-3">Reach our community of 18,000+ junior developers</h2>
            <p>Our aim is to be the go to place for junior developer roles. All jobs featured on our job board must fall under the following three categories; paid internships, apprenticeships or junior developer roles. Additionally, jobs must not require previous experience or a degree and must be paid positions. Each job that is submitted will be approved by the codebar team before appearing on the job board.</p>
            <Link to={{
                        pathname: ROUTES.SUBMIT_JOB
                    }}
                    ><Button className='button fw-bold' variant="primary">List a job for free</Button></Link>
            {
            getApprovedCurrentJobs.length === 0 
                ?
                <NoJobs></NoJobs> 
                : 
                <div>
                    <p>There {pluralisedMessage} posted</p>
                </div>
            }   
            <div className="row job-summaries">{getJobSummaries}</div>
        </div>
    );
};

export default LandingPage;
