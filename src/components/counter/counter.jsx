import { useCount } from './useCount.js';

export const Counter = (props) => {
  const { count, increment, decrement } = useCount(props);

  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};
