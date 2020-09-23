import React from 'react';

import Avatar from './Avatar';

import './Header.css';

const Header = (props) => {
  return (
    <header>
      {props.participants
        .filter((participant) => participant !== props.currentUser)
        .map((participant) => (
          <div className='participant'>
            <Avatar size={48} user={participant} />
            <div className='username'>{participant.username}</div>
          </div>
        ))}
    </header>
  );
};

export default Header;
