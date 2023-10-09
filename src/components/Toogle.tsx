import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Toogle: React.FC = () => {
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

  useEffect(() => {
    toggleTheme({ target: { checked: selectedTheme === "dark" } });
  }, [selectedTheme]);

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
    <>
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
    </>
  );
};

export default Toogle;
