import { getYear } from "@/utils";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="footer-social d-none">
          <div className="social-links ">
            <a href="#">
              <i className="fa fa-pinterest"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3 flex-column flex-lg-row">
          <div className="d-flex align-items-center">
            <Link className="footer-link" href="/about">
              About Us
            </Link>
            <Link className="footer-link" href="/#services">
              Services
            </Link>
          </div>
          <div className="text-center my-3">
            <img src="/img/logo-2.png" width={200} alt="" />
            <br />
            Copyright &copy; {getYear()} All rights reserved. <br />
          </div>
          <div className="d-flex align-items-center ">
            <Link className="footer-link" href="/#projects">
              Projects
            </Link>
            <Link className="footer-link" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
