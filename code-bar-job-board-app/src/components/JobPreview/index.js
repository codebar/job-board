import FullJob from "../FullJob";
import { useLocation } from "react-router";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import * as ROUTES from '../../constants/routes.js';


const JobPreview = () => {

    const data = useLocation();
    const previewJob = data.state.previewJob;
    

    return (
       <div className="container">
           <h2>Preview of Job Post</h2>
          
           <Link
                to={{
                    pathname: ROUTES.SUBMIT_JOB
                    }}
                    state={{ previewJob }}
            >
            <Button>Back to job form</Button></Link>
            <hr />
           <FullJob job={previewJob}></FullJob>
       </div>
    );
};

export default JobPreview;