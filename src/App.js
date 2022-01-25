import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toogle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Navigation from "./components/navigation/Navigation";
import {BrowserRouter as Router} from 'react-router-dom'
import react from "react";

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{backgroundColor: darkMode ? "#222": "white" , color: darkMode && "white" }}>
       <Router>
       <Navbar/>
       </Router>
        
        {/* <Navigation/> */}
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />
    </div>
  );
}

export default App;
