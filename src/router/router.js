import React from 'react';
import {Route, Switch} from 'react-router-dom';
import asyncComponent from './AsyncComponent'

import App from '../App';
const AsyncApp = asyncComponent(() => import ('../App'))
const AsyncHome = asyncComponent(() => import ('../pages/HomePage/HomePage'));

export default() => (
    <div>
        <Switch>
            <Route exact path="/" component={AsyncHome}/>
        </Switch>
    </div>
);
