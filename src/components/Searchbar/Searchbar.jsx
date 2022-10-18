import "./Searchbar.scss";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DarkModeContext } from "../../contexts/DarkMode";

const Searchbar = ({ placeholder }) => {
  const { darkMode, light, dark } = useContext(DarkModeContext);
  const theme = darkMode ? dark : light;

  const [inputField, setInputField] = useState("");

  const handleInputChange = (e) => {
    setInputField(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: theme.elements,
        color: theme.inputColor ? theme.inputColor : theme.text,
      }}
      className="searchbar-container"
    >
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
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
