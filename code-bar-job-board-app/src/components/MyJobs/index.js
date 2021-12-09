import { useState, useEffect } from 'react';

const MyJobsPage = ({currentUser, jobs}) => {

    const [currentUserJobs, setCurrentUserJobs] = useState([]);

    useEffect(() => {
        
        const currentUserJobs = jobs.filter(job => job.creator_id == currentUser.uid);
        setCurrentUserJobs(currentUserJobs)
    }, [currentUser, jobs]);

    return (
        <div>
            <NoJobsPage></NoJobsPage>
        </div>
    );
};

const NoJobsPage = () => {
    return (
        <div>No Jobs</div>
    );
};

export default MyJobsPage;