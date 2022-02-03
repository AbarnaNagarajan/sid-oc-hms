import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import LoginPage from "./Views/Account/Login";
import React from "react";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

function App() {
  return (
    <BrowserRouter  basename={'/hms/'}>
      <Suspense fallback={loading()}>
        <Switch>
          <Route
            path="/Dashboard"
            render={(props) => <Dashboard {...props} />}
          />
          <Route
            exact
            path="/Login"
            render={(props) => <LoginPage {...props} />}
          />
          <Route path="/OP" render={(props) => <Dashboard {...props} />} />
          <Route path="/OPGrid" render={(props) => <Dashboard {...props} />} />
          <Route path="/OPTable" render={(props) => <Dashboard {...props} />} />
          <Route
            path="/Appointment"
            render={(props) => <Dashboard {...props} />}
          />
          <Route
            path="/Register"
            render={(props) => <Dashboard {...props} />}
          />
          <Route
            path="/Schedule"
            render={(props) => <Dashboard {...props} />}
          />
          <Route exact path="/" render={(props) => <LoginPage {...props} />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
