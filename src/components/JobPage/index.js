import { useEffect, useState } from "react";
import FullJob from "../FullJob";

const JobPage = ({
  jobs,
  currentUser,
  isAdmin,
  approveJob,
  unPublishJob,
}) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const url = window.location.href;
    const jobIdFromURL = url.split("/").pop();
    const getJob = () => {
      const job = jobs.filter((job) => {
        return job.id === jobIdFromURL;
      });
      setJob(job[0]);
    };

    getJob();
  }, [jobs]);

  return (
    <div>
      {job ? (
        <FullJob
          job={job}
          currentUser={currentUser}
          isAdmin={isAdmin}
          unPublishJob={unPublishJob}
          approveJob={approveJob}
        ></FullJob>
      ) : null}
    </div>
  );
};

export default JobPage;
