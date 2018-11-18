import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => (<h2>Home</h2>);
const About = () => (<h2>About</h2>);
const Users = () => (<h2>Users</h2>);

const AppRouter = () => (
    <Router>
        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
    </Router>
);

export default AppRouter;