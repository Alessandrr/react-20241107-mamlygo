import classNames from 'classnames';
import styles from './button.module.css';

export const Button = ({
  viewVariant = 'primary',
  theme = 'light',
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(styles.button, styles[viewVariant], {
        [styles.dark]: theme === 'dark',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
