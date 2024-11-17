import { restaurants } from '../../mocks/restaurants.js';

export const RestaurantTabs = ({ onChange }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <button key={restaurant.id} onClick={() => onChange(restaurant)}>
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};
