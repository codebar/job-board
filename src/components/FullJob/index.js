import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes.js';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";



const FullJob = ({job, currentUser, isAdmin, approveJob, unPublishJob}) => {

    const handleApproveButtonClick = () => {
        approveJob(job);
    };

    const handleUnPublishButtonClick = () => {
        unPublishJob(job);
    };

    const expiryDate = new Date(job.expiry_date).toLocaleDateString();
    const approvedDate = job.published_on && job.published_on !== "" ?
                        (new Date(job.published_on)).getTime() > 0 ?
                        new Date(job.published_on).toLocaleDateString()
                        :
                        job.published_on.substring(0,10)
                        : !job.approved ?
                        "Not published"
                        : null

    return (
        <div className="container">
            <div className="row">

                {(job.approved === false && job.creator_id === currentUser.uid) || isAdmin === true?
                    <Link
                        to={{
                            pathname: `/my/jobs/${job.id}/edit`
                            }}
                        state={{job}}
                    >
                    <Button className='button fw-bold'>Edit this job</Button></Link> : null
                }

                    {isAdmin === true?
                        <div className='admin-info'>
                            {job.approved === false?
                                <Link to={{pathname: ROUTES.ADMIN_LIST_JOBS}}>
                                    <Button onClick={handleApproveButtonClick} className='button fw-bold' variant="success">Approve this job</Button>
                                </Link> :
                                <div>
                                    <Link to={{pathname: ROUTES.ADMIN_LIST_JOBS}}>
                                            <Button onClick={handleUnPublishButtonClick} className='button fw-bold' variant="danger">Un-publish this job</Button>
                                        </Link>
                                    <p className='alert alert-primary mt-2'>This job was approved on {approvedDate}</p>
                                </div>
                            }
                        </div> : null
                    }
            </div>

            <div className="row mb-5">
                <section className='col-lg-9 col-sm-12'>
                    <h2 className="mb-4">{job.title}</h2>

                    <ReactMarkdown remarkPlugins={[remarkGfm]} >{job.description}</ReactMarkdown>



                    <h3 className="mt-4">Company</h3>
                    <p className="mb-0">{job.company}</p>
                    <p><a href={job.company_website} target="_blank" rel="noreferrer">{job.company_website}</a></p>
                </section>
                <section className='col-lg-3 col-sm-6'>
                    <Card>
                        <Card.Body>
                            <div className="p-2 mb-2">
                                <p className="mb-0 fw-bold" >Salary</p>
                                <p className="mb-0">
                                    { job.salary === "0" ? 'No salary information submitted' : '£' + job.salary }
                                </p>
                            </div>
                            <div className="p-2 mb-2">
                                <p className="mb-0 fw-bold" >Location</p>
                                <p className="mb-0">{job.location}</p>
                            </div>
                            <div className="p-2 mb-2">
                                <p className="mb-0 fw-bold" >Closing date</p>
                                { job.closing_date?.seconds? <p className="mb-0">{new Date(job.closing_date.seconds * 1000).toLocaleDateString()}</p>
                                                             : <p className="mb-0">{expiryDate}</p>
                                }
                            </div>
                            <div className="p-2 mb-2">
                                <p className="mb-0 fw-bold" >Contact email</p>
                                <p className="mb-0">{job.email}</p>
                            </div>
                            { job.contact_name ? <div className="p-2 mb-2">
                                <p className="mb-0 fw-bold" >Posted by</p>
                                <p className="mb-0">{job.contact_name}</p>
                            </div> : null }
                        </Card.Body>
                        <Card.Footer>
                            <Button className='button fw-bold w-100'><a className="text-white text-decoration-none" href={job.link_to_job} target='blank'>Apply for this job</a></Button>
                        </Card.Footer>
                    </Card>
                </section>
            </div>

        </div>
    );
};

export default FullJob;
