import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from "./App";
import Submitted from "./pages/Submitted";
import Home from "./pages/Home"
import * as serviceWorker from "./serviceWorker";
import FormPage from "./pages/FormPage";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/form" component={FormPage} />
      <Route path="/submitted" component={Submitted} />
      <Route path="/home" component={Home} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
