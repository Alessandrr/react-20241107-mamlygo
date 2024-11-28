import { useForm } from './useForm.js';
import { Counter } from '../counter/counter.jsx';
import styles from './reviewForm.module.css';
import { Button } from '../button/button.jsx';
import { useTheme } from '../themeContext/useTheme.js';

export const ReviewForm = () => {
  const { form, setName, setText, setRating, clear } = useForm();
  const { name, text, rating } = form;
  const { value: themeValue } = useTheme();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <span className={styles.formLabel}>Name</span>
        <input
          className={styles.formInput}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <span className={styles.formLabel}>Text</span>
        <input
          className={styles.formInput}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <Counter
        min={1}
        max={5}
        onIncrement={setRating}
        onDecrement={setRating}
        initialValue={rating}
      />

      <div className={styles.buttonsContainer}>
        <Button theme={themeValue} viewVariant="clear" onClick={clear}>
          Clear
        </Button>

        <Button theme={themeValue} viewVariant="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};
