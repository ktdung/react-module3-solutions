import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

const App = (props) => {
  return (
    <div className='wrapper'>
      <Header
        currentUser={props.currentUser}
        participants={props.conversation.participants}
      />
      <ChatStream
        currentUser={props.currentUser}
        messages={props.conversation.messages}
      />
      <Footer />
    </div>
  );
};

export default App;
