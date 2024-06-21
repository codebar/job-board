import { Link } from "react-router-dom";
import { Button, Toast } from 'react-bootstrap';
import * as ROUTES from '../../constants/routes.js'


const NoJobs = () => {
    return (
        <div className="col-10">
            <div className="row mb-4">
                <div className="col">
                    <h2 className="mb-3">Reach out to our community of 18,000+ junior developers</h2>
                    <p>Our aim is to be the go to place for junior developer roles. All jobs featured on our job board must fall under the following three categories; paid internships, apprenticeships or junior developer roles. Additionally, jobs must not require previous experience or a degree and must be paid positions. Each job that is submitted will be approved by the codebar team before appearing on the job board.</p>
                    {/* <div className="job-post-costs-section">
                        <p>You</p>
                        <ul>
                            <li>Promoted to our Slack community of 10,000 members</li>
                            <li>Promoted to our 9600 Twitter followers</li>
                        </ul>
                    </div> */}
                    <Link to={{
                        pathname: ROUTES.SUBMIT_JOB
                    }}
                    ><Button className='button fw-bold' variant="primary">Post a job</Button></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 mb-5">
                    <Toast>
                        <Toast.Body>
                            <p>Using codebar has been the most effective way for us to find high quality and hungry talented junior developers. Given Codebars members are often transitioning from another career, we find they have a level of professional maturity which you don’t often get with juniors. And beyond satisfying our recruiting needs, Codebar is a purposeful charity we like to support and we hope continues to grow and flourish.</p>
                            <p>Chris Hodgson, recdek</p>
                        </Toast.Body>
                    </Toast>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <Toast>
                        <Toast.Body>
                            <p>Within 2 days of posting an ad on the codebar job board, we had dozens of high quality applications and we made an offer to a candidate within 2 weeks. There are a lot of talented interns and junior developers; posting on the codebar job board is a great way to reach them.</p>
                            <p>Bruno Girin, CTO, Imby</p>
                        </Toast.Body>
                    </Toast>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <Toast>
                        <Toast.Body>
                            <p>The codebar job board has been amazing. It’s been our best performing job board, and the quality of the applications was awesome. We 100% recommend!</p>
                            <p>Thomas Ankcorn, NearSt</p>
                        </Toast.Body>
                    </Toast>
                </div>
            </div>
        </div>
    );
};

export default NoJobs;