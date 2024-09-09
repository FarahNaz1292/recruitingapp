import React from "react";
import Navlinks from "./Navlinks";
import Footer from "./Footer";
import ManPicture from "../assets/story-image-01.png";
import About from "../assets/about-2018.png";

const Aboutus = () => {
  return (
    <>
      <Navlinks></Navlinks>
      <h1 className="text-center fw-bolder m-4">Our Story </h1>
      <div className="d-flex container flex-lg-row flex-column-reverse">
        <div>
          <img src={ManPicture} alt="" />
        </div>
        <div className=" d-flex align-items-center justify-content-center text-center fw-medium fs-4">
          <p>
            HireTalent CEO Ashish Kaushal is a first-generation Indian American
            who has been thinking about inclusion his whole life. That’s
            probably why he went into the business of belonging and started
            HireTalent in 1997. The idea was to build an organization that
            focused on helping businesses expand their diversity footprint.
            Since we opted for this belief ourselves, we had to live and breathe
            it as well. Nearly 25 years later, we’re still going strong.
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex container flex-lg-row flex-column mb-3">
          <div className=" d-flex align-items-center justify-content-center text-center fw-medium fs-4">
            <p>
              It’s not enough to simply place diverse talent within
              organizations if the culture isn’t inclusive in order for that
              talent to thrive. That’s why Kaushal founded Consciously Unbiased
              in 2018, a DEIB corporate training, consulting and thought
              leadership initiative to create more conscious workplaces. Driving
              inclusion always has been - and always will be - at the heart of
              our business.
            </p>
          </div>
          <div>
            <img src={About} alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Aboutus;
