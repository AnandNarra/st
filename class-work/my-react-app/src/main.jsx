

import { createRoot } from 'react-dom/client';
import './index.css'; // Importing the css file
import App from "./App.jsx";

let rootContainer = document.getElementById('root');

createRoot(rootContainer).render(<App />);
