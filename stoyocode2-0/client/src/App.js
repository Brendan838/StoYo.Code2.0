import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Bio from "./components/Bio/Bio";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import "./App.css";

const App = () => {

  return (

    <Router>

      <div className="App">
        <Header />
        <Switch>

          <Redirect exact from="/" to="/Bio" />
          <Route exact path="/Bio" component={Bio} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Resume" component={Resume} />


        </Switch>
        <Footer />

      </div>

    </Router>
  );
};
export default App;
