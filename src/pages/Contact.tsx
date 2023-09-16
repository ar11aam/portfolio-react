import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  faHouse,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isEmailSent, setEmailSent] = useState(false);

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
          <div
            className="container"
            style={{ marginBottom: "50px", marginTop: "150px" }}
          >
            <div className="main_title">
              <h2 className="text-center">Reach Me Directly</h2>
            </div>
            <div
              className="row d-flex "
              style={{ flexWrap: "wrap", padding: "20px" }}
            >
              <div className="col-lg-4 d-flex">
                <div className="contact_info">
                  <div className="info_item row pb-3">
                    <div className="col" style={{ flexGrow: "unset" }}>
                      <FontAwesomeIcon
                        icon={faHouse}
                        style={{
                          fontSize: "40px",
                          paddingTop: "5px",
                          color: "#854fee",
                        }}
                      />
                    </div>
                    <div className="col">
                      <h6 style={{ color: "unset" }}>Punjab, Pakistan</h6>
                      <p>
                        Khayban-e-sarwar
                        <br /> D. G. Khan
                      </p>
                    </div>
                  </div>

                  <div className="info_item row pb-3">
                    <div className="col" style={{ flexGrow: "unset" }}>
                      <a href="tel:+923176514544" style={{ color: "unset" }}>
                        <FontAwesomeIcon
                          icon={faPhone}
                          style={{
                            fontSize: "40px",
                            color: "#854fee",
                          }}
                        />
                      </a>
                    </div>
                    <a
                      href="tel:+923176514544"
                      style={{ color: "unset" }}
                      id="info_item"
                    >
                      <div className="col">
                        <h6>
                          <a>+92 317 6514 544</a>
                        </h6>
                        <p>Mon to Fri 9am to 6 pm</p>
                      </div>
                    </a>
                  </div>
                  <div className="info_item row">
                    <div className="col" style={{ flexGrow: "unset" }}>
                      <a
                        href="mailto: arhamtayyab553@gmail.com"
                        style={{ color: "unset" }}
                      >
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          style={{ fontSize: "40px", color: "#854fee" }}
                        />
                      </a>
                    </div>
                    <a
                      href="mailto: arhamtayyab553@gmail.com"
                      style={{ color: "unset" }}
                      id="info_item"
                    >
                      <div className="col">
                        <h6>
                          <a>arhamtayyab553@gmail.com</a>
                        </h6>
                        <p>Send us your query anytime!</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
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

export default Contact;
