import React from "react";
import Navlinks from "./Navlinks";
import JobPlacement from "../assets/job-placement.png";
import AverageEmployee from "../assets/average-employee.png";
import Candidates from "../assets/candidates.png";
import JobseekerImage from "../assets/jobseeker.png";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Jobseekers = () => {
  return (
    <>
      <Navlinks></Navlinks>
      <div
        className="mt-2 container-fluid"
        style={{ backgroundColor: "#0077b6", color: "#fefae0", height: "80px" }}
      >
        <h1 className="py-3 text-center text-lg-start">Job Seekers</h1>
      </div>
      <div className=" container-fluid bg-light mt-3">
        <div className="container d-flex flex-lg-row flex-column-reverse">
          <p className="d-flex align-items-center justify-content-center fs-3">
            Companies aren't made up of companies; they are made up of people.
            We believe that people are an organization’s greatest resource. We
            live and breathe our values by partnering with job seekers to help
            match you with positions where you can grow and thrive.We've been
            matching talent like yourself with top companies for nearly 25
            years, and we’d love to work with you.
          </p>
          <div className="d-flex  text-center flex-sm-column">
            <div className="d-flex flex-row gap-3 m-3">
              {" "}
              <img src={JobPlacement} alt="" />
              <div className="fw-bold lh-1">
                <p style={{ color: "#03045e", fontSize: "40px" }}>7,500+</p>
                <p>Job Placements</p>
              </div>
            </div>
            <div className="d-flex flex-row gap-3 m-3">
              {" "}
              <img src={AverageEmployee} alt="" />
              <div className="fw-bold lh-1">
                <p style={{ color: "#03045e", fontSize: "40px" }}>2X</p>
                <p>Average Employee Retention Rate</p>
              </div>
            </div>
            <div className="d-flex flex-row gap-3 m-3">
              {" "}
              <img src={Candidates} alt="" />
              <div className="fw-bold lh-1">
                <p style={{ color: "#03045e", fontSize: "40px" }}>81%</p>
                <p> Diverse candidates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-lg-row flex-sm-column gap-3 container mt-3">
        <div>
          <img src={JobseekerImage} alt="" />
        </div>
        <div className="d-flex align-items-center justify-content-center fs-3 ">
          <p>
            At HireTalent, you aren’t just another resume and we won’t ghost
            you. You, our talent, is what makes us possible. We pride ourselves
            on connection making and relationship building to partner with you
            on your job search and match you with the best fit in terms of
            position and company.
          </p>
        </div>
      </div>
      <Link to={"Joblistings"} className="text-decoration-none ">
        <div
          className="text-center p-4 fs-4 fw-bold"
          style={{ color: "#ed1c24" }}
        >
          {" "}
          Click here for Job Listings
        </div>
      </Link>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Jobseekers;
