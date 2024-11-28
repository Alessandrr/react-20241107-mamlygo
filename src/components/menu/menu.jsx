import { Counter } from '../counter/counter.jsx';
import styles from './menu.module.css';
import { useUser } from '../userContext/useUser.js';

export const Menu = ({ menuItems }) => {
  const { username } = useUser();

  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li className={styles.menuItem} key={item.id}>
            {item.name}
            {username && <Counter min={0} max={5} />}
          </li>
        ))}
      </ul>
    </div>
  );
};
