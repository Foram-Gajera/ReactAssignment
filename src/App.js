import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import AddUser from "./components/AddUser";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/UserList" component={UserList} />
            <Route path="/AddUser/" component={AddUser} />
            <Route path="/AddUser/:id" component={AddUser} />
            <Redirect to="/UserList" />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
