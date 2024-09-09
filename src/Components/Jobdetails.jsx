import { Link } from "react-router-dom";
import data from "../jobsData/jobs.json";
import Footer from "./Footer";

const JobDetails = () => {
  console.log("data", data);

  return (
    <>
      <div className=" container">
        <h1 className="fs-1 fw-bold p-2 m-3" style={{ color: "#03045e" }}>
          Job Listings
        </h1>
        <div>
          {data?.map((data) => (
            <div key={data.id} className="d-flex flex-lg-row flex-sm-column">
              <div className="bg-info-subtle m-3 w-75 p-3">
                <h3 className="fw-bold fs-2">{data.job_title}</h3>
                <h4>Company: {data.company}</h4>
                <div className="d-flex flex-sm-column flex-lg-row gap-lg-5">
                  <h4>Salary: {data.salary}</h4>
                  <h4>Type: {data.type}</h4>
                </div>
                <div className="d-flex flex-sm-column flex-lg-row gap-lg-5">
                  <h4>posted on: {data.posted_date}</h4>
                  <h4> Application Deadline: {data.application_deadline}</h4>
                </div>
                <Link to={`/data/${data.id}`}>
                  <div
                    className="btn btn-light fs-5"
                    style={{ backgroundColor: "#ed1c24", color: "#fefae0" }}
                  >
                    Job details
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobDetails;
