import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  let style = {
    textDecoration: "none",
    color: "#fefae0",
  };
  return (
    <>
      <div className=" container-fluid d-lg-flex  align-content-between justify-content-center gap-5 p-4 bg-dark text-white">
        <div>
          <Link to={"/"} style={style}>
            <h3 className="font-monospace text-sm-center">HIRETALENT</h3>
          </Link>
        </div>
        <div>
          <ul className="list-unstyled d-flex gap-4 fw-bold">
            <Link to={"/Foremployers"} style={style}>
              <li>FOR EMPLOYERS</li>
            </Link>
            <Link to={"/JobSeekers"} style={style}>
              <li>JOB SEEKERS</li>
            </Link>
            <Link to={"/AboutUs"} style={style}>
              {" "}
              <li>ABOUT US</li>
            </Link>
            <Link to={"/ContactUs"} style={style}>
              {" "}
              <li>CONTACT US</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navlinks;
