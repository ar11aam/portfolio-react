import { NavLink } from "react-router-dom";
import "./DarkMode.css";
// import Toogle from "../components/Toogle";

const Header: React.FC = () => {
  const imgStyle = {
    width: "160px",
  };

  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand logo_h" href="index.html">
              <img src="assets/img/Arham T..png" alt="" style={imgStyle} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav justify-content-center">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              {/* <ul className="d-flex justify-content-center align-items-center p-0 m-0">
                <li className="nav-item d-flex justify-content-center align-items-center">
                  <a className="nav-link dark_mode">
                    <Toogle />
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
