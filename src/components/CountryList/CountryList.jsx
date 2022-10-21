import "./CountryList.scss";
import { useEffect, useState, useContext } from "react";
import { APIContext } from "../../contexts/APIContext";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const CountryList = ({ themeState }) => {
  const { countries, setCountries, filteredCountries, isLoading } =
    useContext(APIContext);

  return (
    <div className="country-list-container">
      {/* displays loading message while fetching API */}
      {isLoading.loadState ? (
        <div className="loading-container">
          <h1 style={{ color: themeState.text }} className="loading-text">
            {isLoading.message}
          </h1>
        </div>
      ) : (
        filteredCountries.map((country) => {
          return (
            <Link
              key={country.cca3}
              to={`/${country.name.common.replace(/\s/g, "")}`}
              state={{ country }}
            >
              <Card themeState={themeState} countryData={country} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default CountryList;
