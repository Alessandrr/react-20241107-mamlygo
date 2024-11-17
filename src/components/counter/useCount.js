import { useState } from 'react';

export const useCount = ({ min, max }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return {
    count,
    increment,
    decrement,
  };
};
