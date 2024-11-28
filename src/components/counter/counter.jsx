import { useCount } from './useCount.js';
import styles from './counter.module.css';
import { Button } from '../button/button.jsx';
import { useTheme } from '../themeContext/useTheme.js';

export const Counter = (props) => {
  const { count, increment, decrement } = useCount(props);
  const { value: themeValue } = useTheme();

  return (
    <div className={styles.counterContainer}>
      <Button theme={themeValue} onClick={decrement} viewVariant="counter">
        -
      </Button>
      {count}
      <Button theme={themeValue} onClick={increment} viewVariant="counter">
        +
      </Button>
    </div>
  );
};
