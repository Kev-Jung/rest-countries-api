import "./CountryList.scss";
import { useEffect, useState, useContext } from "react";
import { CountryContext } from "../../contexts/CountryContext";
import Card from "../Card/Card";

const CountryList = ({ themeState }) => {
  const { setCountries, filteredCountries } = useContext(CountryContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Loading Countries...");

  // fetches all country data and paints on UI onload
  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countryData = await response.json();
        setCountries(countryData);
        setIsLoading(false);
      } catch {
        setErrorMessage("Unable to fetch countries.");
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="country-list-container">
      {/* displays loading message while fetching API */}
      {isLoading ? (
        <div className="loading-container">
          <h1 style={{ color: themeState.text }} className="loading-text">
            {errorMessage}
          </h1>
        </div>
      ) : (
        filteredCountries.map((country) => {
          return (
            <Card
              themeState={themeState}
              key={country.cca3}
              countryData={country}
            />
          );
        })
      )}
    </div>
  );
};

export default CountryList;
