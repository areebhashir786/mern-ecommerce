import React, { useEffect } from "react";
import "./App.css";
// import Layout from "./Components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Container/Home";
import Signup from "./Container/Signup";
import Signin from "./Container/Signin";
import PrivateRoute from "./Components/HOC/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    // if (auth.authenticate) {
    //   dispatch(getInitialData());
    // }
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
