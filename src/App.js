import React from "react";
import GlobalStyle from './style/globalStyles';
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Habits from "./pages/Habits/Habits";
import UserContext from './contexts/UserContext';
import { useState } from "react/cjs/react.development";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <GlobalStyle />
      <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/cadastro" exact component={SignUp} />
        <Route path="/habitos" exact component={Habits} />
        </Switch>
      </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
