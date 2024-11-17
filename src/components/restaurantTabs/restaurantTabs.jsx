import { restaurants } from '../../mocks/restaurants.js';

export const RestaurantTabs = ({ onChange }) => {
  const handleTabSelected = (restaurant) => {
    onChange(restaurant);
  };

  return (
    <div>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => handleTabSelected(restaurant)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};
