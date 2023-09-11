import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const About = () => {
  return (
    <>
      {" "}
      <section className="about_area section_gap">
        <div className="container" style={{ marginTop: "130px" }}>
          <div className="row justify-content-start align-items-center">
            <div className="col-lg-5">
              <div className="about_img">
                <img className="" src="assets/img/about-us.png" alt="" />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="main_title text-left">
                <h2>
                  let’s <br />
                  Introduce about <br />
                  myself
                </h2>
                <p>
                  Whose given. Were gathered. There first subdue greater.
                  Bearing you Whales heaven midst their. Beast creepeth. Fish
                  days.
                </p>
                <p>
                  Is give may shall likeness made yielding spirit a itself
                  together created after sea is in beast beginning signs open
                  god you're gathering whose gathered cattle let. Creature
                  whales fruit unto meat the life beginning all in under give
                  two.
                </p>
                <a className="primary_btn" href="#">
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brand_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img
                        className="apply-color"
                        src="assets/img/brands/react.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img
                        className="apply-color"
                        src="assets/img/brands/square-js.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img
                        className="apply-color"
                        src="assets/img/brands/laravel.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img
                        className="apply-color"
                        src="assets/img/brands/php.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img
                        className="apply-color"
                        src="assets/img/brands/bootstrap.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-4 col-md-6">
              <div className="client-info">
                <div className="d-flex mb-50">
                  <span className="lage">10</span>
                  <span className="smll">Years Experience Working</span>
                </div>
                <div className="call-now d-flex">
                  <div>
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="ml-15">
                    <p>call us now</p>
                    <h3>(+1)-800-555-6789</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="testimonial_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>client say about me</h2>
                <p>
                  Is give may shall likeness made yielding spirit a itself
                  togeth created after sea is in beast
                  <br />
                  beginning signs open god you're gathering ithe
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <OwlCarousel className="owl-theme" autoplay items={2}>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="assets/img/testimonials/t1.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Elite Martin</h4>
                      <p>
                        Him, made can't called over won't there on divide there
                        male fish beast own his day third seed sixth seas unto.
                        Saw from{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="assets/img/testimonials/t2.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Davil Saden</h4>
                      <p>
                        Him, made can't called over won't there on divide there
                        male fish beast own his day third seed sixth seas unto.
                        Saw from{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="assets/img/testimonials/t1.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Elite Martin</h4>
                      <p>
                        Him, made can't called over won't there on divide there
                        male fish beast own his day third seed sixth seas unto.
                        Saw from{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="assets/img/testimonials/t2.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Davil Saden</h4>
                      <p>
                        Him, made can't called over won't there on divide there
                        male fish beast own his day third seed sixth seas unto.
                        Saw from{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="assets/img/testimonials/t1.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Elite Martin</h4>
                      <p>
                        Him, made can't called over won't there on divide there
                        male fish beast own his day third seed sixth seas unto.
                        Saw from{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="assets/img/testimonials/t2.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Davil Saden</h4>
                      <p>
                        Him, made can't called over won't there on divide there
                        male fish beast own his day third seed sixth seas unto.
                        Saw from{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      <section className="newsletter_area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="subscription_box text-center">
                <h2 className="text-uppercase text-white">
                  get update from anywhere
                </h2>
                <p className="text-white">
                  Bearing Void gathering light light his eavening unto dont
                  afraid.
                </p>
                <div className="subcribe-form" id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get"
                    className="subscription relative"
                  >
                    <input
                      name="EMAIL"
                      placeholder="Email address"
                      // onBlur="this.placeholder = 'Email address'"
                      required
                      type="email"
                    />
                    <div>
                      {/* style="position: absolute; left: -5000px;" */}
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        // tabIndex="-1"
                        value=""
                        type="text"
                      />
                    </div>
                    <button className="primary-btn hover d-inline">
                      Get Started
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
