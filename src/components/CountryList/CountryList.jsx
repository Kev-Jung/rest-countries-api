import "./CountryList.scss";
import { useEffect, useState, useContext } from "react";
import { CountryContext } from "../../contexts/CountryContext";
import Card from "../Card/Card";

const CountryList = ({ themeState }) => {
  const { countries, setCountries } = useContext(CountryContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Loading Countries...");

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      const baseURL = "https://restcountries.com/v3.1/all";
      try {
        const response = await fetch(baseURL);
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
      {isLoading ? (
        <div className="loading-container">
          <h1 style={{ color: themeState.text }} className="loading-text">
            {errorMessage}
          </h1>
        </div>
      ) : (
        countries.map((country) => {
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
