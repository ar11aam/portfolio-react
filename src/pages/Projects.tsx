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
                <h2 className="text-center">Recently done project </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center">
              <iframe
                src="https://www.galactic-marine.com"
                width={400}
                height={700}
                sandbox="allow-scripts allow-modal"
                title="Custom title"
              ></iframe>
            </div>
            <div className="col-lg-6 d-flex justify-content-center main_title text-left">
              <h1 style={{ color: "#128fc8" }}>
                <a
                  href="https://www.galactic-marine.com"
                  style={{
                    color: "#128fc8",
                    textDecoration: "underline",
                    fontWeight: "700",
                  }}
                >
                  Galactic Pvt. limited
                </a>
              </h1>
            </div>
          </div>
          <div
            className="row d-flex justify-content-center"
            style={{ marginTop: "80px" }}
          >
            <button className="text-center">More</button>
          </div>
        </div>
      </section>
      <section className="features_area section_gap_top">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="main_title">
              <h2>service offers </h2>
              <p>
                Is give may shall likeness made yielding spirit a itself togeth
                created after sea <br /> is in beast beginning signs open god
                you're gathering ithe
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
