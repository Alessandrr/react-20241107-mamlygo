import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/restaurants-slice.js';
import { RestaurantContainer } from '../restaurant/restaurant-container.jsx';
import classNames from 'classnames';
import { useTheme } from '../themeContext/useTheme.js';
import { RestaurantTabContainer } from '../tab/restaurant-tab-container.jsx';
import styles from './restaurantsPage.module.css';

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const { themeValue } = useTheme();

  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurantIds[0]
  );

  const handleRestaurantChange = (restaurantId) => {
    if (selectedRestaurantId !== restaurantId) {
      setSelectedRestaurantId(restaurantId);
    }
  };

  return (
    <>
      <div
        className={classNames(styles.tabsContainer, {
          [styles.dark]: themeValue === 'dark',
        })}
      >
        <div className={styles.tabsNav}>
          {restaurantIds.map((restaurantId) => {
            return (
              <RestaurantTabContainer
                key={restaurantId}
                id={restaurantId}
                theme={themeValue}
                onClick={handleRestaurantChange}
                isActive={selectedRestaurantId === restaurantId}
              />
            );
          })}
        </div>
      </div>

      {selectedRestaurantId && (
        <RestaurantContainer
          key={selectedRestaurantId}
          id={selectedRestaurantId}
        />
      )}
    </>
  );
};
