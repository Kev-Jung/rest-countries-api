import CardData from "../CardData/CardData";
import "./Card.scss";

const Card = ({ themeState, countryData }) => {
  const {
    borders,
    capital,
    cioc,
    currencies,
    flags,
    languages,
    name,
    population,
    region,
    subregion,
    tld,
  } = countryData;

  return (
    <div
      className="card-container"
      style={{
        backgroundColor: themeState.elements,
        color: themeState.text,
        boxShadow: themeState.shadow,
      }}
    >
      <img className="card-img" src={flags.png} alt="country-flag" />
      <div className="card-description">
        <h3>{name.common}</h3>
        <CardData title="Population" data={population.toLocaleString()} />
        <CardData title="Region" data={region} />
        <CardData title="Capital" data={capital} />
      </div>
    </div>
  );
};

export default Card;
