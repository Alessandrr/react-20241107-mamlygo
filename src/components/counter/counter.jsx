import { useCount } from './useCount.js';
import styles from './counter.module.css';

export const Counter = (props) => {
  const { count, increment, decrement } = useCount(props);

  return (
    <div className={styles.counterContainer}>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};
