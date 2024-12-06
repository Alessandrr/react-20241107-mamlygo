import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/restaurants-slice.js';
import classNames from 'classnames';
import { useTheme } from '../../components/themeContext/useTheme.js';
import { RestaurantTabContainer } from '../../components/tab/restaurant-tab-container.jsx';
import styles from './restaurantsPage.module.css';
import { Outlet } from 'react-router-dom';

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const { themeValue } = useTheme();

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
              />
            );
          })}
        </div>
      </div>

      <Outlet />
    </>
  );
};
