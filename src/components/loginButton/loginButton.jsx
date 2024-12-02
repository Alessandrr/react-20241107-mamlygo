import { Button } from '../button/button.jsx';
import { useAuth } from '../authContext/useAuth.js';

export const LoginButton = () => {
  const { auth, toggleAuth } = useAuth();

  const handleClick = () => toggleAuth();

  return (
    <Button onClick={handleClick}>
      {auth.isAuthenticated ? `${auth.username}: Logout` : 'Login'}
    </Button>
  );
};
