import { RestaurantTabs } from '../restaurantTabs/restaurantTabs.jsx';
import { Restaurant } from '../restaurant/restaurant.jsx';
import { restaurants } from '../../mocks/restaurants.js';
import { useState } from 'react';

export const RestaurantsPage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  const handleRestaurantChange = (restaurant) => {
    if (selectedRestaurant !== restaurant) {
      setSelectedRestaurant(restaurant);
    }
  };

  return (
    <>
      <RestaurantTabs
        activeRestaurantId={selectedRestaurant.id}
        onChange={handleRestaurantChange}
      />
      <Restaurant
        key={selectedRestaurant.id}
        restaurantData={selectedRestaurant}
      />
    </>
  );
};
