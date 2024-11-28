import { Counter } from '../counter/counter.jsx';
import styles from './menu.module.css';

export const Menu = ({ menuItems }) => {
  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li className={styles.menuItem} key={item.id}>
            {item.name}
            <Counter min={0} max={5} />
          </li>
        ))}
      </ul>
    </div>
  );
};
