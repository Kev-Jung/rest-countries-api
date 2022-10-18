import './App.scss';
import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import { useContext } from "react";
import { DarkModeContext } from "./contexts/DarkMode";
import Filter from './components/Filter/Filter';

function App() {

  const { darkMode, light, dark } = useContext(DarkModeContext);
  const theme = darkMode ? dark : light;

  return (
    <div style={{backgroundColor: theme.bg}}>
        <Header />
        <Searchbar placeholder="Search for a country..." />
        <Filter />
    </div>
  );
}

export default App;
