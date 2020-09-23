import React from 'react';
import ReactDOM from 'react-dom';

import data, { users } from './data';
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <div style={{ display: `flex` }}>
    <App currentUser={users.george} conversation={data.conversation} />
    <App currentUser={users.elaine} conversation={data.conversation} />
  </div>,
  rootElement
);
