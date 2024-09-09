import React from "react";
import Navlinks from "./Navlinks";
import Footer from "./Footer";
import Mappic from "../assets/Where-We-Are-less502.png";

const Foremployers = () => {
  return (
    <>
      <Navlinks></Navlinks>
      <div className="container  d-lg-flex gap-5 mt-5 pt-4 bg-light-subtle">
        <div>
          <h1 className="fw-bold text-sm-center">WHY WORK WITH US</h1>
        </div>
        <div className="text-center fs-5">
          <h3>
            HireTalent has been in the business of people <br />
            for nearly 25 years, and, for us, business is personal.{" "}
          </h3>
          <p>
            We deliver a win-win for all, with two times the average employee
            retention rate and 99% client retention rate. Our purpose is to
            positively impact employees’ lives and our partners' organizations
            by placing the best people in the right roles and drive innovation
            with diverse talent.
          </p>
        </div>
      </div>
      <div
        className="container mt-5 mb-4"
        style={{
          backgroundImage: `url(${Mappic})`,
          backgroundRepeat: "no-repeat",
          height: "750px",
          backgroundColor: "#183040",
          color: "#fefae0",
        }}
      >
        <h2 className="fs-3 fw-bold mb-4">Where we are</h2>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Foremployers;
