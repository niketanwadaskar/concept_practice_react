// MyComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './slices/counterSlice';
import { fetchDataAsync } from './slices/dataSlice';

const MyComponent = () => {
  const count = useSelector((state) => state.counter.value);
  const { status, data, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchDataAsync());
  }, [dispatch]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <p>Data: {JSON.stringify(data)}</p>}
      {status === 'failed' && <p>Error: {error}</p>}
    </div>
  );
};

export default MyComponent;