import React, { useEffect, useState } from "react";
import Navlinks from "./Navlinks";
import { useParams } from "react-router-dom";
import jobs from "../jobsData/jobs.json";
import Footer from "./Footer";

const Singlejobpage = () => {
  const [job, setJob] = useState();
  const { id } = useParams();

  useEffect(() => {
    const singleJob = jobs.find((data) => data.id === parseInt(id));
    setJob(singleJob);
  }, [id]);
  // console.log(job);

  return (
    <>
      <Navlinks></Navlinks>
      <h1 className="d-flex align-items-center justify-content-center fs-1 fw-bold mt-5">
        Job Details
      </h1>
      {job && (
        <div className="container ">
          <img
            src={job.img}
            alt=""
            style={{ width: "100%", marginBottom: "20px" }}
          />
          <div>
            <p className="fs-2 fw-bolder d-flex justify-content-center">
              Job Title: {job.job_title}
            </p>
            <div className="d-flex flex-column  flex-lg-row gap-lg-4 align-items-center justify-content-center">
              <p className="fw-bold fs-3 ">Company: {job.company}</p>
              <p className="fw-bold fs-4"> Location: {job.location}</p>
            </div>
            <div className="d-flex flex-column flex-lg-row text-sm-center gap-lg-5 fs-4 fw-bold justify-content-center">
              <p>Salary: ({job.salary})</p>
              <p>Open vacancies: {job.vacancy}</p>
              <p>Type: {job.type}</p>
            </div>
            <div className="d-flex flex-column flex-lg-row gap-lg-5  fw-bold align-items-center justify-content-center fs-5">
              <p> Posted on: {job.posted_date}</p>
              <p>Application DeadLine: {job.application_deadline}</p>
            </div>
            <div className="text-center fw-bolder fs-5">
              <p>Experience level : {job.experience_level}</p>
            </div>
            <div>
              <p className="fs-3">
                <span className="fw-bold"> Requirments</span> <br />
                {job.requirements}
              </p>
            </div>

            <div>
              <p className="fs-3">
                <span className="fw-bold">Job Description</span> <br />
                {job.job_description}
              </p>
            </div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </>
  );
};

export default Singlejobpage;
