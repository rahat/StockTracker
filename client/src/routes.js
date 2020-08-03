import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Settings from "./components/Settings";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/stocks">
                <Stocks />
            </Route>
            <Route exact path="/settings">
                <Settings />
            </Route>
        </Switch>
    );
}