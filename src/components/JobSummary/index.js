import { Link } from 'react-router-dom'



const JobSummary = ({job}) => {

    const expiryDate = new Date(job.expiry_date).toDateString();


    return (
        <div className='job-summary-box col-md-5 col-sm-8 shadow-sm p-3 mb-4 bg-white rounded border'>
            <Link
                to={{
                    pathname: `/jobs/${job.id}`
                }}
                >
                <h3 className="fs-4">{job.title}</h3>
            </Link>
            <h4 className="fs-5 fw-bold mb-2">{job.company}</h4>
            <h4 className="fs-6 fw-bold mb-4">📍 {job.location}</h4>
            <div className='row'>
                <p className='col-6'>Salary:</p>
                <p className='col-6 fw-bold'>
                    { job.salary === "0" ? 'No salary information submitted' : '£' + job.salary }
                </p>
            </div>
            <div className='row'>
                <p className='col-6'>Published on:</p>
                <p className='col-6 fw-bold'>{job.published_on.substring(0,10)}</p>
            </div>
            <div className='row'>
                <p className='col-6'>Closing date:</p>
                <p className='col-6 fw-bold'>{expiryDate}</p>
            </div>
            <div className='row'>
                <p className='col-6'>Location:</p>
                <p className='col-6 fw-bold'>{job.location}</p>
            </div>
        </div>
    );
};

export default JobSummary;
