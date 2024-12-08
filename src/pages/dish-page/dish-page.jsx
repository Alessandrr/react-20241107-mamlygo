import { useParams } from 'react-router-dom';
import { DishContainer } from '../../components/dish/dish-container.jsx';
import { useAuth } from '../../components/authContext/useAuth.js';

export const DishPage = () => {
  const { id } = useParams();
  const { auth } = useAuth();

  return <DishContainer id={id} isAuthenticated={auth.isAuthenticated} />;
};
