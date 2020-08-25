import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Stocks from "./components/Stocks";
import EditAlert from "./components/EditAlert";
import CreateAlert from "./components/CreateAlert";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/stocks">
                <Stocks />
            </Route>
            <Route exact path="/update-alert/:id" component={EditAlert} />
            <Route exact path="/create-alert" component={CreateAlert} />
        </Switch>
    );
}