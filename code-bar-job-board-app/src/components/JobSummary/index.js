import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes.js'

const JobSummary = ({job}) => {
    return (
        <div className='job-summary'>
            <Link to={ROUTES.JOB}>
                <h3>{job.job_title}</h3>
            </Link>
            <h4>{job.company_name}, {job.company_location}</h4>
            <p>Salary: {job.salary}</p>
            <p>Published on: {job.published_date}</p>
            <p>Closing date: {job.closing_date}</p>
            <p>Location: {job.company_location}</p>
        </div>
    );
};

export default JobSummary;