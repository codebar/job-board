import { useLocation } from 'react-router'
import FullJob from '../FullJob';


const JobPage = () => {



    const data = useLocation();
    const job = data.state.job;

    return (
        <FullJob job={job}></FullJob>
    );
};





export default JobPage;
