import { useState, createContext, useEffect } from "react";

export const CountryContext = createContext({
  countries: [],
  setCountries: () => {},
  filteredCountries: [],
  setFilteredCountries: () => {},
});

export const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  // state for managing filtering from search bar
  const [filteredCountries, setFilteredCountries] = useState([]);

  console.log(countries);

  // fetches API data onload (from CountryList component) and updates both countries and filteredCountries.
  // Because filteredCountries is what's used to filter based on searchbar text.
  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const value = {
    countries,
    filteredCountries,
    setCountries: (data) => setCountries(data),
    setFilteredCountries: (data) => setFilteredCountries(data),
  };

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};
