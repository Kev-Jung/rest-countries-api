import "./Searchbar.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({ placeholder, theme }) => {
  const [inputField, setInputField] = useState("");

  const handleInputChange = (e) => {
    setInputField(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: theme.elements,
        boxShadow: theme.shadow,
        color: theme.inputColor ? theme.inputColor : theme.text,
      }}
      className="searchbar-container"
    >
      <FontAwesomeIcon
        onClick={() => console.log(inputField)}
        className="search-icon"
        icon={faMagnifyingGlass}
      />
      <input
        style={{ backgroundColor: theme.elements, color: theme.text }}
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
