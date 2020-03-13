import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/routing/PrivateRoute";

import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            {/* <Route exact path="/" component={Home} /> */}

            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
