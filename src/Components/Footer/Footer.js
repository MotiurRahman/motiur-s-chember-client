import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaMapMarkerAlt, FaMobileAlt, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div data-theme="valentine" className="mt-auto">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <img style={{ height: "100px" }} src={logo} alt="" />
          <p>
            Motiur's Chamber a leading law firm in Bangladesh.
            <br />
            Motiur's Chember is one of the fastest growing full-service law
            firms in Bangladesh.
          </p>
        </div>
        <div className="ml-auto">
          <span className="footer-title">Services</span>
          <div className="grid grid-col gap-4">
            <Link to="">Admiralty and Maritime Law</Link>
            <Link to="">Alternative Dispute Resolution</Link>
            <Link to="">Aviation Law</Link>
            <Link to="">Banking, Finance, Securities and Exchange Laws</Link>
            <Link to="">Civil and Criminal Litigation</Link>
            <Link to="">Competition and Consumer Law</Link>
          </div>
        </div>
        <div>
          <span className="footer-title">Have a Question?</span>
          <ul>
            <li className="flex items-center">
              <span className="mr-2">
                <FaMapMarkerAlt></FaMapMarkerAlt>
              </span>
              <span className="text">
                545-West Kaziparaa <br /> Dhaka- 1216
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">
                <FaMobileAlt></FaMobileAlt>
              </span>
              <span className="text">+8801723306519</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">
                {" "}
                <FaRegEnvelope></FaRegEnvelope>
              </span>
              <span className="text">motiur.mbstu@gmail.com</span>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by Motiur's Chember</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
