import "./MainPage.scss";
import Query from "../../components/Query/Query";
import CountryList from "../../components/CountryList/CountryList";

const MainPage = ({ themeState }) => {
  return (
    <div className="main" style={{ backgroundColor: themeState.bg }}>
      <Query themeState={themeState} />
      <CountryList themeState={themeState} />
    </div>
  );
};

export default MainPage;
