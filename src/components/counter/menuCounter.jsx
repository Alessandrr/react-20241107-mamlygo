import { useCount } from './useCount.js';

export const MenuCounter = () => {
  const { count, increment, decrement } = useCount({ min: 0, max: 5 });

  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};
