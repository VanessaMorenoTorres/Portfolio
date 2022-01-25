import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
// import {Switch} from "react-router";
import Contact from "../contact/Contact";
import Intro from "../intro/Intro";
import About from "../about/About";
import ProductList from "../productList/ProductList";

function Navigation(){
    return(
      <Router>
        <div className="navBar">
          <nav>
            <ul className="pageLinks">
                <li>
                  <Link to="/">Intro</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/projects" component={ProductList} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Intro} />
          </Routes>
        </div>
      </Router>
    )
}

export default Navigation