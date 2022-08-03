import React from "react";
import foter from "../style/foter.css";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import { RiWhatsappLine } from "react-icons/ri";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
const Foter = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <span>
              <img
                src={require("../images/ftrlogo.png")}
                className="w-50 "
                href="/"
              />
            </span>
          </h3>

          <p className="footer-links">
            <a href="/" className="link-1">
              Home
            </a>

            <a href="#">About</a>

            <a href="#">Visa</a>

            <a href="#">Insurance</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name text-white">Travel Wave © 2022</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker">
              <GoLocation className="foter-icon-info" />
            </i>
            <p>
              <span>Office no: 11, First Floor, AB Heights, </span> Airport
              Road, Lahore Pakistan{" "}
            </p>
          </div>

          <div>
            <i className="fa fa-phone ">
              <AiOutlinePhone className="foter-icon-info" />
            </i>
            <p className="my-4">
              {" "}
              03 111 123 002 <br></br>042 3232 8474
            </p>
          </div>

          <div>
            <i className="fa fa-envelope">
              <AiOutlineMail className="foter-icon-info" />
            </i>
            <p className="mx-2">
              <a href="mailto:support@company.com">info@travelwave.pk</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>Folllow Us</span>
          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook">
                <TiSocialFacebook />{" "}
              </i>
            </a>
            <a href="#">
              <i className="fa fa-twitter">
                <FaInstagram />{" "}
              </i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin">
                <FiTwitter />{" "}
              </i>
            </a>
            <a href="#">
              <i className="fa fa-github">
                <RiWhatsappLine />{" "}
              </i>
            </a>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span className="sponser">Sponser </span>
            </p>

            <div className="footer-icons d-flex  footer-card">
              <a href="#">
                <img
                  src={require("../images/payment1.png")}
                  className="image-foter "
                />{" "}
              </a>
              <a href="#">
                <img
                  src={require("../images/payment2.png")}
                  className="image-foter "
                />{" "}
              </a>
              <a href="#">
                <img
                  src={require("../images/payment3.png")}
                  className="image-foter"
                />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about"></p>

          <div className="footer-icons"></div>
        </div>
      </footer>

      <footer className="foter2 ">
        <p class="text-center text-foter ">Copyright &copy; travelwave.pk</p>
      </footer>
    </div>
  );
};

export default Foter;
