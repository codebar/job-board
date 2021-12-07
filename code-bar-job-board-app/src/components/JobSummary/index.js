

const JobSummary = ({job}) => {
    return (
        <div className='job-summary'>
            <h3>{job.job_title}</h3>
            <h4>{job.company_name}, {job.company_location}</h4>
            <p>Salary: {job.salary}</p>
            <p>Published on: {job.published_date}</p>
            <p>Closing date: {job.closing_date}</p>
            <p>Location: {job.company_location}</p>
        </div>
    );
};

export default JobSummary;