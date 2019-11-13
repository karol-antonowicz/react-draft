import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import App from "./App";

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Redirect exact from="/abc" to="/" />
          <Route exact path="/abc" component={() => <h1>/abc</h1>} />
          <Route exact path="/abc/" component={() => <h1>/abc/</h1>} />
          <Route exact path="/ABC/" component={() => <h1>/ABC/</h1>} />
          <Route exact path="/abc/def" component={() => <h1>ABC/DEF</h1>} />
          <Route
            path="/users/:id"
            component={props => {
              console.log(props.match.params.id);
              return <h1>Users {props.match.params.id}</h1>;
            }}
          />
          <Route
            path="/users/:id/:name"
            component={props => {
              const { id, name } = props.match.params;
              return (
                <h1>
                  Users {id} - {name}
                </h1>
              );
            }}
          />
          <Route component={() => <h1>404 - sadface</h1>} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;