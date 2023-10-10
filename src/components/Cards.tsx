import { motion } from "framer-motion";

const Cards: React.FC = () => {
  return (
    <>
      <section id="services" className="features_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center test-21">
              <div className="main_title">
                <h2>Service i offer</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <motion.div
                className="feature_item"
                onClick={() => null}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="assets/img/services/s1.png" alt="" />
                <h4>Web development</h4>
                <p>Dedicated to designing seamless online experiences.</p>
              </motion.div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <motion.div
                className="feature_item"
                onClick={() => null}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="assets/img/services/s2.png" alt="" />
                <h4>Programming</h4>
                <p>
                  Bringing concepts to life through the power of programming.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <motion.div
                className="feature_item"
                onClick={() => null}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="assets/img/services/s3.png" alt="" />
                <h4>Web design</h4>
                <p>
                  Design is not just about looks, but about how it makes users
                  feel.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <motion.div
                className="feature_item"
                onClick={() => null}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="assets/img/services/s4.png" alt="" />
                <h4>Database Management</h4>
                <p>
                  Designing, optimizing, and managing databases to support your
                  growth.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
