import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'; 
import App from '../App';

export default class RouterComponent extends Component {
    render() {
        return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </Router>
        )
    }
}
