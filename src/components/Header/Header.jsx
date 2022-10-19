import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = ({ themeState }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{ backgroundColor: themeState.elements, color: themeState.text }}
      className="header-container"
    >
      <span className="header-title">Where in the world?</span>
      <div className="dark-mode-container" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faMoon} />
        <span>{theme ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </header>
  );
};

export default Header;
