import { useState, createContext, useEffect } from "react";

export const APIContext = createContext({
  countries: [],
  setCountries: () => {},
  filteredCountries: [],
  setFilteredCountries: () => {},
  isLoading: {},
});

export const APIContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  // state for managing filtering from search bar
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState({
    loadState: true,
    message: "Loading Countries...",
  });

  // console.log(countries);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countryData = await response.json();
        setCountries(countryData);
        setIsLoading({ ...isLoading, loadState: false });
      } catch {
        setIsLoading({ ...isLoading, message: "Unable to fetch countries." });
      }
    };
    fetchCountries();
  }, []);

  // fetches API data onload (from CountryList component) and updates both countries and filteredCountries.
  // Because filteredCountries is what's used to filter based on searchbar text.
  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const value = {
    countries,
    filteredCountries,
    isLoading,
    setCountries: (data) => setCountries(data),
    setFilteredCountries: (data) => setFilteredCountries(data),
  };

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
};
