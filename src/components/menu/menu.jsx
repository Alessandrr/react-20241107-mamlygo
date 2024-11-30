import { Counter } from '../counter/counter.jsx';
import styles from './menu.module.css';
import { useAuth } from '../authContext/useAuth.js';

export const Menu = ({ menuItems }) => {
  const { auth } = useAuth();

  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li className={styles.menuItem} key={item.id}>
            {item.name}
            {auth.username && <Counter min={0} max={5} />}
          </li>
        ))}
      </ul>
    </div>
  );
};
