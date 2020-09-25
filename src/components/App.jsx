import React from "react";
import SignIn from "../SignIn";
import Dashboard from "../pages/Dashboard";
import AddExhibitor from "../pages/AddExhibitor";
import AddProduct from "../pages/AddProduct";
import ListofExhibitor from "../pages/ListofExhibitor";
import AddEvent from "../pages/AddEvent";
import AddUserInfo from "../pages/AddUserInfo";
import ListofUsers from "../pages/ListofUsers";
import test from "../pages/test";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={ SignIn }  />
            <Route path="/dashboard" component={ Dashboard } />
            <Route path="/products" component={ AddProduct } />
            <Route path="/exhibitors" component={ ListofExhibitor } />
            <Route path="/events" component={ AddEvent } />
            <Route path="/users" component={ ListofUsers } />
            <Route path="/test" component={ test } />
        </Switch>
    </Router>
  );
}

export default App;
