import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './index.css';


import RouterComponent from 'router/RouterComponent';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.css';



ReactDOM.render(<Provider store={store}>
    <RouterComponent />
</Provider>, document.getElementById('root'));


registerServiceWorker();