import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-black text-white p-md-5 p-3 text-start">
      <div className="row">
        <div className="col-md-10 col-8 ps-md-5">
          <h2>Travel</h2>
          <p className="fs-5">Choose your favourite destenation</p>
        </div>
        <div className="col-md-2 col-4 fs-2  p-0 text-center">
          <FontAwesomeIcon icon={faSquareFacebook} className="mx-1" />
          <FontAwesomeIcon icon={faSquareInstagram} className="mx-1" />
          <FontAwesomeIcon icon={faLinkedin} className="mx-1" />
          <FontAwesomeIcon icon={faSquareTwitter} className="mx-1" />
        </div>
      </div>
      <div className="row ps-5 mt-4 row-gap-4">
        <div className="col-6 col-md-3">
          <h4 className="mb-4">Project</h4>
          <p>Changelog</p>
          <p>Status</p>
          <p>License</p>
          <p>All Versions</p>
        </div>
        <div className="col-6 col-md-3">
          <h4 className="mb-4">Community</h4>
          <p>Github</p>
          <p>Issues</p>
          <p>Project</p>
          <p>Twitter</p>
        </div>
        <div className="col-6 col-md-3">
          <h4 className="mb-4">Help</h4>
          <p>Support</p>
          <p>Troubleshooting</p>
          <p>Contact Us</p>
        </div>
        <div className="col-6 col-md-3">
          <h4 className="mb-4">Others</h4>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>License</p>
        </div>
      </div>
    </div>
  );
}
