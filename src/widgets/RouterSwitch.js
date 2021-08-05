import {
    BrowserRouter as Router,
    Switch,
    Route,
   //  Link
 } from "react-router-dom";
 import Home from '../views/Home';
 


function RouterSwitch(params) {
    return (
        <Router>
        <div>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/home">
              <Home />
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