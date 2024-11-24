import { createRoot } from 'react-dom/client';
import { restaurants } from './mocks/restaurants.js';
import { App } from './app.jsx';
import './css/style.css';

const root = document.getElementById('root');

const reactRoot = createRoot(root);

reactRoot.render(<App restaurants={restaurants} />);
