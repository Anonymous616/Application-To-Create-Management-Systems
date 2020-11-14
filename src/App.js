import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/sign-in.component";
import SignUp from "./components/sign-up.component";
import Project from "./components/project.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Project} />
        <Route path="/project" component={Project} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
      </Router>
    </div>
  );
}

export default App;
