import React from "react";
import SignIn from "../SignIn";
import Dashboard from "../pages/Dashboard";
import AddExhibitor from "../pages/AddExhibitor";
import AddProduct from "../pages/AddProduct";
import ListofExhibitor from "../pages/ListofExhibitor";

//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
       <Switch>
        <Route exact path="/" component={ SignIn }  />
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/addexhibitor" component={ AddExhibitor } />
        <Route path="/addproduct" component={ AddProduct } />
        <Route path="/listexhibitors" component={ ListofExhibitor } />
        
      </Switch>
    </Router>
  );
}

export default App;
