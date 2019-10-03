import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './assets/sass/app.scss';
import App from './components/App';
import {store} from "./Store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));


