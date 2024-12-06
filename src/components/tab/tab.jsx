import classNames from 'classnames';
import styles from './tab.module.css';
import { NavLink } from 'react-router-dom';

export const Tab = ({ theme, title, linkTo }) => {
  return (
    <NavLink
      to={linkTo}
      className={({ isActive }) =>
        classNames(styles.tab, {
          [styles.dark]: theme === 'dark',
          [styles.activeTab]: isActive,
        })
      }
    >
      {title}
    </NavLink>
  );
};
