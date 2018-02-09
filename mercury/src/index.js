import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Switch} from 'react-router-dom';

import './index.css';
import App from './components/App';

ReactDOM.render(

        <BrowserRouter>
            <Switch>
                <App />
            </Switch>
        </BrowserRouter>


    , document.getElementById('root')
);