import { MenuCounter } from '../counter/menuCounter.jsx';

export const Menu = ({ menuItems }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
            <MenuCounter />
          </li>
        ))}
      </ul>
    </>
  );
};
