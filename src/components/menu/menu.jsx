import { Counter } from '../counter/counter.jsx';

export const Menu = ({ menuItems }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
            <Counter min={0} max={5} />
          </li>
        ))}
      </ul>
    </>
  );
};
