import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const FullJob = ({job}) => {
    return (
        <div className="container">
            
            <div className="row">
                <section className='col-8 job-page-main'>
                    <h2>{job.job_title}</h2>
                    <p>{job.job_description}</p>
                    <h3>Company</h3>
                    <p>{job.company_name}</p>
                    <p><a href={job.company_url}>{job.company_url}</a></p>
                </section>
                <section className='col-4 job-page-side-bar'>
                    
                        <div className="job-page-side-bar-item">
                            <p className="bold" >Salary</p>
                            <p>{job.salary}</p>
                        </div>
                        <div className="job-page-side-bar-item">
                            <p className="bold" >Location</p>
                            <p>{job.company_location}</p>
                        </div>
                        <div className="job-page-side-bar-item">
                            <p className="bold" >Closing date</p>
                            <p>{job.closing_date}</p>
                        </div>
                        <div className="job-page-side-bar-item">
                            <p className="bold" >Contact email</p>
                            <p>{job.contact_email}</p>
                        </div>
                        <div className="job-page-side-bar-item">
                            <p className="bold" >Posted by</p>
                            <p>{job.contact_name}</p>
                        </div>
                        <div className="job-page-side-bar-item">
                            <p className="bold" >Published on</p>
                            <p>{job.published_date}</p>
                        </div>
                        <hr />

                        <Link to=''><Button className='button'>Apply for this job</Button></Link>
                
                
                </section>
            </div>
            
        </div>
    );
};

export default FullJob;