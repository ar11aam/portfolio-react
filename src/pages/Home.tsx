import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Lottie from "lottie-react";
import Cards from "../components/Cards.tsx";
import { motion } from "framer-motion";
import animationSeven from "./json/animation_llse4q9g.json";
import "./css/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Home: React.FC = () => {
  const [selectedTheme] = useState<string>(
    localStorage.getItem("selectedTheme") || "light"
  );

  console.log("Selected theme:", selectedTheme);

  const form = useRef<HTMLFormElement>(null);
  const [isEmailSent, setEmailSent] = useState<boolean>(false);
  const closeAlert = () => {
    setEmailSent(false);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      try {
        await emailjs.sendForm(
          "service_lloefwh",
          "template_kw3zd3o",
          form.current,
          "xninN5Pp8SN1kyQix"
        );
        console.log("Email sent");
        form.current.reset();
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false); // Hide the alert after 5 seconds
        }, 5000);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };
  return (
    <>
      {" "}
      <section id="home" className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row flex-column flex-sm-row-reverse">
              <div className="col-lg-5 col-md-5 col-sm-6 test-1">
                <div className="home_right_img d-flex justify-content-center">
                  <img
                    src="assets/img/Untitled design2.png" // Toggle image source based on theme
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-6 test-2">
                <div className="banner_content test-4">
                  <h3 className="text-uppercase" style={{ fontWeight: "800" }}>
                    Programmer
                  </h3>
                  <h1 className="text-uppercase" style={{ fontWeight: "700" }}>
                    Web developer
                  </h1>
                  <h3
                    className="text-uppercase test-5"
                    style={{ fontWeight: "800" }}
                  >
                    Designer
                  </h3>
                  <div className="d-flex align-items-center">
                    <motion.button
                      className="save-button selected-btn"
                      onClick={() => null}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Contact Me
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about_area section_gap">
        <div className="container">
          <div className="row justify-content-center text-center align-items-center">
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              style={{ paddingBottom: "80px" }}
            >
              <div className="about_img">
                <Lottie animationData={animationSeven}></Lottie>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="main_title text-left test-3">
                <h2>
                  Who <br />
                  am i?
                </h2>
                <p>
                  I'm a Full Stack, Front-end/Back-end website developer,
                  designer who takes a lot of pride in creating beautiful
                  responsive websites.
                </p>
                <motion.button
                  className="save-button selected-btn"
                  onClick={() => null}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  More{" "}
                  <FontAwesomeIcon
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      paddingLeft: "15px",
                    }}
                    icon={faArrowRight}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="brand_area section_gap_bottom"
        style={{ marginTop: "200px" }}
      >
        <div className="container">
          <h2
            className="text-center"
            style={{
              fontWeight: "700",
              fontSize: "36px",
              lineHeight: "50px",
              textTransform: "uppercase",
            }}
          >
            My Expertise
          </h2>
          <br />
          <div className="col pt-5" style={{ flexWrap: "unset" }}>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <motion.div
                  onClick={() => null}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="single-brand-item d-flex justify-content-center align-items-center">
                    <div className="text-center">
                      <img
                        className="apply-color"
                        id="first"
                        src="assets/img/brands/php.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <motion.div
                  onClick={() => null}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="single-brand-item d-flex justify-content-center align-items-center">
                    <div className="text-center">
                      <img
                        className="apply-color"
                        id="second"
                        src="assets/img/brands/react.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <motion.div
                  onClick={() => null}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="single-brand-item d-flex justify-content-center align-items-center">
                    <div className="text-center">
                      <img
                        className="apply-color"
                        id="third"
                        src="assets/img/brands/square-js.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <motion.div
                  onClick={() => null}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="single-brand-item d-flex justify-content-center align-items-center">
                    <div className="text-center">
                      <img
                        className="apply-color"
                        id="forth"
                        src="assets/img/brands/laravel.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <motion.div
                  onClick={() => null}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="single-brand-item d-flex justify-content-center align-items-center">
                    <div className="text-center">
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
              <div className="col-lg-4 col-md-4 col-sm-6">
                <motion.div
                  onClick={() => null}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="single-brand-item d-flex justify-content-center align-items-center">
                    <div className="text-center">
                      <img
                        className="apply-color"
                        id="fifth"
                        src="assets/img/brands/typescript.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-center align-items-center flex-column text-center">
        <div className="col container test-6">
          <h2 className="text-center">
            <span
              style={{
                borderBottomWidth: "8px",
                borderBottomStyle: "solid",
                borderBottomColor: "#854fee",
              }}
            >
              2 +
            </span>{" "}
            Working Experience
          </h2>
          <div className="container mb-4 mt-5 test-7">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>
          <motion.a
            className="selected-btn-two px-3"
            onClick={() => null}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.6 }}
          >
            See More
          </motion.a>
        </div>
      </section>
      <section>
        <Cards />
      </section>
      <div className="testimonial_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>client say about me</h2>
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
      <div>
        <section className="contact_area section_gap">
          {isEmailSent && (
            <div className="custom-alert">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ fontSize: "25px" }}
              />
              <span>Email successfully sent!</span>
              <button className="close-button" onClick={closeAlert}>
                &#x2715;
              </button>
            </div>
          )}
          <div className="container" style={{ marginBottom: "50px" }}>
            <div
              className="row d-flex justify-content-center"
              style={{ flexWrap: "wrap" }}
            >
              <div className="col-lg-8">
                <div className="main_title">
                  <h2>Reach Me Directly</h2>
                </div>
              </div>
              <div className="col-lg-9">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="row contact_form justify-content-center"
                  id="contactForm"
                >
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="name"
                        autoComplete="off"
                        name="from_name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        required
                        type="email"
                        className="form-control"
                        id="email"
                        autoComplete="off"
                        name="from_email"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        required
                        className="form-control"
                        name="message"
                        id="message"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="form-group text-right">
                      <motion.button
                        type="submit"
                        value="Send"
                        className="primary_btn"
                        onClick={() => null}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span>Send Message </span>
                      </motion.button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
