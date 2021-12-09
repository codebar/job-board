import { useState, useEffect } from 'react';

const MyJobsPage = ({currentUser, jobs}) => {

    const [currentUserJobs, setCurrentUserJobs] = useState([]);

    useEffect(() => {
        
        const currentUserJobs = jobs.filter(job => job.creator_id == currentUser.uid);
        setCurrentUserJobs(currentUserJobs)
    }, [currentUser, jobs]);

    return (
        <div>
            {currentUserJobs.length > 0?
                <UserJobsPage></UserJobsPage>    
        :
            <NoJobsPage></NoJobsPage> }
        </div>
    );
};

const NoJobsPage = () => {
    return (
        <div>No Jobs</div>
    );
};

const UserJobsPage = () => {
    return (
        <div>
            Your jobs
        </div>
    );
};

export default MyJobsPage;