import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AdminOnlyJobs = ({ jobs, isAdmin }) => {
  const [listJobs, setListJobs] = useState([]);

  useEffect(() => {
    const listJobs = jobs.sort((job) => (job.approved ? 1 : -1));
    setListJobs(listJobs);
  }, [jobs]);

  const listOfJobs = listJobs.map((job) => {
    const expiryDate = new Date(job.expiry_date).toLocaleDateString();

    return (
      <div key={job.id}>
        <div className="row mt-3 border-bottom border-dark" key={job.id}>
          <div className="col-3">
            <Link
              to={{
                pathname: `/jobs/${job.id}`,
              }}
            >
              <p>{job.title}</p>
            </Link>
          </div>
          <div className="col-2">
            <p>{job.company}</p>
          </div>
          <div className="col-2">
            {job.remote ? <p>Remote</p> : <p>{job.location}</p>}
          </div>
          <div className="col-2">
            <p>{expiryDate}</p>
          </div>

          <div className="col-2">
            {new Date(job.expiry_date) > new Date() && job.approved ? (
              <Badge bg="success">Live</Badge>
            ) : new Date(job.expiry_date) > new Date() && !job.approved ? (
              <Badge bg="warning">Awaiting Approval</Badge>
            ) : new Date(job.expiry_date) > new Date() ? (
              <Badge bg="secondary">Expired</Badge>
            ) : (
              <Badge bg="secondary">Expired</Badge>
            )}
          </div>
          <div className="col-1">
            <Link
              to={{
                pathname: `/jobs/${job.id}`,
              }}
            >
              Review
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {isAdmin ? (
        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <div className="row border-bottom border-dark">
                <div className="col-3">
                  <p className="fs-5 fw-bold mb-2">Job title</p>
                </div>
                <div className="col-2">
                  <p className="fs-5 fw-bold mb-2">Company</p>
                </div>
                <div className="col-2">
                  <p className="fs-5 fw-bold mb-2">Location</p>
                </div>
                <div className="col-2">
                  <p className="fs-5 fw-bold mb-2">Closing date</p>
                </div>
                <div className="col-2">
                  <p className="fs-5 fw-bold mb-2">Status</p>
                </div>
                <div className="col-1"></div>
              </div>
            </div>
            <div className="col-12">{listOfJobs}</div>
          </div>
        </div>
      ) : (
        <div className="container">
          <h3>You need to be logged in as an admin to access this page</h3>
        </div>
      )}
    </div>
  );
};

export default AdminOnlyJobs;
