import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes.js';


const FullJob = ({job, currentUser, isAdmin, approveJob}) => {

    const handleApproveButtonClick = () => {
        approveJob(job.id);
    };

    
    return (
        <div className="container">

            {(job.approved_status === false && job.creator_id === currentUser.uid) || isAdmin === true?
                <Link
                    to={{
                        pathname: ROUTES.EDIT_JOB
                        }}
                    state={{job}}
                >
                <Button className='button'>Edit this job</Button></Link> : null
            }

                {isAdmin === true?
                    <div className='admin-info'>
                        {job.approved_status === false?
                            <Link to={{pathname: ROUTES.ADMIN_DRAFT_JOBS}}>
                                <Button onClick={handleApproveButtonClick} className='button' variant="success">Approve this job</Button>
                            </Link> : 
                            <h5 className='font-weight-bold'>This job was approved on {job.published_date}</h5>
                        }        
                    </div> : null
                }

            <div className="row mb-5">
                <section className='col-lg-8 col-sm-12'>
                    <h2 className="mb-4">{job.job_title}</h2>

                    <p>{job.job_description}</p>
                    <h3 className="mt-4">Company</h3>
                    <p className="mb-0">{job.company_name}</p>
                    <p><a href={job.company_url}>{job.company_url}</a></p>
                </section>
                <section className='col-lg-3 col-sm-6'>
                    <Card>
                        <Card.Body>
                            <div className="p-2 mb-2">
                                <p className="mb-0 bold" >Salary</p>
                                <p className="mb-0">{job.salary}</p>
                            </div>
                            <div className="p-2 mb-2">
                                <p className="mb-0 bold" >Location</p>
                                <p className="mb-0">{job.company_location}</p>
                            </div>
                            <div className="p-2 mb-2">
                                <p className="mb-0 bold" >Closing date</p>
                                <p className="mb-0">{job.closing_date}</p>
                            </div>
                            <div className="p-2 mb-2">
                                <p className="mb-0 bold" >Contact email</p>
                                <p className="mb-0">{job.contact_email}</p>
                            </div>
                            <div className="p-2 mb-2">
                                <p className="mb-0 bold" >Posted by</p>
                                <p className="mb-0">{job.contact_name}</p>
                            </div>
                            <div className="p-2 mb-2">
                                <p className="mb-0 bold" >Published on</p>
                                <p className="mb-0">{job.published_date}</p>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Link to=''><Button className='button bold w-100'>Apply for this job</Button></Link>
                        </Card.Footer>
                    </Card>
                </section>
            </div>

        </div>
    );
};

export default FullJob;
