// ExampleComponent.js
import React from 'react';
import { connect, useSelector } from 'react-redux';

const ExampleComponent = ({ dispatch }) => {

  const state = useSelector(state => state);
  const handleClick = () => {
    // Dispatch an action
    dispatch({ type: 'INCREMENT_COUNTER' });
  };

  return (
    <div>
      <button onClick={handleClick}>Increment Counter</button>
      <h1>{state.num}</h1>
    </div>
  );
};

export default connect()(ExampleComponent);