import { useParams } from 'react-router-dom';
import { MenuContainer } from '../../components/menu/menu-container.jsx';

export const MenuPage = () => {
  const { id: restaurantId } = useParams();

  return <MenuContainer restaurantId={restaurantId} />;
};
