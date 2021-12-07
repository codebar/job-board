import JobSummary from "../JobSummary";

const LandingPage = ({jobs}) => {

    const getJobSummaries = jobs.map((job) => {
            return <JobSummary job={job} key={job.id}></JobSummary>
        });


    return (
        <div>
            <h2>Jobs</h2>
            <p>There are {jobs.length} jobs posted</p>
            {getJobSummaries}
        </div>
    );
};

export default LandingPage;