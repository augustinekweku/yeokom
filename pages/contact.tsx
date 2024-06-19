import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Navbar customHeaderWrapperClass="bg-white" />
      {/* <!-- Page header section start --> */}
      <section
        className="page-header-section overlay-bg "
        style={{
          background: "url(img/underground.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <h1 className="header-title">
            Contact<span>.</span>
          </h1>
        </div>
      </section>
      {/* <!-- Page header section end --> */}

      {/* <!-- Page section start --> */}
      <section className="page-section pt100">
        <div className="container pb100">
          <div className="section-title pt-5">
            <h1>Get in touch</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 contact-info mb-5 mb-lg-0">
              <p>Address: 22 Elgin Dr, Swindon SN2 8DN, UK</p>
              <p>Phone: +675 334 567 223</p>
              <p>Email: info@yeokom.co.uk</p>
              <div className="cf-social d-none">
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <form
                className="contact-form"
                action="https://submit-form.com/3JI0BIxe3"
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message ..."
                ></textarea>
                <button className="site-btn sb-dark pointer">Send</button>
              </form>
            </div>
          </div>
        </div>
        <div className="map-area" id="map-canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.718229465893!2d-1.7682174223518763!3d51.57339880587841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487145cdd1785953%3A0xe9158dfcae5e2f85!2s22%20Elgin%20Dr%2C%20Swindon%20SN2%208DN%2C%20UK!5e0!3m2!1sen!2sgh!4v1715533231798!5m2!1sen!2sgh"
            style={{ border: "0", width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      {/* <!-- Page section end --> */}

      <Footer />
    </div>
  );
};

export default Contact;
