import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkMode";

const Header = () => {
  const { darkMode, toggleDarkMode, light, dark } = useContext(DarkModeContext);
  const theme = darkMode ? dark : light;

  return (
    <header
      style={{ backgroundColor: theme.elements, color: theme.text }}
      className="header-container"
    >
      <span className="header-title">Where in the world?</span>
      <div className="dark-mode-container" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={faMoon} />
        <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </header>
  );
};

export default Header;
