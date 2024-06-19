"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yeokom</title>
        <meta
          name="description"
          content="At Yeokom Engineering Ltd, we aim to always design A sustainable drainage system for your project‘s drainage scheme."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <!-- Header section start -->    */}
      <Navbar />
      {/* <!-- Header section end -->    */}

      {/* <!-- Hero section start --> */}
      <section className="hero-section">
        {/* <!-- left social link ber --> */}
        <div className="left-bar ">
          <div className="left-bar-content">
            <div className="social-links d-none">
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
        </div>
        {/* <!-- hero slider area --> */}
        <div className="hero-slider-wrapper position-relative">
          <div
            className="hero-slider "
            style={{
              background: "url(img/landing-page-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "blur(3px)",
            }}
          >
            <div className="hero-slide-item "></div>
          </div>
          <div className="hero-bg-text typewriter">
            <h1 className="text-white mb-0">
              Welcome to <br />
              Yeokom Engineering Ltd
            </h1>
          </div>
        </div>
        <div className="slide-num-holder" id="snh-1"></div>
        <div className="hero-right-text d-none">Civil Engineering</div>
      </section>
      {/* <!-- Hero section end --> */}

      {/* <!-- Intro section start --> */}
      <section className="intro-section pt100 pb50" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 intro-text mb-5 mb-lg-0">
              <h2 className="sp-title text-capitalize">
                Sustainable Urban Drainage
                <span style={{ color: "white" }}>Design</span>
              </h2>
              <p>
                At Yeokom Engineering Ltd, we aim to always design A sustainable
                drainage system for your project&lsquo;s drainage scheme. We aim
                to align ourselves with the latest trend in SUDS. If Your
                planning condition requires a drainage strategy that meets SUDS.
                We have helped many people have their planning conditions met
                and we can help you with that.
              </p>
              <a href="#" className="site-btn sb-dark">
                Reach out to us
              </a>
            </div>
            <div className="col-lg-5 pt-4">
              <img src="img/about-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Intro section end --> */}

      {/* <!-- Service section start --> */}
      <section className="service-section spad" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <img src="img/icon/dark/1.png" alt="" />
                  </div>
                </div>
                <h3>Civil and Drainage Design</h3>
                <div>
                  <ul>
                    <li>Sustainable Urban Drainage Systems</li>
                    <li>Storm Water Attenuation Design</li>
                    <li>Detailed Private Drainage Design</li>
                    <li>Detailed Topography Survey</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <img src="img/icon/dark/2.png" alt="" />
                  </div>
                </div>
                <h3>Planning Support</h3>
                <div>
                  <ul>
                    <li>Foul And Surface Water Drainage Strategies</li>
                    <li>⁠Flood Risk Assessments</li>
                    <li>Foul Drainage Assessments (FDA1)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <img src="img/icon/dark/3.png" alt="" />
                  </div>
                </div>
                <h3>SAB Applications</h3>
                <ul>
                  <li>Hydraulic Calculations</li>
                  <li>Soakaway Calculations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Service section end --> */}

      {/* <!-- CTA section start --> */}
      <section className="cta-section pt100 pb50 ">
        <div className="cta-image-box"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
              <h2 className="sp-title">
                Get it <span>Right</span> with Yeokom Engineering Ltd
              </h2>
              <p>
                At Yeokom Engineering Ltd, we specialize in designing
                sustainable drainage systems (SUDS) tailored to meet your
                project&apos;s unique requirements. With a commitment to staying
                ahead of the latest trends in SUDS, we ensure that your drainage
                strategy aligns perfectly with current standards and planning
                conditions. <br />
                Our expertise has helped numerous clients meet their planning
                conditions, and we’re ready to help you too. Trust Yeokom
                Engineering Ltd to get it right, ensuring a reliable and
                sustainable solution for your drainage needs.
              </p>
              <div className="cta-icons">
                <div className="cta-img-icon">
                  <img src="img/icon/light/1.png" alt="" />
                </div>
                <div className="cta-img-icon">
                  <img src="img/icon/light/2.png" alt="" />
                </div>
                <div className="cta-img-icon">
                  <img src="img/icon/color/3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- CTA section end --> */}

      {/* <!-- Milestones section Start --> */}
      <section className="milestones-section spad d-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="milestone">
                <h2>10</h2>
                <p>
                  Years <br />
                  of <br />
                  Experience
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="milestone">
                <h2>237</h2>
                <p>
                  Projects <br />
                  Taken
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="milestone">
                <h2>11k</h2>
                <p>
                  Twitter <br />
                  Followers
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="milestone">
                <h2>12</h2>
                <p>
                  Awards <br />
                  Won
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Milestones section end --> */}

      {/* <!-- Projects section start --> */}
      <div className="projects-section pb50 pt-5 d-none" id="projects">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="section-title">
                <h1>Projects</h1>
              </div>
            </div>
          </div>
        </div>
        <Projects />
      </div>
      {/* <!-- Projects section end --> */}

      {/* <!-- Clients section start --> */}
      <div className="client-section spad d-none">
        <div className="container">
          <div id="client-carousel" className="client-slider">
            <div className="single-brand">
              <a href="#">
                <img src="img/clients/1.png" alt="" />
              </a>
            </div>
            <div className="single-brand">
              <a href="#">
                <img src="img/clients/2.png" alt="" />
              </a>
            </div>
            <div className="single-brand">
              <a href="#">
                <img src="img/clients/3.png" alt="" />
              </a>
            </div>
            <div className="single-brand">
              <a href="#">
                <img src="img/clients/4.png" alt="" />
              </a>
            </div>
            <div className="single-brand">
              <a href="#">
                <img src="img/clients/5.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Clients section end --> */}

      {/* <!-- Footer section start --> */}
      <Footer />
      {/* <!-- Footer section end --> */}
    </>
  );
}
