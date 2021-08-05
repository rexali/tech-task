import {
    BrowserRouter as Router,
    Switch,
    Route,
   //  Link
 } from "react-router-dom";
 import About from '../views/About';
 import Home from '../views/Home';
 import Contact from '../views/Contact';
 import Login from '../views/Login';
 import Signup from '../views/Signup';
import Detail from "../views/Detail";


function RouterSwitch(params) {
    return (
        <Router>
        <div>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Signup />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/detail">
              <Detail />
            </Route>

            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </div>
      </Router>
    )
}
export default RouterSwitch;