import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, configureStore } from 'redux';
import thunk from 'redux-thunk'

// Redux dev Tools
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
