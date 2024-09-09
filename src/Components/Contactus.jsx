import React from "react";
import Navlinks from "./Navlinks";
import Footer from "./Footer";

const Contactus = () => {
  return (
    <div>
      <Navlinks></Navlinks>
      <h1 className="text-center mt-4" style={{ color: "#ed1c24" }}>
        GET IN TOUCH{" "}
      </h1>
      <div className=" container text-center p-3  mb-4 ">
        <div className="d-flex flex-lg-row flex-column">
          <input className="m-4 w-50" type="text" placeholder="First Name" />
          <input className=" m-4 w-50" type="text" placeholder="Last Name" />
        </div>
        <div className="d-flex flex-lg-row flex-column">
          <input
            className="m-4 w-50"
            type="text"
            placeholder="Personal linkedIn Profile"
          />
          <input
            className="m-4 w-50"
            type="text"
            placeholder="Current Job Title"
          />
        </div>
        <div className="d-flex flex-lg-row flex-column">
          {" "}
          <input
            className="m-4 w-50"
            type="text"
            placeholder="Years Experience"
          />
          <input className="m-4 w-50" placeholder="Preferred Industry" />
        </div>
        <div className="d-flex flex-lg-row flex-column">
          <input className="m-4 w-50" type="email" placeholder="Email" />
          <select className="m-4 w-50">
            <option value="0">You hear About Us from</option>
            <option value="Google">Google</option>
            <option value="linkedIn">linkedIn</option>
            <option value="Facebook">Facebook</option>
          </select>
        </div>
        <div className="d-flex flex-lg-row flex-column">
          <input className="m-4 w-50" type="Phone" placeholder="Phone" />
          <select className="m-4 w-50">
            <option value="0">Inquiry Type</option>
            <option value="Google">Seeking Job</option>
            <option value="linkedIn">Seeking workforce</option>
            <option value="Facebook">Drop Resume</option>
          </select>
        </div>
      </div>

      <btn
        className=" btn d-flex fw-bold fs-2 align-items-center justify-content-center"
        style={{ color: "#ed1c24" }}
      >
        Submit
      </btn>

      <Footer></Footer>
    </div>
  );
};

export default Contactus;
