import "./Filter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { APIContext } from "../../contexts/APIContext";

const Filter = ({ themeState, placeholder, menuItems }) => {
  const { setFilteredCountries } = useContext(APIContext);
  const [menuItem, setMenuItem] = useState(placeholder);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectMenuItem = (item) => {
    setMenuItem(item);
    setIsMenuOpen(!isMenuOpen);
  };

  const fetchByCountryName = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${menuItem}`
    );
    const countryData = await response.json();
    setFilteredCountries(countryData);
    setMenuItem(placeholder);
  };

  useEffect(() => {
    if (menuItem !== placeholder) {
      fetchByCountryName();
    }
  }, [menuItem]);

  return (
    <div className="dropdown-menu-container">
      <div
        className="dropdown-menu-filter"
        style={{
          backgroundColor: themeState.elements,
          color: themeState.text,
          boxShadow: themeState.shadow,
        }}
      >
        <span>{menuItem}</span>
        <FontAwesomeIcon
          onClick={handleToggleMenu}
          className={`arrow ${isMenuOpen ? "toggle-arrow" : ""}`}
          icon={faCaretDown}
        />
      </div>
      <ul
        className="menu-item-container"
        style={{
          backgroundColor: themeState.elements,
          color: themeState.text,
          boxShadow: themeState.shadow,
          visibility: `${isMenuOpen ? "visible" : "hidden"}`,
        }}
      >
        {menuItems.map((item, index) => (
          <li onClick={() => handleSelectMenuItem(item)} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
