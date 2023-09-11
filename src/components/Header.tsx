import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./DarkMode.css";

const Header = () => {
  const imgStyle = {
    width: "160px",
  };

  const setDarkMode = () => {
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.setAttribute("data-theme", "dark");
      localStorage.setItem("selectedTheme", "dark");
    }
  };

  const setLightMode = () => {
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.setAttribute("data-theme", "light");
      localStorage.setItem("selectedTheme", "light");
    }
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e: { target: { checked: any } }) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
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
              <ul className="nav navbar-nav menu_nav justify-content-end">
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
              <div className="dark_mode">
                <input
                  className="dark_mode_input"
                  type="checkbox"
                  id="darkmode-toggle"
                  onChange={toggleTheme}
                  defaultChecked={selectedTheme === "dark"}
                />
                <label className="dark_mode_label" htmlFor="darkmode-toggle">
                  <FontAwesomeIcon className="sun" icon={faSun} />
                  <FontAwesomeIcon className="moon" icon={faMoon} />
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
