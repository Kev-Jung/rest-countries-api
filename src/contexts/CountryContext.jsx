import { useState, createContext } from "react";

export const CountryContext = createContext({
  countries: [],
  setCountries: () => {},
});

export const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const value = {
    countries,
    setCountries: (data) => setCountries(data),
  };

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};
