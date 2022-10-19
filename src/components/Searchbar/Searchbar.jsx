import "./Searchbar.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({ placeholder, themeState }) => {
  const [inputField, setInputField] = useState("");

  const handleInputChange = (e) => {
    setInputField(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: themeState.elements,
        boxShadow: themeState.shadow,
        color: themeState.inputColor ? themeState.inputColor : themeState.text,
      }}
      className="searchbar-container"
    >
      <FontAwesomeIcon
        onClick={() => console.log(inputField)}
        className="search-icon"
        icon={faMagnifyingGlass}
      />
      <input
        style={{ backgroundColor: themeState.elements, color: themeState.text }}
        className="searchbar"
        type="text"
        placeholder={placeholder}
        value={inputField}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Searchbar;
