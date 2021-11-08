import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
