import { useEffect, useState } from "react";
import FullJob from "../FullJob";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase-config.js";

const JobPage = ({ currentUser, isAdmin, approveJob, unPublishJob }) => {
  const [jobs, setJobs] = useState([]);
  const [focusJob, setFocusJob] = useState({});

  const jobsCollectionRef = collection(db, "jobs");

  useEffect(() => {
    const getJobs = async () => {
      const jobsData = await getDocs(jobsCollectionRef);
      setJobs(jobsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const findJobFromURL = () => {
      const url = window.location.href;
      const jobId = url.split("/").pop();
      for (let job of jobs) {
        if (job.id === jobId) {
          setFocusJob(job);
        }
      }
    };

    getJobs();
    findJobFromURL();
  }, [jobsCollectionRef, jobs]);


  return (
    <div>
      <FullJob
        job={focusJob}
        currentUser={currentUser}
        isAdmin={isAdmin}
        unPublishJob={unPublishJob}
        approveJob={approveJob}
      ></FullJob>
    </div>
  );
};

export default JobPage;
