import { useState } from 'react';

export const useCount = ({
  min,
  max,
  onIncrement,
  onDecrement,
  initialValue,
}) => {
  const [count, setCount] = useState(initialValue ?? min);

  const increment = () => {
    if (count >= max) {
      return;
    }

    if (onIncrement) {
      onIncrement(count + 1);
    }

    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= min) {
      return;
    }

    if (onDecrement) {
      onDecrement(count - 1);
    }

    setCount(count - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
};
