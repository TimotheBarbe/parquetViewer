import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import {Provider} from "react-redux";
import {store} from "./state/store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
