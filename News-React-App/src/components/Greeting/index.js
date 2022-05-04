import React from 'react';

const Greeting = ({ username }) => {
  return (
    <h3 aria-label="greeting" id="greeting">
      Hi there, {username ? username : 'friend'}!
    </h3>
  );
};

export default Greeting;
