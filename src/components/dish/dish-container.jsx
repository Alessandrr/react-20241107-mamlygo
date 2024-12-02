import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/dishes-slice.js';
import { Dish } from './dish.jsx';

export const DishContainer = ({ id, isAuthenticated }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) return null;

  return <Dish name={dish.name} isAuthenticated={isAuthenticated} />;
};
