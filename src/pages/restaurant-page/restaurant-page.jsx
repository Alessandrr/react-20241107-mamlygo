import { Outlet, useParams } from 'react-router-dom';
import { RestaurantContainer } from '../../components/restaurant/restaurant-container.jsx';
import styles from './restaurant-page.module.css';

export const RestaurantPage = () => {
  const { id: restaurantId } = useParams();

  return (
    <div className={styles.restaurant}>
      <RestaurantContainer restaurantId={restaurantId} />
      <Outlet />
    </div>
  );
};
