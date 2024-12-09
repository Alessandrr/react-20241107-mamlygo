import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/dishes-slice.js';
import { Dish } from './dish.jsx';
import { useRequest } from '../../redux/hooks/use-request.js';
import { getDish } from '../../redux/entities/dishes/get-dish.js';

export const DishContainer = ({ id, isAuthenticated }) => {
  const requestStatus = useRequest(getDish, id);
  const dish = useSelector((state) => selectDishById(state, id));

  if (requestStatus === 'pending') {
    return 'loading';
  }

  if (requestStatus === 'rejected') {
    return 'error';
  }

  if (!dish) return null;

  return <Dish name={dish.name} isAuthenticated={isAuthenticated} id={id} />;
};
