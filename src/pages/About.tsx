import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const About: React.FC = () => {
  return (
    <>
      <section className="portfolio_area section_gap_top" id="portfolio">
        <div className="container">
          <div className="row" style={{ marginBottom: "50px" }}>
            <div className="col-lg-12">
              <div className="main_title text-left">
                <h2 className="text-center">Know About Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 test-9">
              <img
                src="assets/img/Untitled design (7).png"
                alt=""
                style={{ width: "400px" }}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center flex-column test-10">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-sm-3 col-4 test-13">
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-8 test-11">
                  <h1 className="test-14">I'm</h1>
                  <h1 className="test-12">
                    <span
                      style={{
                        color: "transparent",
                        background:
                          "linear-gradient(to right, #4458dc 0%, #854fee 100%), radial-gradient(circle at top left, #4458dc, #854fee)",
                        WebkitBackgroundClip: "text",
                      }}
                    >
                      {" "}
                      Arham Tayyab
                    </span>
                  </h1>
                </div>
              </div>

              <div className="row">
                <p className="test-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cumque dolorum ullam dignissimos ratione fuga laudantium
                  repellendus facilis iste impedit. Optio repellendus et illum
                  alias fugit libero laborum, incidunt officia a sunt voluptates
                  aperiam temporibus?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
