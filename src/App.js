import React from "react";
import GlobalStyle from "./style/globalStyles";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Habits from "./pages/Habits/Habits";
import Historic from "./pages/Historic/Historic";
import Today from "./pages/Today/Today";
import UserContext from "./contexts/UserContext";
import { useState } from "react/cjs/react.development";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const [user, setUser] = useState("");
    const [todaysProgress, setTodaysProgress] = useState(0);

    return (
        <Router>
            <GlobalStyle />
            <div className="App">
                <UserContext.Provider
                    value={{ user, setUser, todaysProgress, setTodaysProgress }}
                >
                    <Switch>
                        <Route path="/" exact component={SignIn} />
                        <Route path="/cadastro" exact component={SignUp} />
                        <Route path="/habitos" exact component={Habits} />
                        <Route path="/hoje" exact component={Today} />
                        <Route path="/historico" exact component={Historic} />
                    </Switch>
                </UserContext.Provider>
            </div>
        </Router>
    );
}

export default App;
