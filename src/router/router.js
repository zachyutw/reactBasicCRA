import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/App/Loading/Loading';

import App from '../App';





const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

export default () => (
    <div>
     
        <Switch>

            <Route exact path="/" component={App} />
        </Switch>

     
    </div>
);
