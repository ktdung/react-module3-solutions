import React from 'react';

const CHARACTER_MAP = {
  x: `×`,
  checkmark: '✓',
};

const Icon = ({ name }) => {
  return CHARACTER_MAP[name];
};

export default Icon;
