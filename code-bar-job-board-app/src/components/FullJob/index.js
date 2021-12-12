


const FullJob = ({job}) => {
    return (
        <div>
            
            <section className='main-job-details-section'>
                <h2>{job.job_title}</h2>
                <p>{job.job_description}</p>
                <h3>Company</h3>
                <p>{job.company_name}</p>
                <p><a href={job.job_post_link}>{job.job_post_link}</a></p>
            </section>
            <section className='job-page-sidebar'>
                <ul>
                    <li className='job-page-sidebar-item'>
                        <h4>Salary</h4>
                        <p>{job.salary}</p>
                    </li>
                    <li className='job-page-sidebar-item'>
                        <h4>Location</h4>
                        <p>{job.company_location}</p>
                    </li>
                    <li className='job-page-sidebar-item'>
                        <h4>Closing date</h4>
                        <p>{job.closing_date}</p>
                    </li>
                    <li className='job-page-sidebar-item'>
                        <h4>Contact email</h4>
                        <p>{job.contact_email}</p>
                    </li>
                    <li className='job-page-sidebar-item'>
                        <h4>Posted by</h4>
                        <p>Hold until user integrated</p>
                    </li>
                    <li className='job-page-sidebar-item'>
                        <h4>Published on</h4>
                        <p>{job.published_date}</p>
                    </li>
                </ul>
                
                
            </section>
            
        </div>
    );
};

export default FullJob;