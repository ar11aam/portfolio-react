import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      {" "}
      <section className="portfolio_area section_gap_top" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title text-left">
                <h2>
                  quality work <br />
                  Recently done project{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="filters portfolio-filter">
            <ul>
              <li className="active" data-filter="*">
                all
              </li>
              <li data-filter=".popular">popular</li>
              <li data-filter=".latest"> latest</li>
              <li data-filter=".following">following</li>
              <li data-filter=".upcoming">upcoming</li>
            </ul>
          </div>

          <div className="filters-content">
            <div className="row portfolio-grid justify-content-center">
              <div className="col-lg-4 col-md-6 all latest">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="assets/img/portfolio/p1.jpg"
                      alt=""
                    />
                    <div className="overlay"></div>
                    <a href="assets/img/portfolio/p1.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">minimal design</a>
                    </h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all popular">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="assets/img/portfolio/p2.jpg"
                      alt=""
                    />
                    <div className="overlay"></div>
                    <a href="assets/img/portfolio/p2.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">Paint wall</a>
                    </h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all latest">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="assets/img/portfolio/p3.jpg"
                      alt=""
                    />
                    <div className="overlay"></div>
                    <a href="assets/img/portfolio/p3.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">female light</a>
                    </h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all popular">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="assets/img/portfolio/p4.jpg"
                      alt=""
                    />
                    <div className="overlay"></div>
                    <a href="assets/img/portfolio/p4.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">fourth air</a>
                    </h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all following">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="assets/img/portfolio/p6.jpg"
                      alt=""
                    />
                    <div className="overlay"></div>
                    <a href="assets/img/portfolio/p5.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">together sign</a>
                    </h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="assets/img/portfolio/p5.jpg"
                      alt=""
                    />
                    <div className="overlay"></div>
                    <a href="assets/img/portfolio/p6.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">multiply fowl</a>
                    </h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming following">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="assets/img/portfolio/p7.jpg"
                      alt=""
                    />
                    <div className="overlay"></div>
                    <a href="assets/img/portfolio/p7.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">green heaven</a>
                    </h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all following">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="assets/img/portfolio/p8.jpg"
                      alt=""
                    />
                    <div className="overlay"></div>
                    <a href="assets/img/portfolio/p8.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>fly male</h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="assets/img/portfolio/p9.jpg"
                      alt=""
                    />
                    <div className="overlay"></div>
                    <a href="assets/img/portfolio/p9.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <Link to="/">season face</Link>
                    </h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features_area section_gap_top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>service offers </h2>
                <p>
                  Is give may shall likeness made yielding spirit a itself
                  togeth created after sea <br /> is in beast beginning signs
                  open god you're gathering ithe
                </p>
              </div>
            </div>
          </div>
          <div className="row feature_inner">
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="assets/img/services/s1.png" alt="" />
                <h4>Wp developing</h4>
                <p>
                  Creeping for female light years that lesser can't evening
                  heaven isn't bearing tree
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="assets/img/services/s2.png" alt="" />
                <h4>UI/ux design</h4>
                <p>
                  Creeping for female light years that lesser can't evening
                  heaven isn't bearing tree
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="assets/img/services/s3.png" alt="" />
                <h4>Web design</h4>
                <p>
                  Creeping for female light years that lesser can't evening
                  heaven isn't bearing tree
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="assets/img/services/s4.png" alt="" />
                <h4>seo optimize</h4>
                <p>
                  Creeping for female light years that lesser can't evening
                  heaven isn't bearing tree
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
