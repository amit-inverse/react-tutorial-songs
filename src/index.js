import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducers from './reducers';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
);