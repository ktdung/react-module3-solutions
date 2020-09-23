import React from 'react';
import ReactDOM from 'react-dom';

import { sellers, items } from './data';

import App from './components/App';

const rootElement = document.getElementById('root');

ReactDOM.render(<App sellers={sellers} items={items} />, rootElement);
