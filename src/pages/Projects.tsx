import { motion } from "framer-motion";

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
            <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
              <div className="smartphone">
                <div className="content">
                  <iframe
                    src="https://www.galactic-marine.com"
                    style={{
                      width: "280px",
                      height: "416px",
                    }}
                    sandbox="allow-scripts allow-modal"
                    title="Galactic Pvt."
                  ></iframe>
                </div>
              </div>
              <div className="row mt-2">
                <p>
                  <div>
                    {" "}
                    Icons made by{" "}
                    <a href="https://www.freepik.com" title="Freepik">
                      {" "}
                      Freepik{" "}
                    </a>{" "}
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      www.flaticon.com
                    </a>
                  </div>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h1
                className="text-center"
                style={{
                  marginTop: "20px",
                }}
              >
                <a
                  href="https://www.galactic-marine.com"
                  target="_blank"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(to right, #4458dc 0%, #854fee 100%), radial-gradient(circle at top left, #4458dc, #854fee)",
                    WebkitBackgroundClip: "text",
                    fontWeight: "700",
                    fontSize: "30px",
                    textDecoration: "underline",
                  }}
                >
                  Galactic Pvt. limited
                </a>
              </h1>
              <div className="row" style={{ marginTop: "70px" }}>
                <div className="col d-flex justify-content-center align-items-center flex-column">
                  <img
                    src="src\pages\img\responsive (1).png"
                    alt=""
                    style={{ width: "100px" }}
                  />
                </div>
                <div className="col d-flex justify-content-center align-items-center flex-column">
                  <img
                    src="src\pages\img\admin-panel.png"
                    alt=""
                    style={{ width: "100px" }}
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "30px" }}>
                <div className="col">
                  <p
                    className="text-center"
                    style={{ fontWeight: "600", fontSize: "18px" }}
                  >
                    Responsive Design
                  </p>
                </div>
                <div className="col">
                  <p
                    className="text-center"
                    style={{ fontWeight: "600", fontSize: "18px" }}
                  >
                    Admin Panel
                  </p>
                </div>
              </div>
              <div className="row" style={{ marginTop: "40px" }}>
                <div className="col d-flex justify-content-center align-items-center flex-column">
                  <img
                    src="src\pages\img\dynamic (1).png"
                    alt=""
                    style={{ width: "100px" }}
                  />
                </div>
                <div className="col d-flex justify-content-center align-items-center flex-column">
                  <img
                    src="src\pages\img\online-shopping.png"
                    alt=""
                    style={{ width: "100px" }}
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "30px" }}>
                <div className="col">
                  <p
                    className="text-center"
                    style={{ fontWeight: "700", fontSize: "18px" }}
                  >
                    E-commerce
                  </p>
                </div>
                <div className="col">
                  <p
                    className="text-center"
                    style={{ fontWeight: "700", fontSize: "18px" }}
                  >
                    Dynamic Content
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1
            className="text-center mb-5"
            style={{
              color: "transparent",
              marginTop: "90px",
              background:
                "linear-gradient(to right, #4458dc 0%, #854fee 100%), radial-gradient(circle at top left, #4458dc, #854fee)",
              WebkitBackgroundClip: "text",
              fontWeight: "700",
              fontSize: "30px",
              textDecoration: "underline",
            }}
          >
            Technologies Used
          </h1>
          <div className="row d-flex justify-content-center">
            <motion.div
              className="mx-4"
              onClick={() => null}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="single-brand-item d-table">
                <div className="d-table-cell text-center">
                  <img
                    className="apply-color"
                    id="third"
                    src="assets/img/brands/square-js.svg"
                    alt=""
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="mx-4"
              onClick={() => null}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="single-brand-item d-table">
                <div className="d-table-cell text-center">
                  <img
                    className="apply-color"
                    id="forth"
                    src="assets/img/brands/laravel.svg"
                    alt=""
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="mx-4"
              onClick={() => null}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="single-brand-item d-table">
                <div className="d-table-cell text-center">
                  <img
                    className="apply-color"
                    id="sixth"
                    src="assets/img/brands/bootstrap.svg"
                    alt=""
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <div
            className="row d-flex justify-content-center"
            style={{ marginTop: "80px" }}
          >
            <a className="text-center">More</a>
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
