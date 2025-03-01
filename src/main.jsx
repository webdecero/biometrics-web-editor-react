import { createRoot } from 'react-dom/client';
import App from "./app/App.jsx";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
