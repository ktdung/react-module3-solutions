import React from 'react';

import ChatMessage from './ChatMessage';

import './ChatStream.css';

const ChatStream = (props) => {
  return (
    <div className='chat-stream'>
      {props.messages.map((message) => (
        <ChatMessage
          messageType={message.user === props.currentUser ? 'sent' : 'received'}
          message={message}
        />
      ))}
    </div>
  );
};

export default ChatStream;
