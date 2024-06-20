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
        className="page-header-section overlay-bg"
        style={{
          background: "url(img/underground.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <h1 className="header-title">
            About us<span>.</span>
          </h1>
        </div>
      </section>
      {/* <!-- Page header section end --> */}

      <section className="intro-section pt100 pb50" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 intro-text mb-5 mb-lg-0">
              <h2 className="sp-title text-capitalize">
                Sustainable Urban Drainage
                <span style={{ color: "white" }}>Design</span>
              </h2>
              <p>
                Yeokom Engineering Limited is a premier civil engineering and
                surveying company committed to delivering innovative and
                sustainable solutions for infrastructure development.
                Established with a vision to excel, we bring a wealth of
                experience and technical expertise to every project, ensuring
                the highest standards of quality and precision.
              </p>
            </div>
            <div className="col-lg-5 pt-4">
              <img src="img/about-us-2.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Intro section start --> */}
      <section className="intro-section spad">
        <div className="container">
          <div className="row mt-4">
            <div className="col-12 intro-text text-center">
              <h1>
                Our &nbsp;
                <span
                  style={{
                    color: "white",
                  }}
                >
                  Mission
                </span>
              </h1>
              <div className="row">
                <div className="col">
                  <p>
                    Our mission is to provide exceptional civil engineering and
                    surveying services that meet the evolving needs of our
                    clients and communities. We strive to be leaders in our
                    field by integrating advanced technologies, promoting
                    sustainable practices, and fostering a culture of continuous
                    improvement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pt-4">
              <img src="img/about.jpg" alt="" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 intro-text what-we-do">
              <h1 className="text-center">What we do &nbsp;</h1>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="d-flex justify-content-center flex-column align-items-center mb-3">
                    <img src="img/civil-engineering.jpg" alt="" />
                    <h5 className="font-weight-bold pt-3">Civil Engineering</h5>
                  </div>
                  <p>
                    From concept to completion, our civil engineering team
                    handles design, planning, and construction management for
                    infrastructure projects such as building developments,
                    roads, bridges, water systems, and more. We prioritise
                    safety, functionality, and sustainability in all our
                    designs.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex justify-content-center flex-column align-items-center mb-3">
                    <img src="img/surveying.jpg" alt="" />
                    <h5 className="font-weight-bold pt-3">Surveying</h5>
                  </div>
                  <p>
                    Our skilled surveyors utilise state-of-the-art equipment and
                    techniques to provide accurate land, topographic, and
                    construction surveys. We deliver precise data essential for
                    informed decision-making and successful project execution.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pt-4">
              <img src="img/about.jpg" alt="" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 intro-text">
              <h1 className="text-center">Our Values &nbsp;</h1>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <div className="border rounded p-3 m-2 h-100 pt-4">
                    <div className="text-center">
                      <i className="fa fa-star-o about-icon"></i>
                      <h5 className="font-weight-bold py-2">Quality</h5>
                    </div>
                    <p className="mb-0">
                      We are dedicated to maintaining the highest standards of
                      quality in every aspect of our work.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <div className="border rounded p-3 m-2 h-100 pt-4">
                    <div className="text-center">
                      <i className="fa fa-server about-icon"></i>
                      <h5 className="font-weight-bold py-2">Integrity</h5>
                    </div>
                    <p className="mb-0">
                      We uphold ethical practices and transparency in all our
                      dealings.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <div className="border rounded p-3 m-2 h-100 pt-4">
                    <div className="text-center">
                      <i className="fa fa-lightbulb-o about-icon"></i>
                      <h5 className="font-weight-bold py-2">Innovation</h5>
                    </div>
                    <p className="mb-0">
                      We embrace cutting-edge technologies and methodologies to
                      deliver superior results.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <div className="border rounded p-3 m-2 h-100 pt-4">
                    <div className="text-center">
                      <i className="fa fa-recycle about-icon"></i>
                      <h5 className="font-weight-bold py-2">Sustainability</h5>
                    </div>
                    <p className="mb-0">
                      We are committed to implementing environmentally
                      responsible practices in our projects.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <div className="border rounded p-3 m-2 h-100 pt-4">
                    <div className="text-center">
                      <i className="fa fa-handshake-o about-icon"></i>
                      <h5 className="font-weight-bold py-2">Client-Centered</h5>
                    </div>
                    <p className="mb-0">
                      Our clients are at the heart of everything we do. We
                      tailor our services to meet their unique needs and exceed
                      their expectations
                    </p>
                  </div>
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
                Why Choose{" "}
                <span
                  style={{
                    color: "white",
                  }}
                >
                  Us
                </span>
              </h1>

              <div>
                <p className="text-white">
                  Choosing Yeokom Engineering Limited means partnering with a
                  company that values precision, reliability, and client
                  satisfaction. Our comprehensive approach and commitment to
                  excellence make us the preferred choice for civil engineering
                  and surveying solutions.
                </p>

                <p className="text-white">
                  Contact us today to learn how we can assist you with your next
                  project. Together, we can build a better future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials section end --> */}

      {/* <!-- Team section start --> */}
      <section className="team-section spad ">
        <div className="container">
          <div className="section-title mb100">
            <h1>Our Team</h1>
            <p className="mt-3">
              Yeokom Engineering Limited is powered by a team of highly skilled
              professionals with diverse expertise in civil engineering and
              surveying. Our team members are passionate about their work and
              dedicated to achieving excellence in every project they undertake.
              Continuous professional development ensures that we stay ahead of
              industry trends and innovations.
            </p>
          </div>
          <div className="row d-none">
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
                Need Help with your{" "}
                <span
                  style={{
                    color: "white",
                  }}
                >
                  Planning
                </span>{" "}
                Application?
              </h1>
              <p>Detailed Foul and Water Drainage System</p>
            </div>
            <div className="col-lg-3 text-lg-right">
              <a
                onClick={() => {
                  location.href = "/contact";
                }}
                className="site-btn sb-dark mt-4"
              >
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
