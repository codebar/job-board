import { useState, useEffect } from 'react';

const MyJobsPage = ({currentUser, jobs}) => {

    const [currentUserJobs, setCurrentUserJobs] = useState([]);

    useEffect(() => {
        
        const currentUserJobs = jobs.filter(job => job.creator_id == currentUser.uid);
        setCurrentUserJobs(currentUserJobs)
    }, [currentUser, jobs]);

    return (
        <div>
            {currentUserJobs.length > 0?
                <UserJobsPage></UserJobsPage>    
        :
                <NoJobsPage></NoJobsPage> }
        </div>
    );
};



const UserJobsPage = () => {
    return (
        <div>
            Your jobs
        </div>
    );
};


const NoJobsPage = () => {
    return (
        <main>
            <section className="job-posting-info">
                <h2>Reach out to our community of 9833 junior developers</h2>
                <p>Our aim is to be the one stop shop for junior developer roles. All jobs featured on our job board must fall under the following three categories; paid internships, apprenticeships or junior developer roles. Additionally, jobs must not require previous experience or a degree and must be paid positions. Each job that is submitted will be approved by the codebar team before appearing on the job board.</p>
                <div className="job-post-costs-section">
                    <p>For a flat fee of £50 your post will be:</p>
                    <ul>
                        <li>shown on the job board for 30 days</li>
                        <li>promoted to our Slack community of 5500 members</li>
                        <li>promoted to our 8600 Twitter followers</li>
                    </ul>
                </div>
                <button>Post a job</button>
            </section>
            <section className="quote-section">
                <p>Within 2 days of posting an ad on the codebar job board, we had dozens of high quality applications and we made an offer to a candidate within 2 weeks. There are a lot of talented interns and junior developers; posting on the codebar job board is a great way to reach them.</p>
                <p>Bruno Girin, CTO, Imby</p>
            </section>
        </main>
    );
};

export default MyJobsPage;