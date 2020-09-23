import React from 'react';

import './Avatar.css';

const Avatar = (props) => {
  return (
    <img
      alt={`${props.user.username}'s avatar`}
      src={props.user.avatar}
      className='avatar'
      style={{ width: props.size, height: props.size }}
    />
  );
};

export default Avatar;
