import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Switch} from 'react-router-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(

        <BrowserRouter>
            <Switch>
                <Provider store={store}>
                    <App />
                </Provider>
            </Switch>
        </BrowserRouter>


    , document.getElementById('root')
);