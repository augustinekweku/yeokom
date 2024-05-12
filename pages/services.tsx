import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Services = () => {
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
            Services<span>.</span>
          </h1>
        </div>
      </section>
      {/* <!-- Page header section end --> */}

      {/* <!-- Intro section start --> */}
      <section className="intro-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="serve-slider">
                <Slider {...settings}>
                  <div>
                    <img src="img/service/1.jpg" alt="" />
                  </div>
                  <div>
                    <img src="img/service/2.jpg" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-lg-7 service-text">
              <h1>
                We offer top quality project{" "}
                <span
                  style={{
                    color: "white",
                  }}
                >
                  services
                </span>
              </h1>
              <h2>01.Super-fast support.</h2>
              <p>
                Pellentesque lorem dolor, malesuada eget tortor vitae, tristique
                lacinia lectus. Pellentesque sed accumsan risus, id aliquam
                nulla. Integer lorem risus, feugiat at mauris malesuada,
                accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar
                accumsan, tortor nisl iaculis ligula.{" "}
              </p>
              <ol>
                <li>02.Detailed documentation. </li>
                <li>03.Clean code.</li>
                <li>04.Great themes.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Intro section end --> */}

      {/* <!-- Service box section start --> */}
      <div
        className="service-box-section spad"
        style={{
          background: "url(img/service-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="solid-service-box">
                <h2>01.</h2>
                <h3>The idea</h3>
                <p>
                  Fusce commodo tincidunt convallis. <br /> Nunc at purus vitae
                  nisl sagittis grav ida ut sit amet diam.
                </p>
                <a href="#" className="readmore">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="solid-service-box">
                <h2>02.</h2>
                <h3>Behind the work</h3>
                <p>
                  Fusce commodo tincidunt convallis. <br /> Nunc at purus vitae
                  nisl sagittis grav ida ut sit amet diam.
                </p>
                <a href="#" className="readmore">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="solid-service-box">
                <h2>03.</h2>
                <h3>The Success</h3>
                <p>
                  Fusce commodo tincidunt convallis. <br /> Nunc at purus vitae
                  nisl sagittis grav ida ut sit amet diam.
                </p>
                <a href="#" className="readmore">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service box section end --> */}

      {/* <!-- Service section start --> */}
      <section className="service-section spad">
        <div className="container">
          <div className="section-title">
            <h1>Services</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <img src="img/icon/dark/1.png" alt="" />
                  </div>
                </div>
                <h3>Plans and Projects</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sed dui eget lorem tincidunt.
                </p>
                <a href="#" className="readmore">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <img src="img/icon/dark/2.png" alt="" />
                  </div>
                </div>
                <h3>Conceptual Architecture</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sed dui eget lorem tincidunt.
                </p>
                <a href="#" className="readmore">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <img src="img/icon/dark/3.png" alt="" />
                  </div>
                </div>
                <h3>Apartment Buildings</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sed dui eget lorem tincidunt.
                </p>
                <a href="#" className="readmore">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <img src="img/icon/dark/4.png" alt="" />
                  </div>
                </div>
                <h3>Skyscrapers Buildings</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sed dui eget lorem tincidunt.
                </p>
                <a href="#" className="readmore">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <img src="img/icon/dark/5.png" alt="" />
                  </div>
                </div>
                <h3>Documentation</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sed dui eget lorem tincidunt.
                </p>
                <a href="#" className="readmore">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <img src="img/icon/dark/6.png" alt="" />
                  </div>
                </div>
                <h3>Restauration Projects</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sed dui eget lorem tincidunt.
                </p>
                <a href="#" className="readmore">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Service section end --> */}

      <section className="promo-section pt-0">
        <div
          className="promo-box"
          style={{
            background: "url(img/bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
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
                  Pellentesque lorem dolor, malesuada eget tortor vitae,
                  tristique lacinia lectus. Pellentesque sed accumsan risus.
                </p>
              </div>
              <div className="col-lg-3 text-lg-right">
                <a href="#" className="site-btn sb-light mt-4">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
