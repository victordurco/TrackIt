import React from "react";
import GlobalStyle from './style/globalStyles';
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Habits from "./pages/Habits/Habits";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
      <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/cadastro" exact component={SignUp} />
      <Route path="/habitos" exact component={Habits} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
