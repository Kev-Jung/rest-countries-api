import "./Header.scss";
import lightMoon from "../../assets-svg/moon-dark.svg";
import darkMoon from "../../assets-svg/moon-light.svg";
import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkMode";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className={`header-container ${darkMode ? "dark" : "light"}`}>
      <span className="header-title">Where in the world?</span>
      <div className="dark-mode-container" onClick={toggleDarkMode}>
        <img
          src={darkMode ? darkMoon : lightMoon}
          className="dark-mode-icon"
          alt="dark-mode-icon"
        />
        <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </header>
  );
};

export default Header;
