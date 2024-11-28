import { Button } from '../button/button.jsx';
import { useUser } from '../userContext/useUser.js';

const STUB_USER = {
  username: 'stub_user',
};

export const LoginButton = () => {
  const { username, setUsername } = useUser();

  const handleClick = () => {
    if (!username) {
      setUsername(STUB_USER.username);
    } else {
      setUsername(null);
    }
  };

  return (
    <Button onClick={handleClick}>
      {username ? `${username}: Logout` : 'Login'}
    </Button>
  );
};
