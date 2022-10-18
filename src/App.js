import './App.scss';
import Header from './components/Header/Header';
import { useContext } from "react";
import { DarkModeContext } from "./contexts/DarkMode";

function App() {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`App ${darkMode ? "dark-bg" : "light-bg"}`}>
        <Header />
    </div>
  );
}

export default App;
