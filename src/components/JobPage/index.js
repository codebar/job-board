import { useEffect, useState } from "react";
import FullJob from "../FullJob";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase-config.js";

const JobPage = ({ currentUser, isAdmin, approveJob, unPublishJob }) => {
  const [job, setJob] = useState({});

  const jobRef = doc(db, "jobs", window.location.href.split("/").pop());

  useEffect(() => {
    const getJob = async () => {
      const jobData = await getDoc(jobRef);
      setJob(jobData.data(), jobData.id);
    };

    getJob();
  }, [jobRef]);

  return (
    <div>
      <FullJob
        job={job}
        currentUser={currentUser}
        isAdmin={isAdmin}
        unPublishJob={unPublishJob}
        approveJob={approveJob}
      ></FullJob>
    </div>
  );
};

export default JobPage;
