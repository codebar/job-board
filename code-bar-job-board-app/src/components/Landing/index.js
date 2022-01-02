
import JobSummary from "../JobSummary";
import { Link } from "react-router-dom";

import * as ROUTES from '../../constants/routes.js'

const LandingPage = ({jobs, currentUser}) => {

    const getApprovedJobs = jobs.filter((job) => {
        return job.approved_status === true;
    });

    const getJobSummaries = getApprovedJobs.map((job) => {
            return <JobSummary job={job} key={job.id} currentUser={currentUser}></JobSummary>
        });

   


    return (
        <div className="container">
            <h2 className="bold">Jobs</h2>
            <p>There are {getApprovedJobs.length} jobs posted</p>
            <p><Link to={{pathname: ROUTES.SUBMIT_JOB}}>Click here</Link> if you would like to post a new job</p>
            <div className="row job-summaries">{getJobSummaries}</div>
        </div>
    );
};

export default LandingPage;