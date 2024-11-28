import { useContext } from 'react';
import { UserContext } from './index.js';

export const useUser = () => useContext(UserContext);
