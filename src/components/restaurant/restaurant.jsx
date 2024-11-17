import { Menu } from '../menu/menu.jsx';
import { Reviews } from '../reviews/reviews.jsx';

export const Restaurant = ({ restaurantData }) => {
  const { name, menu, reviews } = restaurantData;

  return (
    <div>
      <h2>{name}</h2>
      {Boolean(menu.length) && <Menu menuItems={menu} />}
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
    </div>
  );
};
