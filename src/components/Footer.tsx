const Footer: React.FC = () => {
  return (
    <>
      {" "}
      <footer className="footer_area">
        <div className="container">
          <hr />
        </div>
        <div className="container row my-4">
          <div id="footer_top" className="col-md-6">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <p
                  className="text-center"
                  style={{
                    color: "#788489",
                    fontSize: "35px",
                    fontWeight: "700",
                    margin: "35px 0px 45px 0px",
                  }}
                >
                  Socials
                </p>
                <div className="footer_top flex-column">
                  <div className="footer_social">
                    <a href="https://www.instagram.com/ar11aam">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/Ar11aam">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://github.com/ar11aam">
                      <i className="fa fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/arhamtayyab/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center mt-2">
            <div>
              <p style={{ margin: "0", color: "#788489" }}>
                Got a project in mind?
              </p>
              <h1
                style={{
                  color: "#788489",
                  fontSize: "35px",
                  fontWeight: "700",
                  marginBottom: "34px",
                }}
              >
                Let's talk
              </h1>
            </div>
            <div className="row d-flex align-items-center justify-content-center test-27">
              <div className="col test-26">
                <a href="tel:+923176514544">
                  <p
                    style={{
                      color: "#788489",
                      fontSize: "17px",
                      fontWeight: "600",
                    }}
                  >
                    <i className="fa-solid fa-phone mr-2"></i>
                    +92-317-6514544
                  </p>
                </a>
              </div>
              <div className="col test-26">
                <a href="mailto: arhamtayyab553@gmail.com">
                  <p
                    style={{
                      color: "#788489",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    <i
                      className="fa-solid fa-envelope mr-2"
                      style={{ fontSize: "19px" }}
                    ></i>
                    arhamtayyab553@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="test-25">
          <i className="fa-regular fa-copyright p-1"></i>
          <p style={{ margin: "0px" }} className="text-center">
            2023 Arham Tayyab. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
