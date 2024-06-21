import { Toast } from 'react-bootstrap';

const NoJobs = () => {
    return (
        <div className="col-10 mt-4">
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