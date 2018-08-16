import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'; 
import App from '../App';
import asyncComponent from './asyncComponent';
const AsyncApp = asyncComponent( ()=>import('../App') );
const HomePage = asyncComponent( ()=>import('pages/HomePage/HomePage') );

export default class RouterComponent extends Component {
    render() {
        return (
        <Router>
            <Switch>
                <Route exact path="/" component={AsyncApp} />
                <Route exact path="/home" component={HomePage} />
            </Switch>
        </Router>
        )
    }
}
