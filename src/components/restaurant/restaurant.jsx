import styles from './restaurant.module.css';
import { Outlet } from 'react-router-dom';
import { Tab } from '../tab/tab.jsx';

export const Restaurant = ({ name, menu, reviews, id }) => {
  return (
    <div className={styles.restaurant}>
      <h2>{name}</h2>
      <Tab title="Menu" linkTo={`/restaurants/${id}/menu`} />
      <Tab title="Reviews" linkTo={`/restaurants/${id}/reviews`} />

      <Outlet context={{ reviews, menu }} />
    </div>
  );
};
