import * as React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Login from "./login";
import Register from "./register";

class App extends React.Component {
    render() {
      return(
        <React.Fragment>
          <div className="container">
            <Switch>
                <Route exact path="/">
                    <img src="img/logo.svg"/>
                    <h1>Home</h1>
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                  <Register />
                </Route>
            </Switch>
          </div>
        </React.Fragment>
      )
    }
}

export default App;