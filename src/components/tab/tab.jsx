import classNames from 'classnames';
import styles from './tab.module.css';

export const Tab = ({ isActive, theme, onClick, title }) => {
  return (
    <button
      className={classNames(styles.tab, {
        [styles.dark]: theme === 'dark',
        [styles.activeTab]: isActive,
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
