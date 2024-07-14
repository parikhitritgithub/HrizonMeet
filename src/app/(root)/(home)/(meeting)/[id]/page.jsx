import React from 'react';

const Meeting = ({ params }) => {
  return (
    <div>Meeting room: #{params.id}</div>
  );
};

export default Meeting;
