import "./CountryPage.scss";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DataField from "../../components/DataField/DataField";
import Button from "../../components/Button/Button";
import { useContext } from "react";
import { APIContext } from "../../contexts/APIContext";

const ObjectFirstKeyRecursion = (object) => {
  if (typeof object === "string") {
    return object;
  }
  const key = Object.keys(object)[0];
  object = object[key];
  return ObjectFirstKeyRecursion(object);
};

const countryCodeToName = (code, countries) => {
  if (code && countries.length > 0) {
    const matchedCountry = countries.filter(
      (country) => country.cca3 == code
    )[0].name.common;
    return matchedCountry;
  }
};

const CountryPage = ({ themeState }) => {
  const { countries } = useContext(APIContext);
  console.log(countries);
  const location = useLocation();
  const { country } = location.state;
  const {
    borders,
    capital,
    currencies,
    flags,
    languages,
    name,
    population,
    region,
    subregion,
    tld,
  } = country;

  return (
    <div
      style={{ backgroundColor: themeState.bg, color: themeState.text }}
      className="country-page-container"
    >
      <Link to="/">
        <Button>
          <FontAwesomeIcon icon={faArrowLeft} className="arrow" />
          Back
        </Button>
      </Link>
      <div className="facts-container">
        <img src={flags.png} />
        <div className="text-container">
          <h2>{name.common}</h2>
          <div className="data-fields-container">
            <div className="field">
              <DataField
                title="Native Name"
                data={ObjectFirstKeyRecursion(name.nativeName)}
              />
              <DataField
                title="Population"
                data={population.toLocaleString()}
              />
              <DataField title="Region" data={region} />
              <DataField title="Sub Region" data={subregion} />
              <DataField title="Capital" data={capital} />
            </div>
            <div className="field">
              <DataField title="Top Level Domain" data={tld[0]} />
              <DataField
                title="Currencies"
                data={ObjectFirstKeyRecursion(currencies)}
              />
              <DataField
                title="Languages"
                data={ObjectFirstKeyRecursion(languages)}
              />
            </div>
          </div>
          <div className="border-countries-container">
            {borders && (
              <>
                <DataField title="Border Countries" />
                <div className="btn-group">
                  {borders.map((countryCode) => {
                    return (
                      // <Link to="">
                      <Button key={countryCode}>
                        {countryCodeToName(countryCode, countries)}
                      </Button>
                      // {/* </Link> */}
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
