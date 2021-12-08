import { useLocation } from 'react-router-dom'


const JobPage = () => {

    const job = useLocation();
    console.log(job);

    return (
        <div>
            Job
        </div>
    );
};

export default JobPage;