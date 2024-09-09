import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const Footer = () => {
  let style = {
    color: "#fefae0",
    height: "250px",
  };
  return (
    <>
      <div className="bg-dark" style={style}>
        <div class="font-monospace fw-bold text-center p-4" style={style}>
          <p className="fs-3">HIRETALENT</p>
          <div className="fs-5"></div>
          Building the next generation workforce
          <div className="container fw-bolder fs-6 text-center">
            HireTalent is proud to present its diverse range of brands, each
            dedicated to providing exceptional services and solutions across
            various sectors.
          </div>
          <div
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            <FontAwesomeIcon className="m-3" icon={faInstagram} />
            <FontAwesomeIcon className="m-3" icon={faFacebook} />
            <FontAwesomeIcon className="m-3" icon={faYoutube} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
