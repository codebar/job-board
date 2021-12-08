import { useLocation } from 'react-router'


const JobPage = () => {

    const data = useLocation();
    const job = data.state.job;
    console.log(job)

    return (
        <div>
            Job
        </div>
    );
};

export default JobPage;