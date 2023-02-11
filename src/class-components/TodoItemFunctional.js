import React from 'react';

const Hello = (props) => {
  return (
    <div>
      <h1>Hello {props.name ? props.name : 'World'}</h1>
      <h1>I'm {props.age} year olds</h1>
    </div>
  );
}

export default Hello;