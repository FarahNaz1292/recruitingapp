import React from "react";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Ourimpact from "../assets/our-impact.png";

const Homepage = () => {
  let styles = {
    backgroundColor: "#ed1c24",
    color: "#fefae0",
    borderRadius: "5px",
    width: "150px",
    height: "40px",
    text: "center",
    paddingTop: "4px",
  };
  return (
    <>
      <Navlinks></Navlinks>

      <div style={{ backgroundColor: "#183040", height: "400px" }}>
        <div
          className=" container fs-1 fw-bold d-flex flex-column justify-content-center align-content-center text-center  py-5"
          style={{ color: "#fefae0" }}
        >
          <h1>WE BELIEVE PEOPLE ARE AN</h1>
          <h1> ORGANIZATIONS'S GREATEST RESOURCE</h1>
          <h3>Consider us your talent matchmaker</h3>
        </div>
        <div className="btn d-flex  align-content-center justify-content-center text-white fw-bolder gap-5 border-4">
          <Link to={"/JobSeekers"} style={{ textDecoration: "none" }}>
            {" "}
            <p style={styles}> For Job Seekers</p>
          </Link>
          <Link to={"/Foremployers"} style={{ textDecoration: "none" }}>
            {" "}
            <p style={styles}>For Employers</p>
          </Link>
        </div>
      </div>
      <div className="d-flex gap-3  flex-lg-row flex-sm-column-reverse container mt-4 mb-4">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h2>Our Impact </h2>
          <p>
            HireTalent, a proud NMSDC minority-certified organization, connects
            businesses with top-tier diverse talent. We are a leader in
            inclusion! With over 10,000 placements and a 95% client satisfaction
            rate, we set the standard for diversity in recruitment. Our
            innovative approach enhances workplace diversity and drives business
            success. Join the many businesses transforming their workforce with
            HireTalent's expert services. We believe DEI should create moments
            where companies consciously nurture a collision of ideas. That is
            where innovation meets diversity to generate ROI & inclusion.
          </p>
        </div>
        <div>
          <img src={Ourimpact} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
