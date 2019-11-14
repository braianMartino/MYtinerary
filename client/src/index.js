import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import citiesReducer from './reducers/cityReducer'

const store = createStore(citiesReducer);

ReactDOM.render(    <Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();

