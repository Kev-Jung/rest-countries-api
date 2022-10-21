import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ themeState }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <header
        style={{
          backgroundColor: themeState.elements,
          color: themeState.text,
          boxShadow: themeState.shadow,
        }}
        className="header-container"
      >
        <Link
          to="/"
          className="header-title"
          style={{ color: themeState.text }}
        >
          Where in the world?
        </Link>
        <div className="dark-mode-container" onClick={toggleTheme}>
          <FontAwesomeIcon icon={faMoon} />
          <span>{theme ? "Light Mode" : "Dark Mode"}</span>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
