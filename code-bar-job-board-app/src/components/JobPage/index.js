import { useLocation } from 'react-router'
import FullJob from '../FullJob';


const JobPage = ({currentUser, isAdmin, approveJob, unPublishJob}) => {



    const data = useLocation();
    const job = data.state.job;
    

    return (
        <FullJob job={job} currentUser={currentUser} isAdmin={isAdmin} unPublishJob={unPublishJob} approveJob={approveJob}></FullJob>
    );
};





export default JobPage;
