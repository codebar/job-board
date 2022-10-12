import JobSummary from "../JobSummary";
import { Link } from "react-router-dom";
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
        ? <div className="loader-container">
          <Loader />
        </div>
        : <div className="container">
            <h2 className="fw-bold">Jobs</h2>
            <p>There {pluralisedMessage} posted</p>
            <p><Link to={{pathname: ROUTES.SUBMIT_JOB}}>Click here</Link> if you would like to post a new job</p>
            <div className="row job-summaries">{getJobSummaries}</div>
        </div>
    );
};

export default LandingPage;
