import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Counter from './playground/3state/Counter';
//import Toggle from './playground/3state/Toggle';
//import Stateless from './playground/3state/Stateless';
//import CounterTwo from './playground/3state/CounterTwo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();