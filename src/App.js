import './App.scss';
import Header from './components/Header/Header';
import { useContext } from "react";
import { ThemeContext } from './contexts/ThemeContext';
import Query from './components/Query/Query';
import CountryList from './components/CountryList/CountryList';


function App() {

  const { theme, light, dark } = useContext(ThemeContext);
  const themeState = theme ? dark : light;

  return (
    <div 
      className="App" 
      style={{backgroundColor: themeState.bg}}
    >
      <Header themeState={themeState}/>
      <Query themeState={themeState} />
      <CountryList themeState={themeState} />
    </div>
  );
}

export default App;
