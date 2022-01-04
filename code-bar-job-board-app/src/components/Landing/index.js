
import JobSummary from "../JobSummary";
import { Link } from "react-router-dom";

import * as ROUTES from '../../constants/routes.js'

const LandingPage = ({jobs, currentUser}) => {

    const getApprovedCurrentJobs = jobs.filter((job) => {
        const jobClosingDate = job.closing_date.split("/");
        const timeStamp = new Date( jobClosingDate[2], jobClosingDate[1] - 1, jobClosingDate[0]);
        return job.approved_status === true && timeStamp > new Date();
    });


    const getJobSummaries = getApprovedCurrentJobs.map((job) => {
            return <JobSummary job={job} key={job.id} currentUser={currentUser}></JobSummary>
        });

   


    return (
        <div className="container">
            <h2 className="bold">Jobs</h2>
            <p>There are {getApprovedCurrentJobs.length} jobs posted</p>
            <p><Link to={{pathname: ROUTES.SUBMIT_JOB}}>Click here</Link> if you would like to post a new job</p>
            <div className="row job-summaries">{getJobSummaries}</div>
        </div>
    );
};

export default LandingPage;