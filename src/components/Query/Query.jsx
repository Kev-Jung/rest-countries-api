import "./Query.scss";
import Searchbar from "../Searchbar/Searchbar";
import Filter from "../Filter/Filter";

const Query = ({ theme }) => {
  return (
    <div className="query-container">
      <Searchbar placeholder="Search for a country..." theme={theme} />
      <Filter
        theme={theme}
        placeholder="Filter by Region"
        menuItems={["Africa", "America", "Asia", "Europe", "Oceania"]}
      />
    </div>
  );
};

export default Query;
