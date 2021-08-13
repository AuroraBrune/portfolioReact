import React from "react";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";
import { Switch, Route } from "react-router-dom";

const Main = () =>  (
    <Switch>
        <Route path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;
