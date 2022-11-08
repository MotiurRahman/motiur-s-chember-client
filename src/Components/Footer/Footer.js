import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

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
      </footer>
    </div>
  );
};

export default Footer;
