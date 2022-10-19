import './App.scss';
import Header from './components/Header/Header';
import { useContext } from "react";
import { DarkModeContext } from "./contexts/DarkMode";
import Query from './components/Query/Query';


function App() {

  const { darkMode, light, dark } = useContext(DarkModeContext);
  const theme = darkMode ? dark : light;

  return (
    <div 
      className="App" 
      style={{backgroundColor: theme.bg}}
    >
      <Header />
      <Query theme={theme} />
    </div>
  );
}

export default App;
