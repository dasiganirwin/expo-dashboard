import React from "react";
import AddExhibitor  from "../pages/AddExhibitor";
import Overview  from "../pages/Overview";
import SignIn from "../SignIn";

//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Switch>
            <Route exact path="/" component={ SignIn }  />
            <Route path="/overview" component={ Overview } />
            <Route path="/addexhibitor" component={ AddExhibitor } />
      </Switch>
    </Router>
  );
}

export default App;
