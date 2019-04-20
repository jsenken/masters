import React, { Component } from "react";
// import { Link, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
// import Home from "./Pages/Home";
// import Fam from "./Pages/Fam";
// import Rheas from "./Pages/Rheas";
// import Candler from "./Pages/Candler";

// import Button from "./Components/Button/Button";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "./app.css";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route exact path="/" componenet={Home} />
//           <Route exact path="/fam" component={Fam} />
//           <Route exact path="/rheas" componenet={Rheas} />
//           <Route exact path="/candler" componenet={Candler} />
//         </Switch>
//       </Router>
//     );
//   }
// }
const App = () => (
  <div>
    <Main />
  </div>
);

export default App;
