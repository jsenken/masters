import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Fam from "./Pages/Fam";
import Rheas from "./Pages/Rheas";
import Candler from "./Pages/Candler";
import Board from "./Pages/Board";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/family" component={Fam} />
      <Route path="/rheas" component={Rheas} />
      <Route path="/candler" component={Candler} />
      <Route path="/board" component={Board} />
    </Switch>
  </main>
);

export default Main;
