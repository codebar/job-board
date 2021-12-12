import FullJob from "../FullJob";
import { useLocation } from "react-router";


const JobPreview = () => {

    const data = useLocation();
    const previewJob = data.state.previewJob;

    return (
       <div>
           <h2>Preview of Job</h2>
           <FullJob job={previewJob}></FullJob>
       </div>
    );
};

export default JobPreview;