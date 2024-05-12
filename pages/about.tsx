import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
  return (
    <div>
      {/* <!-- Header section start -->    */}
      <div>
        <Navbar customHeaderWrapperClass="bg-white" />
      </div>
      {/* <!-- Header section end -->    */}

      {/* <!-- Page header section start --> */}
      <section
        className="page-header-section"
        style={{
          background: "url(img/banner-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="header-title">
            About us<span>.</span>
          </h1>
        </div>
      </section>
      {/* <!-- Page header section end --> */}

      {/* <!-- Intro section start --> */}
      <section className="intro-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 intro-text">
              <h1>
                We are a creative Architecture
                <span
                  style={{
                    color: "white",
                  }}
                >
                  Studio
                </span>
              </h1>
              <div className="row">
                <div className="col-md-6">
                  <p>
                    Pellentesque lorem dolor, malesuada eget tortor vitae,
                    tristique lacinia lectus. Pellentesque sed accumsan risus,
                    id aliquam nulla. Integer lorem risus, feugiat at mauris
                    malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero
                    ut pulvinar accumsan, tortor nisl iaculis ligula.{" "}
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Curabitur finibus dolor vel lectus pretium interdum a eget
                    ante. Morbi rhoncus feugiat imperdiet. Curabitur non maximus
                    leo. Nulla in ipsum sed magna egestas bibendum. Integer in
                    sem sagittis, commodo mi sit amet, commodo nibh. Suspendisse
                    potenti. Aliquam erat volutpat.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pt-4">
              <img src="img/about.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Intro section end --> */}

      {/* <!-- Testimonials section start --> */}
      <section className="testimonials-section spad">
        <div className="testimonials-image-box"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
              <h1>
                Clients{" "}
                <span
                  style={{
                    color: "white",
                  }}
                >
                  testimonials
                </span>
              </h1>
              <div className="qut">“</div>
              <div className="testimonials-slider" id="test-slider">
                <div className="ts-item">
                  <p>
                    Pellentesque lorem dolor, malesuada eget tortor vitae,
                    tristique lacinia lectus. Pellentesque sed accumsan risus,
                    id aliquam nulla. Integer lorem risus, feugiat at mauris
                    malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero
                    ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur
                    finibus dolor vel lectus pretium interdum a eget ante.{" "}
                  </p>
                  <h4>Maria Westminster</h4>
                  <span>Client</span>
                </div>
                <div className="ts-item">
                  <p>
                    Pellentesque lorem dolor, malesuada eget tortor vitae,
                    tristique lacinia lectus. Pellentesque sed accumsan risus,
                    id aliquam nulla. Integer lorem risus, feugiat at mauris
                    malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero
                    ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur
                    finibus dolor vel lectus pretium interdum a eget ante.{" "}
                  </p>
                  <h4>Maria Westminster</h4>
                  <span>Client</span>
                </div>
                <div className="ts-item">
                  <p>
                    Pellentesque lorem dolor, malesuada eget tortor vitae,
                    tristique lacinia lectus. Pellentesque sed accumsan risus,
                    id aliquam nulla. Integer lorem risus, feugiat at mauris
                    malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero
                    ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur
                    finibus dolor vel lectus pretium interdum a eget ante.{" "}
                  </p>
                  <h4>Maria Westminster</h4>
                  <span>Client</span>
                </div>
              </div>
              <div className="slide-num-holder test-slider" id="snh-2"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials section end --> */}

      {/* <!-- Team section start --> */}
      <section className="team-section spad">
        <div className="container">
          <div className="section-title mb100">
            <h1>The Team</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="team-member">
                <img src="img/team/1.jpg" alt="" />
                <div className="member-info">
                  <h2>Jack Smith</h2>
                  <p>Senior Architect</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member">
                <img src="img/team/2.jpg" alt="" />
                <div className="member-info">
                  <h2>Lili Jameson</h2>
                  <p>Senior Architect</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member">
                <img src="img/team/3.jpg" alt="" />
                <div className="member-info">
                  <h2>Michael Dow</h2>
                  <p>Senior Architect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Team section end --> */}

      <section className="promo-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 promo-text">
              <h1>
                In need of a{" "}
                <span
                  style={{
                    color: "white",
                  }}
                >
                  fabulouse
                </span>{" "}
                home?
              </h1>
              <p>
                Pellentesque lorem dolor, malesuada eget tortor vitae, tristique
                lacinia lectus. Pellentesque sed accumsan risus.
              </p>
            </div>
            <div className="col-lg-3 text-lg-right">
              <a href="#" className="site-btn sb-dark mt-4">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer section start --> */}
      <Footer />
      {/* <!-- Footer section end --> */}
    </div>
  );
};

export default About;
