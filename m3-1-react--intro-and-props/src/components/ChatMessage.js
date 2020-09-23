import React from 'react';

import Avatar from './Avatar';

import './ChatMessage.css';

const bubbleTipSentSrc = '/assets/tip-sent.svg';
const bubbleTipReceivedSrc = '/assets/tip-received.svg';

const SentMessage = (props) => {
  return (
    <div className='chat-message-wrapper sent'>
      <div className='chat-message'>
        {props.message.body}
        <img
          alt=''
          role='presentation'
          className='tip'
          src={bubbleTipSentSrc}
        />
      </div>
    </div>
  );
};

const ReceivedMessage = (props) => {
  return (
    <div className='chat-message-wrapper received'>
      <Avatar size={36} user={props.message.user} />
      <div className='name-and-message'>
        <div className='author'>{props.message.user.username}</div>
        <div className='chat-message'>
          {props.message.body}
          <img
            alt=''
            role='presentation'
            className='tip'
            src={bubbleTipReceivedSrc}
          />
        </div>
      </div>
    </div>
  );
};

const ChatMessage = (props) => {
  if (props.messageType === 'sent') {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
};

export default ChatMessage;
