import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/pages/users/AddUser";
import EditUser from "./components/pages/users/EditUser";
import UserView from "./components/pages/users/UserView";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/about"} exact component={About} />
          <Route path={"/contact"} exact component={Contact}/>
          <Route path={"/users/add"} component={AddUser}/>
          <Route path={"/users/edit/:id"} component={EditUser}/>
          <Route path={"/users/:id"} exact component={UserView} />

          <Route component={NotFound}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
