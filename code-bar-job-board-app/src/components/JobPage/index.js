import { useLocation } from 'react-router'
import FullJob from '../FullJob';


const JobPage = ({currentUser, isAdmin}) => {



    const data = useLocation();
    const job = data.state.job;
    

    return (
        <FullJob job={job} currentUser={currentUser} isAdmin={isAdmin}></FullJob>
    );
};





export default JobPage;
