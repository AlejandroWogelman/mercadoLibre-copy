import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomeScreen from "./screens/Home";

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact component={HomeScreen} path="/" />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Routes;
